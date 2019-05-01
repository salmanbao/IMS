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

    async addDivorceCertificate(stub) {
        console.log('=================Insertion of Divorce Certificate');
        let ret = stub.getFunctionAndParameters();
        console.log(ret);
        let args = ret.params;
        if (args.length != 10) {
            return shim.error('Incorrect number of arguments. Expecting 11');
        }
        var info = {
            did: args[0],
            name: {
                fname: args[1].fname,
                lname: args[1].lname
            },
            father: args[2],
            mother: args[3],
            dob: args[4],
            familyNumber: args[5],
            religion: args[6],
            gender: args[7],
            address: [8],
            city: [9],
            country: [10]
        };
        if (this.isString(
                [
                    info.did, info.name.fname, info.name.lname,
                    info.father, info.mother, info.dob, info.familyNumber,
                    info.religion, info.gender, info.address, info.city, info.country
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

    //----------- Delete Divorce Certificate------------
    async DeleteDivorceCertificate(stub, args) {
        //---------------- Deleting Divorce Certificate-----------
        console.log(args);
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