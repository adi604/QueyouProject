const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const Customer = require('../../api/models/customer'); // Assuming you have defined the Customer model
const bcrypt = require('bcrypt'); // Assuming you have bcrypt installed and configured
const users = require('../../api/controllers/users');
const utils = require('../../utils/utils');
const mongoose = require("mongoose");
const Provider = require('../../api/models/provider');


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

    describe("signUpCustomers", () => {
        it('should return 409 if customer already exists', () => {
            const req = {
                body: {
                    username: 'test',
                    firstName: 'John',
                    lastName: 'Doe',
                    password: 'test123',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(409);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('test already exist !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').resolves({ username: 'test' });

            users.signUpCustomers(req, res);
        });

        it('should return 500 if bcrypt hash throws an error', () => {
            const req = {
                body: {
                    username: 'test',
                    firstName: 'John',
                    lastName: 'Doe',
                    password: 'test123',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.err.message).to.equals('Hashing error');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').resolves(null);
            sinon.stub(bcrypt, 'hash').callsArgWith(2, new Error('Hashing error'));

            users.signUpCustomers(req, res);
        });

        it('should save customer and return 200 with token if everything is successful', (done) => {
            const req = {
                body: {
                    username: 'test',
                    firstName: 'John',
                    lastName: 'Doe',
                    password: 'test123',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.token).to.exist;
                            done();
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').resolves(null);
            sinon.stub(bcrypt, 'hash').callsArgWith(2, null, 'hashedPassword');
            sinon.stub(mongoose.Types, 'ObjectId').returns('fakeId');
            const saveStub = sinon.stub().resolves();

            sinon.stub(Customer.prototype, 'save').callsFake(function () {
                this._id = 'fakeId';
                this.save = saveStub;
                return this.save();
            });

            users.signUpCustomers(req, res);
        });

    });

    describe("signUpProviders", () => {
        it('should return 409 if provider already exists', () => {
            const req = {
                body: {
                    username: 'test',
                    name: 'Test Provider',
                    password: 'test123',
                    address: '123 Test St',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890',
                    description: 'Test provider description',
                    location: 'Test location',
                    maxDate: '2023-06-01',
                    durationMeeting: 60,
                    openTime: '09:00',
                    closeTime: '17:00',
                    disabledDays: ['Saturday', 'Sunday'],
                    disabledDates: ['2023-06-15', '2023-06-16'],
                    category: 'Test category'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(409);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal(`test already exist !`);
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves({ username: 'test' });

            users.signUpProviders(req, res);
        });

        it('should return 500 if bcrypt hash throws an error', () => {
            const req = {
                body: {
                    username: 'test',
                    name: 'Test Provider',
                    password: 'test123',
                    address: '123 Test St',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890',
                    description: 'Test provider description',
                    location: 'Test location',
                    maxDate: '2023-06-01',
                    durationMeeting: 60,
                    openTime: '09:00',
                    closeTime: '17:00',
                    disabledDays: ['Saturday', 'Sunday'],
                    disabledDates: ['2023-06-15', '2023-06-16'],
                    category: 'Test category'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.err.message).to.equals('Hashing error');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves(null);
            sinon.stub(bcrypt, 'hash').callsArgWith(2, new Error('Hashing error'));

            users.signUpProviders(req, res);
        });

        it('should save provider and return 200 with success message if everything is successful', (done) => {
            const req = {
                body: {
                    username: 'test',
                    name: 'Test Provider',
                    password: 'test123',
                    address: '123 Test St',
                    mail: 'test@example.com',
                    phoneNumber: '1234567890',
                    description: 'Test provider description',
                    location: 'Test location',
                    maxDate: '2023-06-01',
                    durationMeeting: 60,
                    openTime: '09:00',
                    closeTime: '17:00',
                    disabledDays: ['Saturday', 'Sunday'],
                    disabledDates: ['2023-06-15', '2023-06-16'],
                    category: 'Test category'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('SignUp - test created !');
                            done();
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves(null);
            sinon.stub(bcrypt, 'hash').callsArgWith(2, null, 'hashedPassword');
            sinon.stub(mongoose.Types, 'ObjectId').returns('fakeId');
            const saveStub = sinon.stub().resolves();

            sinon.stub(Provider.prototype, 'save').callsFake(function () {
                this._id = 'fakeId';
                this.save = saveStub;
                return this.save();
            });

            users.signUpProviders(req, res);
        });

    });


    describe("loginProviders", () => {
        it('should return 404 if provider does not exist', () => {
            const req = {
                body: {
                    username: 'test',
                    password: 'test123'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('Authentication failed !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves(null);

            users.loginProviders(req, res);
        });

        it('should return 500 if bcrypt compare throws an error', () => {
            const req = {
                body: {
                    username: 'test',
                    password: 'test123'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('Authentication failed !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves({ username: 'test', password: 'hashedPassword' });
            sinon.stub(bcrypt, 'compare').callsArgWith(2, new Error('Comparison error'));

            users.loginProviders(req, res);
        });

        it('should return 200 with user and token if authentication is successful', () => {
            const req = {
                body: {
                    username: 'test',
                    password: 'test123'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.user).to.deep.equal({ username: 'test', password: 'hashedPassword' });
                            expect(obj.token).to.exist;
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves({ username: 'test', password: 'hashedPassword' });
            sinon.stub(bcrypt, 'compare').callsArgWith(2, null, true);
            sinon.stub(utils, 'generateToken').returns('fakeToken');

            users.loginProviders(req, res);
        });

        it('should return 401 if authentication is unsuccessful', () => {
            const req = {
                body: {
                    username: 'test',
                    password: 'test123'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(401);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('Authentication failed !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves({ username: 'test', password: 'hashedPassword' });
            sinon.stub(bcrypt, 'compare').callsArgWith(2, null, false);

            users.loginProviders(req, res);
        });

    });


});
