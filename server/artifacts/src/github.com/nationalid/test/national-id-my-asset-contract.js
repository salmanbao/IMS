/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { NationalIdMyAssetContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('NationalIdMyAssetContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new NationalIdMyAssetContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"national id my asset 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"national id my asset 1002 value"}'));
    });

    describe('#nationalIdMyAssetExists', () => {

        it('should return true for a national id my asset', async () => {
            await contract.nationalIdMyAssetExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a national id my asset that does not exist', async () => {
            await contract.nationalIdMyAssetExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createNationalIdMyAsset', () => {

        it('should create a national id my asset', async () => {
            await contract.createNationalIdMyAsset(ctx, '1003', 'national id my asset 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"national id my asset 1003 value"}'));
        });

        it('should throw an error for a national id my asset that already exists', async () => {
            await contract.createNationalIdMyAsset(ctx, '1001', 'myvalue').should.be.rejectedWith(/The national id my asset 1001 already exists/);
        });

    });

    describe('#readNationalIdMyAsset', () => {

        it('should return a national id my asset', async () => {
            await contract.readNationalIdMyAsset(ctx, '1001').should.eventually.deep.equal({ value: 'national id my asset 1001 value' });
        });

        it('should throw an error for a national id my asset that does not exist', async () => {
            await contract.readNationalIdMyAsset(ctx, '1003').should.be.rejectedWith(/The national id my asset 1003 does not exist/);
        });

    });

    describe('#updateNationalIdMyAsset', () => {

        it('should update a national id my asset', async () => {
            await contract.updateNationalIdMyAsset(ctx, '1001', 'national id my asset 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"national id my asset 1001 new value"}'));
        });

        it('should throw an error for a national id my asset that does not exist', async () => {
            await contract.updateNationalIdMyAsset(ctx, '1003', 'national id my asset 1003 new value').should.be.rejectedWith(/The national id my asset 1003 does not exist/);
        });

    });

    describe('#deleteNationalIdMyAsset', () => {

        it('should delete a national id my asset', async () => {
            await contract.deleteNationalIdMyAsset(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a national id my asset that does not exist', async () => {
            await contract.deleteNationalIdMyAsset(ctx, '1003').should.be.rejectedWith(/The national id my asset 1003 does not exist/);
        });

    });

});