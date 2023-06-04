const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const Customer = require('../../api/models/customer'); // Assuming you have defined the Customer model
const bcrypt = require('bcrypt'); // Assuming you have bcrypt installed and configured
const users = require('../../api/controllers/users');
const utils = require('../../utils/utils');


describe('Users Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });

    describe("loginCustomers", () => {
        it('should return 404 if customer does not exist', () => {
            sinon.stub(Customer, 'findOne').resolves(null); // Stub the Customer.findOne function to return null
            const req = {
                body: {
                    username: 'test',
                    password: 'test'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('Authentication failed, username or password incorrect.');
                        }
                    }
                }
            };
            users.loginCustomers(req, res);
        });

        it('should return 500 if bcrypt comparison throws an error', () => {
            sinon.stub(Customer, 'findOne').resolves({}); // Stub the Customer.findOne function to return null
            const req = {
                body: {
                    username: 'test',
                    password: 'test'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('Authentication failed, username or password incorrect.');
                        }
                    }
                }
            };
            users.loginCustomers(req, res);
        });

        it('should return 200 and token if authentication is successful', () => {
            const customer = {
                username: 'test',
                password: 'test'
            };
            sinon.stub(Customer, 'findOne').resolves(customer); // Stub the Customer.findOne function to return null
            sinon.stub(bcrypt, 'compare').yields(null, true); // Stub the bcrypt.compare function to return true
            sinon.stub(utils, 'generateToken').returns('token'); // Stub the utils.generateToken function to return 'token'
            const expectedResponse = {
                user: customer,
                token: 'token'
            }
            const req = {
                body: customer
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj).to.deep.equal(expectedResponse);
                        }
                    }
                }
            };
            users.loginCustomers(req, res);
        });

        it('should return 401 if authentication fails', () => {
            const customer = {
                username: 'test',
                password: 'test'
            };
            sinon.stub(Customer, 'findOne').resolves(customer); // Stub the Customer.findOne function to return null
            sinon.stub(bcrypt, 'compare').yields(null, false); // Stub the bcrypt.compare function to return true
            sinon.stub(utils, 'generateToken').returns('token'); // Stub the utils.generateToken function to return 'token'
            const expectedResponse = {
                user: customer,
                token: 'token'
            }
            const req = {
                body: customer
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(401);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.deep.equal('Authentication failed.');
                        }
                    }
                }
            };
            users.loginCustomers(req, res);
        });
    });



});
