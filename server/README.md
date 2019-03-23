## Fabric Node-SDK Sample app

A sample Node.js app to demonstrate **__fabric-client__** & **__fabric-ca-client__** Node.js SDK APIs

**As of writing this supports beta (and above) commit levels**

### Prerequisites and setup: 

* [Docker](https://www.docker.com/products/overview) - v1.12 or higher
* [Docker Compose](https://docs.docker.com/compose/overview/) - v1.8 or higher
* [Git client](https://git-scm.com/downloads) - needed for clone commands
* **Node.js** v6.2.0 - 6.10.0 ( __Node v7+ is not supported__ )
* Download docker images

```
cd FabricNodeApp1.0
#IMAGE_TAG="`uname -m`-1.0.0-beta" docker-compose -f artifacts/base.yaml pull
```

Once you have completed the above setup, you will be provisioned a local network with following configuration:
* 4 Kafka Brokers + 3 Zookeepers
* 3 Orderers
* 2 CA Orgs
* 4 peers (2 peers per Org)
* 4 Couchdbs attached to all the peers

#### Artifacts
* Crypto material has been generated using the **cryptogen** tool from fabric and mounted to all peers, the orderering node and CA containers. More details regarding the cryptogen tool are available [here](http://hyperledger-fabric.readthedocs.io/en/latest/getting_started.html#using-the-cryptogen-tool).
* An Orderer genesis block (genesis.block) and channel configuration transactions based on the number of channels option (mychannel1.tx) has been pre generated using the **configtxgen** tool and placed within the artifacts folder. More details regarding the configtxgen tool are available [here](http://hyperledger-fabric.readthedocs.io/en/latest/getting_started.html#using-the-configtxgen-tool).

## Running the sample program
##### Terminal Window 1
```
cd FabricNodeApp1.0

./runApp.sh

```
 
* This launches the required network on your local machine
* Installs the "beta" tagged node modules
* And, starts the node app on PORT 4000

##### Terminal Window 2


In order for the following shell script to properly parse the JSON, you must install [jq](https://stedolan.github.io/jq/):

With the application started in terminal 1, next, test the APIs by executing the script - **testAPIs.sh**:
```
cd FabricNodeApp1.0

./testAPIs.sh

```

#### Cleanup:

Once the tests are completed, cleanup the network and crypto material using the below command

```
./runApp.sh -m stop
```

**NOTE** : There are two more options available **start** and **restart** (restart is default)

## Sample REST APIs Requests

**PLEASE NOTE:** these requests are getting changed over time, If things are not working as expected
Please refer [testAPIs.sh](https://github.com/asararatnakar/FabricNodeApp1.0/blob/master/testAPIs.sh)

### Login Request

* Register and enroll new users in Organization - **Org1**:

`curl -s -X POST http://localhost:4000/users -H "content-type: application/x-www-form-urlencoded" -d 'username=Jim&orgName=org1'`

**OUTPUT:**

```
{
  "success": true,
  "secret": "RaxhMgevgJcm",
  "message": "Jim enrolled Successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI"
}
```

The response contains the success/failure status, an **enrollment Secret** and a **JSON Web Token (JWT)** that is a required string in the Request Headers for subsequent requests.

#### Revoke user
```
curl -s -X GET \
  http://localhost:4000/revoke \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI"  \
  -H "content-type: application/json"
```

### Create Channel request

```
curl -s -X POST \
  http://localhost:4000/channels \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json" \
  -d '{
	"channelName":"mychannel1",
	"channelConfigPath":"../artifacts/channel/mychannel1.tx"
}'
```

Please note that the Header **authorization** must contain the JWT returned from the `POST /users` call

### Join Channel request

```
curl -s -X POST \
  http://localhost:4000/channels/mychannel1/peers \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["localhost:7051","localhost:8051"]
}'
```
### Install chaincode

```
curl -s -X POST \
  http://localhost:4000/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["localhost:7051","localhost:8051"],
	"chaincodeName":"mycc",
	"chaincodePath":"github.com/uniqueKeyValue",
	"chaincodeVersion":"v0"
}'
```

### Instantiate chaincode

```
curl -s -X POST \
  http://localhost:4000/channels/mychannel1/chaincodes \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["localhost:7051"],
	"chaincodeName":"mycc",
	"chaincodeVersion":"v0",
	"functionName":"init",
	"args":["a","100","b","200"]
}'
```

### Invoke request

```
curl -s -X POST \
  http://localhost:4000/channels/mychannel1/chaincodes/mycc \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json" \
  -d '{
	"peers": ["localhost:7051", "localhost:8051"],
	"fcn":"invoke",
	"args":["put","a","putsomerandomvalue"]
}'
```
**NOTE:** Ensure that you save the Transaction ID from the response in order to pass this string in the subsequent query transactions. 

### Chaincode Query

```
curl -s -X GET \
  "http://localhost:4000/channels/mychannel1/chaincodes/mycc?peer=peer1&args=%5B%get%22%2C%22a%22%5D" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Query Block by BlockNumber

```
curl -s -X GET \
  "http://localhost:4000/channels/mychannel1/blocks/1?peer=peer1" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Query Transaction by TransactionID

```
curl -s -X GET http://localhost:4000/channels/mychannel1/transactions/TRX_ID?peer=peer1 \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```
**NOTE**: Here the TRX_ID can be from any previous invoke transaction


### Query ChainInfo

```
curl -s -X GET \
  "http://localhost:4000/channels/mychannel1?peer=peer1" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Query Installed chaincodes

```
curl -s -X GET \
  "http://localhost:4000/chaincodes?peer=peer1&type=installed" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Query Instantiated chaincodes

```
curl -s -X GET \
  "http://localhost:4000/chaincodes?peer=peer1&type=instantiated" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Query Channels

```
curl -s -X GET \
  "http://localhost:4000/channels?peer=peer1" \
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTQ4NjU1OTEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE0OTQ4NjE5OTF9.yWaJhFDuTvMQRaZIqg20Is5t-JJ_1BP58yrNLOKxtNI" \
  -H "content-type: application/json"
```

### Network configuration considerations

You have the ability to change configuration parameters by editing the network-config.json file.

#### IP Address and PORT information 

If you choose to customize your docker-compose yaml file by hardcoding IP Addresses and PORT information for your peers and orderer, then you MUST also add the identical values into the network-config.json file. The paths shown below will need to be adjusted to match your docker-compose yaml file.

```
		"orderer": [{
			"url": "grpcs://x.x.x.x:7050",
			"server-hostname": "orderer0",
			"tls_cacerts": "../artifacts/tls/orderer/ca-cert.pem"
		},
		{...}],
		"org1": {
			"ca": "http://x.x.x.x:7054",
			"peer1": {
				"requests": "grpcs://x.x.x.x:7051",
				"events": "grpcs://x.x.x.x:7053",
				...
			},
			"peer2": {
				"requests": "grpcs://x.x.x.x:8051",
				"events": "grpcs://x.x.x.x:8053",
				...
			},
			"admin": {
				"key": ".../org1.example.com/users/Admin@org1.example.com/msp/keystore",
				"cert": "../org1.example.com/users/Admin@org1.example.com/msp/signcerts"
			}
		},
		"org2": {
			"ca": "http://x.x.x.x:8054",
			"peer1": {
				"requests": "grpcs://x.x.x.x:9051",
				"events": "grpcs://x.x.x.x:9053",
				...			},
			"peer2": {
				"requests": "grpcs://x.x.x.x:10051",
				"events": "grpcs://x.x.x.x:10053",
				...
			},
			"admin": {
				"key": ".../org2.example.com/users/Admin@org2.example.com/msp/keystore",
				"cert": "../org2.example.com/users/Admin@org2.example.com/msp/signcerts"
			}
		}

```

#### Discover IP Address 

To retrieve the IP Address for one of your network entities, issue the following command:

```
# this will return the IP Address for peer0
docker inspect peer0 | grep IPAddress
```
