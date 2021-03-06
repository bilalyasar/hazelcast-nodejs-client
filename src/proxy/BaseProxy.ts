import {SerializationService} from '../serialization/SerializationService';
import {Data} from '../serialization/Data';
import ClientMessage = require('../ClientMessage');
import * as Q from 'q';
import HazelcastClient from '../HazelcastClient';

/**
 * Common super class for any proxy.
 */
export class BaseProxy {

    protected client: HazelcastClient;
    protected name: string;
    protected serviceName: string;

    constructor(client: HazelcastClient, serviceName: string, name: string) {
        this.client = client;
        this.name = name;
        this.serviceName = serviceName;
    }

    private createPromise<T>(codec: any, promise: Q.Promise<ClientMessage>): Q.Promise<T> {
        var deferred: Q.Deferred<T> = Q.defer<T>();
        var toObject = this.toObject.bind(this);
        promise.then(function(clientMessage: ClientMessage) {
            if (codec.hasOwnProperty('decodeResponse')) {
                var parameters: any = codec.decodeResponse(clientMessage, toObject);
                deferred.resolve(parameters.response);
            } else {
                deferred.resolve();
            }
        }).catch(function (e) {
            deferred.reject(e);
        });
        return deferred.promise;
    }

    /**
     * Encodes a request from a codec and invokes it on owner node of given key.
     * @param codec
     * @param partitionKey
     * @param codecArguments
     * @returns
     */
    protected encodeInvokeOnKey<T>(codec: any, partitionKey: any, ...codecArguments: any[]): Q.Promise<T> {
        var partitionId: number = this.client.getPartitionService().getPartitionId(partitionKey);
        return this.encodeInvokeOnPartition<T>(codec, partitionId, ...codecArguments);
    }

    /**
     * Encodes a request from a codec and invokes it on any node.
     * @param codec
     * @param codecArguments
     * @returns
     */
    protected encodeInvokeOnRandomTarget<T>(codec: any, ...codecArguments: any[]): Q.Promise<T> {
        var clientMessage = codec.encodeRequest(this.name, ...codecArguments);
        var invocationResponse = this.client.getInvocationService().invokeOnRandomTarget(clientMessage);
        return this.createPromise<T>(codec, invocationResponse);
    }

    /**
     * Encodes a request from a codec and invokes it on owner node of given partition.
     * @param codec
     * @param partitionId
     * @param codecArguments
     * @returns
     */
    protected encodeInvokeOnPartition<T>(codec: any, partitionId: number, ...codecArguments: any[]): Q.Promise<T> {
        var clientMessage = codec.encodeRequest(this.name, ...codecArguments);
        var invocationResponse: Q.Promise<ClientMessage> = this.client.getInvocationService()
            .invokeOnPartition(clientMessage, partitionId);

        return this.createPromise<T>(codec, invocationResponse);
    }

    /**
     * Serializes an object according to serialization settings of the client.
     * @param object
     * @returns
     */
    protected toData(object: any): Data {
        return this.client.getSerializationService().toData(object);
    }

    /**
     * De-serializes an object from binary form according to serialization settings of the client.
     * @param data
     * @returns {any}
     */
    protected toObject(data: Data): any {
        return this.client.getSerializationService().toObject(data);
    }

    getPartitionKey() : string {
        return this.name;
    }

    /**
     * Returns name of the proxy.
     * @returns
     */
    getName() : string {
        return this.name;
    }

    /**
     * Returns name of the service which this proxy belongs to.
     * Refer to service field of {@link ProxyManager} for service names.
     * @returns
     */
    getServiceName() : string {
        return this.serviceName;
    }

    /**
     * Deletes the proxy object and frees allocated resources on cluster.
     * @returns
     */
    destroy() : Q.Promise<void> {
        return this.client.getProxyManager().destroyProxy(this.name, this.serviceName);
    }
}
