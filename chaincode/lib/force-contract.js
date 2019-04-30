'use strict';

const { Contract } = require('fabric-contract-api');

class ForceContract extends Contract {

    async forceExists(ctx, forceId) {
        const buffer = await ctx.stub.getState(forceId);
        return (!!buffer && buffer.length > 0);
    }

    async createForce(ctx, forceId, value) {
        const exists = await this.forceExists(ctx, forceId);
        if (exists) {
            throw new Error(`The force ${forceId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(forceId, buffer);
    }

    async readForce(ctx, forceId) {
        const exists = await this.forceExists(ctx, forceId);
        if (!exists) {
            throw new Error(`The force ${forceId} does not exist`);
        }
        const buffer = await ctx.stub.getState(forceId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateForce(ctx, forceId, newValue) {
        const exists = await this.forceExists(ctx, forceId);
        if (!exists) {
            throw new Error(`The force ${forceId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(forceId, buffer);
    }

    async deleteForce(ctx, forceId) {
        const exists = await this.forceExists(ctx, forceId);
        if (!exists) {
            throw new Error(`The force ${forceId} does not exist`);
        }
        await ctx.stub.deleteState(forceId);
    }

 //----------- Insert NationalID------------
 async InsertNationalId(stub,args) {
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
            fname:args[2].fname,
            lname:args[2].lname
        },
        father: args[3],
        mother: args[4],
        dob: args[5],
        familyNumber: args[6],
        religion: args[7],
        profession: args[8],
        education: args[9],
        address: {
            street:args[10].street,
            province:args[10].province,
            division:args[10].division,
            district:args[10].district,
            tehsile:args[10].tehsile
        },
        relations:{
                mother:args[11].mother,
                father:args[11].father,
                spouse:args[11].spouse,
                sons:args[11].sons,
                daughters:args[11].daughters
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

  //----------- Delete NationalID------------
  async InsertNationalId(stub) {
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
}

module.exports = ForceContract;
