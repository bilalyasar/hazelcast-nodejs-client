# Change Log

## [Unreleased](https://github.com/hazelcast/hazelcast-nodejs-client/tree/HEAD)

[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.3.0...HEAD)

**Merged pull requests:**

- serialization and map entry listener code samples [\#111](https://github.com/hazelcast/hazelcast-nodejs-client/pull/111) ([mustafaiman](https://github.com/mustafaiman))

## [v0.3.0](https://github.com/hazelcast/hazelcast-nodejs-client/tree/v0.3.0) (2016-06-07)
[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.3.0-rc...v0.3.0)

## [v0.3.0-rc](https://github.com/hazelcast/hazelcast-nodejs-client/tree/v0.3.0-rc) (2016-06-07)
[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.2.1...v0.3.0-rc)

**Closed issues:**

- Handling Server restart? [\#109](https://github.com/hazelcast/hazelcast-nodejs-client/issues/109)
- Queue API [\#101](https://github.com/hazelcast/hazelcast-nodejs-client/issues/101)
- List API [\#100](https://github.com/hazelcast/hazelcast-nodejs-client/issues/100)
- No test for Set.clear [\#99](https://github.com/hazelcast/hazelcast-nodejs-client/issues/99)
- Set Implementation [\#97](https://github.com/hazelcast/hazelcast-nodejs-client/issues/97)
- TTL is milliseconds, not seconds. [\#94](https://github.com/hazelcast/hazelcast-nodejs-client/issues/94)
- Adding ttl with put doesnt save entry [\#93](https://github.com/hazelcast/hazelcast-nodejs-client/issues/93)
- npm: publish to npm.org [\#63](https://github.com/hazelcast/hazelcast-nodejs-client/issues/63)
- Map Proxy Implementation [\#18](https://github.com/hazelcast/hazelcast-nodejs-client/issues/18)
- Client Serialization Service [\#17](https://github.com/hazelcast/hazelcast-nodejs-client/issues/17)
- Client Partition Service [\#16](https://github.com/hazelcast/hazelcast-nodejs-client/issues/16)
- Client Cluster Service [\#15](https://github.com/hazelcast/hazelcast-nodejs-client/issues/15)
- Hazelcast Client Protocol Client Message implementation [\#11](https://github.com/hazelcast/hazelcast-nodejs-client/issues/11)
- implement shutdown method for HazelcastClient [\#8](https://github.com/hazelcast/hazelcast-nodejs-client/issues/8)
- test slack integration [\#6](https://github.com/hazelcast/hazelcast-nodejs-client/issues/6)

**Merged pull requests:**

- fix: runs shutdown procedure when connection to cluster is lost. [\#110](https://github.com/hazelcast/hazelcast-nodejs-client/pull/110) ([mustafaiman](https://github.com/mustafaiman))
- List implementation [\#108](https://github.com/hazelcast/hazelcast-nodejs-client/pull/108) ([GhostInAMachine](https://github.com/GhostInAMachine))
- integrate remap istanbul and see typescript coverage [\#107](https://github.com/hazelcast/hazelcast-nodejs-client/pull/107) ([mustafaiman](https://github.com/mustafaiman))
- extend set proxy from PartitionSpecificProxy [\#106](https://github.com/hazelcast/hazelcast-nodejs-client/pull/106) ([mustafaiman](https://github.com/mustafaiman))
- Queue Proxy [\#105](https://github.com/hazelcast/hazelcast-nodejs-client/pull/105) ([mustafaiman](https://github.com/mustafaiman))
- Portable Serialization [\#104](https://github.com/hazelcast/hazelcast-nodejs-client/pull/104) ([mustafaiman](https://github.com/mustafaiman))
- List interface [\#103](https://github.com/hazelcast/hazelcast-nodejs-client/pull/103) ([mustafaiman](https://github.com/mustafaiman))
- Serialization [\#102](https://github.com/hazelcast/hazelcast-nodejs-client/pull/102) ([mustafaiman](https://github.com/mustafaiman))
- Set impl [\#98](https://github.com/hazelcast/hazelcast-nodejs-client/pull/98) ([GhostInAMachine](https://github.com/GhostInAMachine))
- adds set codecs [\#96](https://github.com/hazelcast/hazelcast-nodejs-client/pull/96) ([mustafaiman](https://github.com/mustafaiman))
- set api complete [\#95](https://github.com/hazelcast/hazelcast-nodejs-client/pull/95) ([mustafaiman](https://github.com/mustafaiman))
- Map Proxy API + Implementation [\#92](https://github.com/hazelcast/hazelcast-nodejs-client/pull/92) ([mustafaiman](https://github.com/mustafaiman))
- adds simple map benchmark with put get and remove [\#91](https://github.com/hazelcast/hazelcast-nodejs-client/pull/91) ([mustafaiman](https://github.com/mustafaiman))
- removes gulp from build process, uses npm scripts instead [\#89](https://github.com/hazelcast/hazelcast-nodejs-client/pull/89) ([mustafaiman](https://github.com/mustafaiman))

## [v0.2.1](https://github.com/hazelcast/hazelcast-nodejs-client/tree/v0.2.1) (2016-04-19)
[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.2.0...v0.2.1)

## [v0.2.0](https://github.com/hazelcast/hazelcast-nodejs-client/tree/v0.2.0) (2016-04-19)
[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.1...v0.2.0)

**Closed issues:**

- generate API documentation from comments [\#85](https://github.com/hazelcast/hazelcast-nodejs-client/issues/85)
- Missing code coverage [\#62](https://github.com/hazelcast/hazelcast-nodejs-client/issues/62)
- npm: replace tsd with typings module [\#61](https://github.com/hazelcast/hazelcast-nodejs-client/issues/61)
- npm install shouldn't run the tests [\#59](https://github.com/hazelcast/hazelcast-nodejs-client/issues/59)
- Missing methods [\#56](https://github.com/hazelcast/hazelcast-nodejs-client/issues/56)
- DistributedObjectListener [\#55](https://github.com/hazelcast/hazelcast-nodejs-client/issues/55)
- LifecycleService [\#54](https://github.com/hazelcast/hazelcast-nodejs-client/issues/54)
- Invocation does not reject on closed connection [\#44](https://github.com/hazelcast/hazelcast-nodejs-client/issues/44)
- Codec parameters does not have required fields [\#37](https://github.com/hazelcast/hazelcast-nodejs-client/issues/37)
- Hazelcast Client Protocol Codec implementation via code-generator [\#12](https://github.com/hazelcast/hazelcast-nodejs-client/issues/12)

**Merged pull requests:**

- Update version and change name. [\#87](https://github.com/hazelcast/hazelcast-nodejs-client/pull/87) ([mustafaiman](https://github.com/mustafaiman))
- Docs [\#86](https://github.com/hazelcast/hazelcast-nodejs-client/pull/86) ([mustafaiman](https://github.com/mustafaiman))
- adds typescript and typings as dev dependencies [\#84](https://github.com/hazelcast/hazelcast-nodejs-client/pull/84) ([mustafaiman](https://github.com/mustafaiman))
- Release prep [\#82](https://github.com/hazelcast/hazelcast-nodejs-client/pull/82) ([mustafaiman](https://github.com/mustafaiman))
- fix forever pinging removed member [\#81](https://github.com/hazelcast/hazelcast-nodejs-client/pull/81) ([mustafaiman](https://github.com/mustafaiman))
- adds getLocalEndpoint [\#80](https://github.com/hazelcast/hazelcast-nodejs-client/pull/80) ([mustafaiman](https://github.com/mustafaiman))
- heartbeat tests and change in Address class [\#79](https://github.com/hazelcast/hazelcast-nodejs-client/pull/79) ([mustafaiman](https://github.com/mustafaiman))
- Additional map tests [\#78](https://github.com/hazelcast/hazelcast-nodejs-client/pull/78) ([mustafaiman](https://github.com/mustafaiman))
- false config client start test [\#77](https://github.com/hazelcast/hazelcast-nodejs-client/pull/77) ([mustafaiman](https://github.com/mustafaiman))
- Client UUID and Owner UUID are correctly set to secondary connections [\#76](https://github.com/hazelcast/hazelcast-nodejs-client/pull/76) ([GhostInAMachine](https://github.com/GhostInAMachine))
- removes unused lodash dependency [\#75](https://github.com/hazelcast/hazelcast-nodejs-client/pull/75) ([mustafaiman](https://github.com/mustafaiman))
- replaces tsd with typings module [\#74](https://github.com/hazelcast/hazelcast-nodejs-client/pull/74) ([mustafaiman](https://github.com/mustafaiman))
- lost connection reconnection test [\#73](https://github.com/hazelcast/hazelcast-nodejs-client/pull/73) ([mustafaiman](https://github.com/mustafaiman))
- string serialization fix [\#72](https://github.com/hazelcast/hazelcast-nodejs-client/pull/72) ([mustafaiman](https://github.com/mustafaiman))
- logging test fix. closes hanging client after test [\#71](https://github.com/hazelcast/hazelcast-nodejs-client/pull/71) ([mustafaiman](https://github.com/mustafaiman))
- lifecycle-service [\#70](https://github.com/hazelcast/hazelcast-nodejs-client/pull/70) ([mustafaiman](https://github.com/mustafaiman))
- getMembers [\#69](https://github.com/hazelcast/hazelcast-nodejs-client/pull/69) ([mustafaiman](https://github.com/mustafaiman))
- DistributedObjectListener [\#68](https://github.com/hazelcast/hazelcast-nodejs-client/pull/68) ([mustafaiman](https://github.com/mustafaiman))
- HazelcastClient.getDistributedObjects\(\) function [\#67](https://github.com/hazelcast/hazelcast-nodejs-client/pull/67) ([mustafaiman](https://github.com/mustafaiman))
- connection manager extends EventEmitter [\#66](https://github.com/hazelcast/hazelcast-nodejs-client/pull/66) ([mustafaiman](https://github.com/mustafaiman))
- Owner connection lost/reconnection fix + Remote controller test [\#64](https://github.com/hazelcast/hazelcast-nodejs-client/pull/64) ([mustafaiman](https://github.com/mustafaiman))
- removes ts build from npm install stage [\#60](https://github.com/hazelcast/hazelcast-nodejs-client/pull/60) ([mustafaiman](https://github.com/mustafaiman))
- Logging [\#58](https://github.com/hazelcast/hazelcast-nodejs-client/pull/58) ([mustafaiman](https://github.com/mustafaiman))
- added nvmrc with usage of stable Node.js version [\#57](https://github.com/hazelcast/hazelcast-nodejs-client/pull/57) ([gAmUssA](https://github.com/gAmUssA))
- Invocation retry [\#53](https://github.com/hazelcast/hazelcast-nodejs-client/pull/53) ([GhostInAMachine](https://github.com/GhostInAMachine))
- Connection write error handling [\#51](https://github.com/hazelcast/hazelcast-nodejs-client/pull/51) ([mustafaiman](https://github.com/mustafaiman))
- Helper Codecs [\#48](https://github.com/hazelcast/hazelcast-nodejs-client/pull/48) ([mustafaiman](https://github.com/mustafaiman))
- fixed map codecs [\#47](https://github.com/hazelcast/hazelcast-nodejs-client/pull/47) ([bilalyasar](https://github.com/bilalyasar))
- seperates compilation and testing [\#45](https://github.com/hazelcast/hazelcast-nodejs-client/pull/45) ([mustafaiman](https://github.com/mustafaiman))

## [v0.1](https://github.com/hazelcast/hazelcast-nodejs-client/tree/v0.1) (2016-03-16)
[Full Changelog](https://github.com/hazelcast/hazelcast-nodejs-client/compare/v0.3.6...v0.1)

**Closed issues:**

- Socket data splitting [\#34](https://github.com/hazelcast/hazelcast-nodejs-client/issues/34)
- add js files to gitignore file [\#30](https://github.com/hazelcast/hazelcast-nodejs-client/issues/30)
- Create Ts compiler task [\#19](https://github.com/hazelcast/hazelcast-nodejs-client/issues/19)
- implement integration with gulp [\#7](https://github.com/hazelcast/hazelcast-nodejs-client/issues/7)

**Merged pull requests:**

- heartbeat service [\#43](https://github.com/hazelcast/hazelcast-nodejs-client/pull/43) ([mustafaiman](https://github.com/mustafaiman))
- adds Invocation [\#42](https://github.com/hazelcast/hazelcast-nodejs-client/pull/42) ([mustafaiman](https://github.com/mustafaiman))
- adds membership-listener [\#41](https://github.com/hazelcast/hazelcast-nodejs-client/pull/41) ([mustafaiman](https://github.com/mustafaiman))
- Error handling [\#40](https://github.com/hazelcast/hazelcast-nodejs-client/pull/40) ([GhostInAMachine](https://github.com/GhostInAMachine))
- Implemented smart routing [\#39](https://github.com/hazelcast/hazelcast-nodejs-client/pull/39) ([GhostInAMachine](https://github.com/GhostInAMachine))
- Map operations [\#38](https://github.com/hazelcast/hazelcast-nodejs-client/pull/38) ([mustafaiman](https://github.com/mustafaiman))
- handles server response with respect to frame size [\#36](https://github.com/hazelcast/hazelcast-nodejs-client/pull/36) ([mustafaiman](https://github.com/mustafaiman))
- Map proxy [\#33](https://github.com/hazelcast/hazelcast-nodejs-client/pull/33) ([mustafaiman](https://github.com/mustafaiman))
- added map codecs [\#32](https://github.com/hazelcast/hazelcast-nodejs-client/pull/32) ([bilalyasar](https://github.com/bilalyasar))
- Set api [\#29](https://github.com/hazelcast/hazelcast-nodejs-client/pull/29) ([mustafaiman](https://github.com/mustafaiman))
- Implemented ConnectionManager and InvocationService [\#28](https://github.com/hazelcast/hazelcast-nodejs-client/pull/28) ([GhostInAMachine](https://github.com/GhostInAMachine))
- name conversion byte array to buffer [\#27](https://github.com/hazelcast/hazelcast-nodejs-client/pull/27) ([mustafaiman](https://github.com/mustafaiman))
- fixing missing dependencies [\#26](https://github.com/hazelcast/hazelcast-nodejs-client/pull/26) ([gAmUssA](https://github.com/gAmUssA))
- checkstyle fixed [\#25](https://github.com/hazelcast/hazelcast-nodejs-client/pull/25) ([bilalyasar](https://github.com/bilalyasar))
- Map API [\#24](https://github.com/hazelcast/hazelcast-nodejs-client/pull/24) ([mustafaiman](https://github.com/mustafaiman))
- initial config api [\#23](https://github.com/hazelcast/hazelcast-nodejs-client/pull/23) ([mustafaiman](https://github.com/mustafaiman))
- initial commit for TS compiler automation [\#22](https://github.com/hazelcast/hazelcast-nodejs-client/pull/22) ([gAmUssA](https://github.com/gAmUssA))
- added ClientMessage and Bits [\#20](https://github.com/hazelcast/hazelcast-nodejs-client/pull/20) ([bilalyasar](https://github.com/bilalyasar))
- Automation with Gulp [\#10](https://github.com/hazelcast/hazelcast-nodejs-client/pull/10) ([gAmUssA](https://github.com/gAmUssA))
- documentation fix [\#5](https://github.com/hazelcast/hazelcast-nodejs-client/pull/5) ([gAmUssA](https://github.com/gAmUssA))
- README fix [\#3](https://github.com/hazelcast/hazelcast-nodejs-client/pull/3) ([gAmUssA](https://github.com/gAmUssA))
- Add a Gitter chat badge to README.md [\#2](https://github.com/hazelcast/hazelcast-nodejs-client/pull/2) ([gitter-badger](https://github.com/gitter-badger))
- initial commit of package.json [\#1](https://github.com/hazelcast/hazelcast-nodejs-client/pull/1) ([gAmUssA](https://github.com/gAmUssA))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*