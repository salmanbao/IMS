/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class NationalIdMyAssetContract extends Contract {

    async Init(ctx) {
        return 'Successfully initiated';
    }

    async nationalIdMyAssetExists(ctx, key) {
        const buffer = await ctx.stub.getState(key);
        return (!!buffer && buffer.length > 0);
    }

    async createNationalIdMyAsset(ctx, key, value) {
        const exists = await this.nationalIdMyAssetExists(ctx, key);
        if (exists) {
            return {error: false, msg:`${key} already exists`};
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

    async readNationalIdMyAsset(ctx, key) {
        const exists = await this.nationalIdMyAssetExists(ctx, key);
        if (!exists) {
            return {error: false, msg:`${key} does not exists`};
        }
        const buffer = await ctx.stub.getState(key);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateNationalIdMyAsset(ctx, key, newValue) {
        const exists = await this.nationalIdMyAssetExists(ctx, key);
        if (!exists) {
            return {error: false, msg:`${key} does not exists`};
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

    async deleteNationalIdMyAsset(ctx, key) {
        const exists = await this.nationalIdMyAssetExists(ctx, key);
        if (!exists) {
            return {error: false, msg:`${key} does not exists`};
        }
        await ctx.stub.deleteState(key);
    }

    validate(certificate) {
        if (!certificate.phone) {
            return { valid: false, error: 'phone parameter is missing' };
        }
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
        if (!certificate.martialStatus) {
            return { valid: false, error: 'religion parameter is missing' };
        }
        if (!certificate.familyNumber) {
            return { valid: false, error: 'family number parameter is missing' };
        }
        if (!certificate.religion) {
            return { valid: false, error: 'religion number parameter is missing' };
        }
        if (!certificate.profession) {
            return { valid: false, error: 'profession number parameter is missing' };
        }
        if (certificate.address) {
            if (!certificate.address.address) {
                return { valid: false, error: 'address parameter is missing' };
            }
            if (!certificate.address.province) {
                return { valid: false, error: 'province parameter is missing' };
            }
            if (!certificate.address.division) {
                return { valid: false, error: 'division parameter is missing' };
            }
            if (!certificate.address.district) {
                return { valid: false, error: 'district parameter is missing' };
            }
            if (!certificate.address.tehsile) {
                return { valid: false, error: 'tehsile parameter is missing' };
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

module.exports = NationalIdMyAssetContract;
