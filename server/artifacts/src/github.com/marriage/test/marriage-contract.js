/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { MarriageContract } = require('..');
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

describe('MarriageContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new MarriageContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"marriage 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"marriage 1002 value"}'));
    });

    describe('#marriageExists', () => {

        it('should return true for a marriage', async () => {
            await contract.marriageExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a marriage that does not exist', async () => {
            await contract.marriageExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createMarriage', () => {

        it('should create a marriage', async () => {
            await contract.createMarriage(ctx, '1003', 'marriage 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"marriage 1003 value"}'));
        });

        it('should throw an error for a marriage that already exists', async () => {
            await contract.createMarriage(ctx, '1001', 'myvalue').should.be.rejectedWith(/The marriage 1001 already exists/);
        });

    });

    describe('#readMarriage', () => {

        it('should return a marriage', async () => {
            await contract.readMarriage(ctx, '1001').should.eventually.deep.equal({ value: 'marriage 1001 value' });
        });

        it('should throw an error for a marriage that does not exist', async () => {
            await contract.readMarriage(ctx, '1003').should.be.rejectedWith(/The marriage 1003 does not exist/);
        });

    });

    describe('#updateMarriage', () => {

        it('should update a marriage', async () => {
            await contract.updateMarriage(ctx, '1001', 'marriage 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"marriage 1001 new value"}'));
        });

        it('should throw an error for a marriage that does not exist', async () => {
            await contract.updateMarriage(ctx, '1003', 'marriage 1003 new value').should.be.rejectedWith(/The marriage 1003 does not exist/);
        });

    });

    describe('#deleteMarriage', () => {

        it('should delete a marriage', async () => {
            await contract.deleteMarriage(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a marriage that does not exist', async () => {
            await contract.deleteMarriage(ctx, '1003').should.be.rejectedWith(/The marriage 1003 does not exist/);
        });

    });

});