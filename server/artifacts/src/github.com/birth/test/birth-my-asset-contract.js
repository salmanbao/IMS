/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { BirthMyAssetContract } = require('..');
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

describe('BirthMyAssetContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new BirthMyAssetContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"birth my asset 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"birth my asset 1002 value"}'));
    });

    describe('#birthMyAssetExists', () => {

        it('should return true for a birth my asset', async () => {
            await contract.birthMyAssetExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a birth my asset that does not exist', async () => {
            await contract.birthMyAssetExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createBirthMyAsset', () => {

        it('should create a birth my asset', async () => {
            await contract.createBirthMyAsset(ctx, '1003', 'birth my asset 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"birth my asset 1003 value"}'));
        });

        it('should throw an error for a birth my asset that already exists', async () => {
            await contract.createBirthMyAsset(ctx, '1001', 'myvalue').should.be.rejectedWith(/The birth my asset 1001 already exists/);
        });

    });

    describe('#readBirthMyAsset', () => {

        it('should return a birth my asset', async () => {
            await contract.readBirthMyAsset(ctx, '1001').should.eventually.deep.equal({ value: 'birth my asset 1001 value' });
        });

        it('should throw an error for a birth my asset that does not exist', async () => {
            await contract.readBirthMyAsset(ctx, '1003').should.be.rejectedWith(/The birth my asset 1003 does not exist/);
        });

    });

    describe('#updateBirthMyAsset', () => {

        it('should update a birth my asset', async () => {
            await contract.updateBirthMyAsset(ctx, '1001', 'birth my asset 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"birth my asset 1001 new value"}'));
        });

        it('should throw an error for a birth my asset that does not exist', async () => {
            await contract.updateBirthMyAsset(ctx, '1003', 'birth my asset 1003 new value').should.be.rejectedWith(/The birth my asset 1003 does not exist/);
        });

    });

    describe('#deleteBirthMyAsset', () => {

        it('should delete a birth my asset', async () => {
            await contract.deleteBirthMyAsset(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a birth my asset that does not exist', async () => {
            await contract.deleteBirthMyAsset(ctx, '1003').should.be.rejectedWith(/The birth my asset 1003 does not exist/);
        });

    });

});