'use strict';
const shim = require('fabric-shim');
const util = require('util');

let Chaincode = class {

    // The Init method is called when the Smart Contract 'fabcar' is instantiated by the blockchain network
    // Best practice is to have any Ledger initialization in separate function -- see initLedger()
    async Init(stub) {
        console.info('=========== Instantiated fabcar chaincode ===========');
        return shim.success();
    }

    // The Invoke method is called as a result of an application request to run the Smart Contract
    // 'fabcar'. The calling application program has also specified the particular smart contract
    // function to be called, with arguments
    async Invoke(stub) {
        let ret = stub.getFunctionAndParameters();
        console.info(ret);

        let method = this[ret.fcn];
        if (!method) {
            console.error('no function of name:' + ret.fcn + ' found');
            throw new Error('Received unknown function ' + ret.fcn + ' invocation');
        }
        try {
            let payload = await method(stub, ret.params);
            return shim.success(payload);
        } catch (err) {
            console.log(err);
            return shim.error(err);
        }
    }

    async queryCar(stub, args) {
        if (args.length != 1) {
            throw new Error('Incorrect number of arguments. Expecting CarNumber ex: CAR01');
        }
        let carNumber = args[0];

        let carAsBytes = await stub.getState(carNumber); //get the car from chaincode state
        if (!carAsBytes || carAsBytes.toString().length <= 0) {
            throw new Error(carNumber + ' does not exist: ');
        }
        console.log(carAsBytes.toString());
        return carAsBytes;
    }

    async initLedger(stub, args) {
        console.info('============= START : Initialize Ledger ===========');
        let cars = [];
        cars.push({
            make: 'Toyota',
            model: 'Prius',
            color: 'blue',
            owner: 'Tomoko'
        });
        cars.push({
            make: 'Ford',
            model: 'Mustang',
            color: 'red',
            owner: 'Brad'
        });


        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async createCar(stub, args) {
        console.info('============= START : Create Car ===========');
        if (args.length != 5) {
            throw new Error('Incorrect number of arguments. Expecting 5');
        }

        var car = {
            docType: 'car',
            make: args[1],
            model: args[2],
            color: args[3],
            owner: args[4]
        };

        await stub.putState(args[0], Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllCars(stub, args) {

        let startKey = 'CAR0';
        let endKey = 'CAR999';

        let iterator = await stub.getStateByRange(startKey, endKey);

        let allResults = [];
        while (true) {
            let res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                let jsonRes = {};
                console.log(res.value.value.toString('utf8'));

                jsonRes.Key = res.value.key;
                try {
                    jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    jsonRes.Record = res.value.value.toString('utf8');
                }
                allResults.push(jsonRes);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return Buffer.from(JSON.stringify(allResults));
            }
        }
    }

    async changeCarOwner(stub, args) {
        console.info('============= START : changeCarOwner ===========');
        if (args.length != 2) {
            throw new Error('Incorrect number of arguments. Expecting 2');
        }

        let carAsBytes = await stub.getState(args[0]);
        let car = JSON.parse(carAsBytes);
        car.owner = args[1];

        await stub.putState(args[0], Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

    //----------- Insert NationalID------------
    async addNationalId(stub) {
        console.log('=================Insertion of national-id');
        let ret = stub.getFunctionAndParameters();
        console.log(ret);
        let args = ret.params;
        if (args.length != 11) {
            return shim.error('Incorrect number of arguments. Expecting 11');
        }
        var info = {
            did: args[0],
            picture: args[1],
            name: {
                fname: args[2].fname,
                lname: args[2].lname
            },
            father: args[3],
            mother: args[4],
            dob: args[5],
            familyNumber: args[6],
            religion: args[7],
            profession: args[8],
            education: args[9],
            address: {
                street: args[10].street,
                province: args[10].province,
                division: args[10].division,
                district: args[10].district,
                tehsile: args[10].tehsile
            },
            relations: {
                mother: args[11].mother,
                father: args[11].father,
                spouse: args[11].spouse,
                sons: args[11].sons,
                daughters: args[11].daughters
            }
        };
        if (this.isString(
                [
                    info.did, info.picture, info.father, info.mother, info.dob,
                    info.religion, info.profession, info.education,
                    info.name.fname, info.name.lname, info.address.street,
                    info.address.province, info.address.division,
                    info.address.district, info.address.tehsile,
                    info.relations.mother, info.relations.father
                ])) {
            return shim.error('Expecting string values for some parameters');
        }

        try {
            await stub.putState(did, Buffer.from(info));
            console.log('================ Inserted Successfully=========');
            return shim.success();
        } catch (error) {
            return shim.error(err);
        }
    }

    async getNationalId(stub, args) {
            if (args.length != 1) {
                throw new Error("Incorrect number of arguments. Expecting 1");
            }
            try {
                let idAsBytes = await stub.getState(args[0]);
                let id = JSON.parse(idAsBytes);
                return Buffer.from(JSON.stringify(id));
            } catch (error) {
                throw new Error('did does not exist');
            }
        }
        //----------- Delete NationalID------------
    async DeleteNationalId(stub, args) {
        //---------------- Deleting NationID-----------
        if (args.length != 1) {
            throw new Error('Incorrect number of arguments. Expecting 1');
        }
        let did = args[0];
        // Delete the key from the state in ledger
        await stub.deleteState(did);
    }


    isString(str) {
        str.forEach(element => {
            if (typeof element != 'string') {
                return false;
            }
        });
        return true;
    }
    isNumber(num) {
        num.forEach(element => {
            if (typeof element != 'number') {
                return false;
            }
        });
        return true;
    }

};

shim.start(new Chaincode());