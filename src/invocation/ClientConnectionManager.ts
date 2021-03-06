import * as Q from 'q';

import Address = require('../Address');
import ClientConnection = require('./ClientConnection');

import InvocationService = require('./InvocationService');

import {GroupConfig, ClientNetworkConfig} from '../Config';

import ConnectionAuthenticator = require('./ConnectionAuthenticator');
import {LoggingService} from '../logging/LoggingService';
import {EventEmitter} from 'events';
import HazelcastClient from '../HazelcastClient';

const EMIT_CONNECTION_CLOSED = 'connectionClosed';
const EMIT_CONNECTION_OPENED = 'connectionOpened';

/**
 * Maintains connections between the client and members of the cluster.
 */
class ClientConnectionManager extends EventEmitter {
    private client: HazelcastClient;
    private pendingConnections: {[address: string]: Q.Deferred<ClientConnection>} = {};
    private logger = LoggingService.getLoggingService();
    establishedConnections: {[address: string]: ClientConnection} = {};

    constructor(client: HazelcastClient) {
        super();
        this.client = client;
    }

    /**
     * Returns the {@link ClientConnection} with given {@link Address}. If there is no such connection established,
     * it first connects to the address and then return the {@link ClientConnection}.
     * @param address
     * @param ownerConnection Sets the connected node as owner of this client if true.
     * @returns {Promise<ClientConnection>|Promise<T>}
     */
    getOrConnect(address: Address, ownerConnection: boolean = false): Q.Promise<ClientConnection> {
        var addressIndex = Address.encodeToString(address);
        var result: Q.Deferred<ClientConnection> = Q.defer<ClientConnection>();

        var establishedConnection = this.establishedConnections[addressIndex];

        if (establishedConnection) {
            result.resolve(establishedConnection);
            return result.promise;
        }

        var pendingConnection = this.pendingConnections[addressIndex];

        if (pendingConnection) {
            return pendingConnection.promise;
        }

        this.pendingConnections[addressIndex] = result;

        var clientConnection = new ClientConnection(address);

        clientConnection.connect().then(() => {
            clientConnection.registerResponseCallback((data: Buffer) => {
                this.client.getInvocationService().processResponse(data);
            });
        }).then(() => {
            return this.authenticate(clientConnection, ownerConnection);
        }).then((authenticated: boolean) => {
            if (authenticated) {
                this.establishedConnections[Address.encodeToString(clientConnection.address)] = clientConnection;
            } else {
                throw new Error('Authentication failed');
            }
        }).then(() => {
            this.onConnectionOpened(clientConnection);
            result.resolve(clientConnection);
        }).catch((e: any) => {
            result.reject(e);
        }).finally(() => {
            delete this.pendingConnections[addressIndex];
        });
        return result.promise;
    }

    /**
     * Destroys the connection with given node address.
     * @param address
     */
    destroyConnection(address: Address): void {
        var addressStr = Address.encodeToString(address);
        if (this.pendingConnections.hasOwnProperty(addressStr)) {
            this.pendingConnections[addressStr].reject(null);
        }
        if (this.establishedConnections.hasOwnProperty(addressStr)) {
            var conn = this.establishedConnections[addressStr];
            conn.close();
            delete this.establishedConnections[addressStr];
            this.onConnectionClosed(conn);
        }
    }

    shutdown() {
        for (var pending in this.pendingConnections) {
            this.pendingConnections[pending].reject(new Error('Client is shutting down!'));
        }
        for (var conn in this.establishedConnections) {
            this.establishedConnections[conn].close();
        }
    }

    private onConnectionClosed(connection: ClientConnection) {
        this.emit(EMIT_CONNECTION_CLOSED, connection);
    }

    private onConnectionOpened(connection: ClientConnection) {
        this.emit(EMIT_CONNECTION_OPENED, connection);
    }

    private authenticate(connection: ClientConnection, ownerConnection: boolean): Q.Promise<boolean> {
        var authenticator = new ConnectionAuthenticator(connection, this.client);

        return authenticator.authenticate(ownerConnection);
    }
}

export = ClientConnectionManager;
