'use strict';

const { Contract } = require('fabric-contract-api');

class BirthMyAssetContract extends Contract {

    async Init(ctx) {
        return 'Successfully initiated';
    }

    async birthMyAssetExists(ctx, key) {
        const buffer = await ctx.stub.getState(key);
        return (!!buffer && buffer.length > 0);
    }

    async readBirthMyAsset(ctx, key) {
        const exists = await this.birthMyAssetExists(ctx, key);
        if (!exists) {
            throw new Error(`The birth my asset ${key} does not exist`);
        }
        const buffer = await ctx.stub.getState(key);
        const asset = JSON.parse(buffer.toString());
        return asset; 
    }

    async createBirthMyAsset(ctx, key, value) {
        const exists = await this.birthMyAssetExists(ctx, key);
        if (exists) {
            throw new Error(`The birth my asset ${key} already exists`);
        }
        let check = this.validate(JSON.parse(value));
        if (check.valid) {
            const buffer = Buffer.from(value);
            await ctx.stub.putState(key, buffer);
        }
        else {
            return check;
        }
    }

    async updateBirthMyAsset(ctx, key, newValue) {
        const exists = await this.birthMyAssetExists(ctx, key);
        if (!exists) {
            throw new Error(`The birth my asset ${key} does not exist`);
        }
        let check = this.validate(JSON.parse(newValue));
        if (check.valid) {
            const buffer = Buffer.from(newValue);
            await ctx.stub.putState(key, buffer);
        }
        else {
            return check;
        }
    }

    async deleteBirthMyAsset(ctx, key) {
        const exists = await this.birthMyAssetExists(ctx, key);
        if (!exists) {
            throw new Error(`The birth my asset ${key} does not exist`);
        }
        await ctx.stub.deleteState(key);
    }
    async getAll(ctx , query) {

        const queryString = query;
        let resultsIterator = await ctx.stub.getQueryResult(queryString);
        let results = await this.getAllResults(resultsIterator);

        return Buffer.from(JSON.stringify(results));
    }

    async getQueryResultForQueryString(ctx, queryString) {

        console.info('- getQueryResultForQueryString queryString:\n' + queryString)
        let resultsIterator = await ctx.stub.getQueryResult(queryString);
        let method = this['getAllResults'];

        let results = await method(resultsIterator);

        return Buffer.from(JSON.stringify(results));
    }

    async getAllResults(iterator) {
        let allResults = [];
        while (true) {
            let res = await iterator.next();
            if (res.value && res.value.value.toString()) {
                let jsonRes = {};
                try {
                    jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
                    jsonRes.Key = res.value.key;
                } catch (err) {
                    console.log(err);
                    jsonRes.Value = res.value.value.toString('utf8');
                }
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
                return allResults;
            }
        }
    }
    
    validate(certificate) {
        if (!certificate.fname) {
            return { valid: false, error: 'first name parameter is missing' };
        }
        if (!certificate.lname) {
            return { valid: false, error: 'last name parameter is missing' };
        }
        if (!certificate.dob) {
            return { valid: false, error: 'DOB parameter is missing' };
        }
        if (!certificate.father) {
            return { valid: false, error: 'father name parameter is missing' };
        }
        if (!certificate.mother) {
            return { valid: false, error: 'mother name parameter is missing' };
        }
        if (!certificate.gender) {
            return { valid: false, error: 'gender parameter is missing' };
        }
        if (!certificate.religion) {
            return { valid: false, error: 'religion parameter is missing' };
        }
        if (!certificate.familyNumber) {
            return { valid: false, error: 'family number parameter is missing' };
        }
        if (certificate.address) {
            if (!certificate.address.address) {
                return { valid: false, error: 'address parameter is missing' };
            }
            if (!certificate.address.city) {
                return { valid: false, error: 'city parameter is missing' };
            }
            if (!certificate.address.country) {
                return { valid: false, error: 'country parameter is missing' };
            }
        }
        else {
            return { valid: false, error: 'complete address is required' };
        }
        return { valid: true };
    }

}

module.exports = BirthMyAssetContract;
