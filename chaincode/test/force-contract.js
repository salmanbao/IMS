/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { ForceContract } = require('..');
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

describe('ForceContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new ForceContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"force 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"force 1002 value"}'));
    });

    describe('#forceExists', () => {

        it('should return true for a force', async () => {
            await contract.forceExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a force that does not exist', async () => {
            await contract.forceExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createForce', () => {

        it('should create a force', async () => {
            await contract.createForce(ctx, '1003', 'force 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"force 1003 value"}'));
        });

        it('should throw an error for a force that already exists', async () => {
            await contract.createForce(ctx, '1001', 'myvalue').should.be.rejectedWith(/The force 1001 already exists/);
        });

    });

    describe('#readForce', () => {

        it('should return a force', async () => {
            await contract.readForce(ctx, '1001').should.eventually.deep.equal({ value: 'force 1001 value' });
        });

        it('should throw an error for a force that does not exist', async () => {
            await contract.readForce(ctx, '1003').should.be.rejectedWith(/The force 1003 does not exist/);
        });

    });

    describe('#updateForce', () => {

        it('should update a force', async () => {
            await contract.updateForce(ctx, '1001', 'force 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"force 1001 new value"}'));
        });

        it('should throw an error for a force that does not exist', async () => {
            await contract.updateForce(ctx, '1003', 'force 1003 new value').should.be.rejectedWith(/The force 1003 does not exist/);
        });

    });

    describe('#deleteForce', () => {

        it('should delete a force', async () => {
            await contract.deleteForce(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a force that does not exist', async () => {
            await contract.deleteForce(ctx, '1003').should.be.rejectedWith(/The force 1003 does not exist/);
        });

    });

});