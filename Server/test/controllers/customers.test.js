const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const customers = require('../../api/controllers/customers');
const Customer = require('../../api/models/customer');


describe('Customers Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });

    describe("getAllCustomers", () => {
        it('should return all customers with status 200', () => {
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (customers) => {
                            expect(customers).to.deep.equals(['customer1', 'customer2', 'customer3']);
                        }
                    }
                }
            };
            sinon.stub(Customer, 'find').resolves(['customer1', 'customer2', 'customer3']);

            customers.getAllCustomers({}, res);
        });

        it('should return 500 if an error occurs', () => {
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.error).to.exist;
                        }
                    }
                }
            };
            sinon.stub(Customer, 'find').rejects(new Error('Database error'));

            customers.getAllCustomers({}, res);
        });

    });

    describe("getCustomer", () => {
        it('should return customer with status 200 if found', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (customer) => {
                            expect(customer).to.deep.equal({ username: 'testuser', name: 'Test User' });
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').resolves({ username: 'testuser', name: 'Test User' });

            customers.getCustomer(req, res);
        });

        it('should return 404 if customer is not found', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('customer testuser not found !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').resolves(null);

            customers.getCustomer(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.error).to.exist;
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOne').rejects(new Error('Database error'));

            customers.getCustomer(req, res);
        });

    });

    describe("updateCustomer", () => {
        it('should update customer and return 200 with success message if customer exists', () => {
            const req = {
                username: 'testuser',
                body: {
                    name: 'Updated User'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('customer testuser updated !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndUpdate').resolves({});

            customers.updateCustomer(req, res);
        });

        it('should return 404 if customer is not found', () => {
            const req = {
                username: 'testuser',
                body: {
                    name: 'Updated User'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('testuser not found !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndUpdate').resolves(null);

            customers.updateCustomer(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                username: 'testuser',
                body: {
                    name: 'Updated User'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.error).to.exist;
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndUpdate').rejects(new Error('Database error'));

            customers.updateCustomer(req, res);
        });

    });

    describe("deleteCustomer", () => {
        it('should delete customer and return 200 with success message if customer exists', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('customer testuser deleted !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndDelete').resolves({});

            customers.deleteCustomer(req, res);
        });

        it('should return 404 if customer is not found', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('testuser not found !');
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndDelete').resolves(null);

            customers.deleteCustomer(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                username: 'testuser'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(500);
                    return {
                        json: (obj) => {
                            expect(obj.error).to.exist;
                        }
                    }
                }
            };
            sinon.stub(Customer, 'findOneAndDelete').rejects(new Error('Database error'));

            customers.deleteCustomer(req, res);
        });

    });


});
