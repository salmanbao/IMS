/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class MarriageContract extends Contract {

    async Init(ctx) {
        return 'Successfully initiated';
    }

    async marriageExists(ctx, key) {
        const buffer = await ctx.stub.getState(key);
        return (!!buffer && buffer.length > 0);
    }

    async createMarriage(ctx, key, value) {
        const exists = await this.marriageExists(ctx, key);
        if (exists) {
            return { error: false, msg: `${key} already exists` };
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

    async readMarriage(ctx, key) {
        const exists = await this.marriageExists(ctx, key);
        if (!exists) {
            return { error: false, msg: `${key} does not exists` };
        }
        const buffer = await ctx.stub.getState(key);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateMarriage(ctx, key, newValue) {
        const exists = await this.marriageExists(ctx, key);
        if (!exists) {
            return { error: false, msg: `${key} does not exists` };
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

    async deleteMarriage(ctx, key) {
        const exists = await this.marriageExists(ctx, key);
        if (!exists) {
            return { error: false, msg: `${key} does exists` };
        }
        await ctx.stub.deleteState(key);
    }

    validate(certificate) {
        if (!certificate.fname) {
            return { valid: false, error: 'first name parameter is missing' };
        }
        if (!certificate.lname) {
            return { valid: false, error: 'last name parameter is missing' };
        }
        if (!certificate.father) {
            return { valid: false, error: 'father name parameter is missing' };
        }
        if (!certificate.mother) {
            return { valid: false, error: 'mother name parameter is missing' };
        }
        if (!certificate.familyNumber) {
            return { valid: false, error: 'family number parameter is missing' };
        }
        if (!certificate.husbandDOB) {
            return { valid: false, error: 'husbandDOB parameter is missing' };
        }
        if (!certificate.wifeDOB) {
            return { valid: false, error: 'wifeDOB parameter is missing' };
        }
        if (!certificate.MarriageDate) {
            return { valid: false, error: 'MarriageDate parameter is missing' };
        }
        if (certificate.addresses) {
            if (!certificate.addresses.wifeAddress) {
                return { valid: false, error: 'wife address parameter is missing' };
            }
            if (!certificate.addresses.husbandAddress) {
                return { valid: false, error: 'husband address parameter is missing' };
            }
        }
        else {
            return { valid: false, error: 'complete address is required' };
        }
        if (certificate.witnesses) {
            if (!certificate.witnesses.witnessOne) {
                return { valid: false, error: 'witnessOne parameter is missing' };
            }
            if (!certificate.witnesses.witnessTwo) {
                return { valid: false, error: 'witnessTwo parameter is missing' };
            }
            if (!certificate.witnesses.witnessThird) {
                return { valid: false, error: 'witnessThird parameter is missing' };
            }
        }
        else {
            return { valid: false, error: 'complete address is required' };
        }
        return { valid: true };
    }

}

module.exports = MarriageContract;

