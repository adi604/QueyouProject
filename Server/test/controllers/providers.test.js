const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const providers = require('../../api/controllers/providers');
const Provider = require('../../api/models/provider');
const utils = require('../../utils/utils');

describe('Providers Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });

    describe("getAllProviders", () => {
        it('should return all providers with status 200', () => {
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (providers) => {
                            expect(providers).to.deep.equal(['provider1', 'provider2', 'provider3']);
                        }
                    }
                }
            };
            sinon.stub(Provider, 'find').resolves(['provider1', 'provider2', 'provider3']);

            providers.getAllProviders({}, res);
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
            sinon.stub(Provider, 'find').rejects(new Error('Database error'));

            providers.getAllProviders({}, res);
        });

    });

    describe("getProvider", () => {
        it('should return provider with status 200 if found', () => {
            const req = {
                params: {
                    providerUserName: 'testprovider'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (provider) => {
                            expect(provider).to.deep.equal({ username: 'testprovider', name: 'Test Provider' });
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves({ username: 'testprovider', name: 'Test Provider' });

            providers.getProvider(req, res);
        });

        it('should return 404 if provider is not found', () => {
            const req = {
                params: {
                    providerUserName: 'testprovider'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('provider testprovider not found !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOne').resolves(null);

            providers.getProvider(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                params: {
                    providerUserName: 'testprovider'
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
            sinon.stub(Provider, 'findOne').rejects(new Error('Database error'));

            providers.getProvider(req, res);
        });

    });

    describe("updateProvider", () => {
        it('should update provider and return 200 with success message if provider exists', () => {
            const req = {
                username: 'testprovider',
                body: {
                    details: { name: 'Updated Provider' },
                    offDate: ''
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('provider testprovider updated !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOneAndUpdate').resolves({});

            providers.updateProvider(req, res);
        });

        it('should update provider with offDate and return 200 with success message if provider exists', () => {
            const req = {
                username: 'testprovider',
                body: {
                    details: { name: 'Updated Provider' },
                    offDate: '2023-06-15'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('provider testprovider updated !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOneAndUpdate').resolves({ username: 'testprovider', name: 'Updated Provider', disabledDates: ['2023-06-15'] });

            providers.updateProvider(req, res);
        });

        it('should return 404 if provider is not found', () => {
            const req = {
                username: 'testprovider',
                body: {
                    details: { name: 'Updated Provider' },
                    offDate: ''
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('testprovider - Update Failed !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOneAndUpdate').resolves(null);

            providers.updateProvider(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                username: 'testprovider',
                body: {
                    details: { name: 'Updated Provider' },
                    offDate: ''
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
            sinon.stub(Provider, 'findOneAndUpdate').rejects(new Error('Database error'));

            providers.updateProvider(req, res);
        });

    });

    describe("deleteProvider", () => {
        it('should delete provider and return 200 with success message if provider exists', () => {
            const req = {
                username: 'testprovider'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('provider testprovider deleted !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOneAndDelete').resolves({});

            providers.deleteProvider(req, res);
        });

        it('should return 404 if provider is not found', () => {
            const req = {
                username: 'testprovider'
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(404);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equal('testprovider not found !');
                        }
                    }
                }
            };
            sinon.stub(Provider, 'findOneAndDelete').resolves(null);

            providers.deleteProvider(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                username: 'testprovider'
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
            sinon.stub(Provider, 'findOneAndDelete').rejects(new Error('Database error'));

            providers.deleteProvider(req, res);
        });


    });


    describe("getFilteredProviders", () => {
        it('should return filtered providers based on query parameters', async () => {
            const req = {
                query: {
                    name: 'Provider',
                    category: 'Category',
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            console.log("hey:" + obj);
                            expect(obj).to.deep.equal([{ name: 'Provider 1' }, { name: 'Provider 2' }]);
                        }
                    }
                }
            };
            sinon.stub(Provider, 'find').resolves([{ name: 'Provider 1' }, { name: 'Provider 2' }]);

            await providers.getFilteredProviders(req, res);
        });

        it('should return all providers if no query parameters are provided', async () => {
            const req = {
                query: {}
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (obj) => {
                            expect(obj).to.deep.equal([{ name: 'Provider 1' }, { name: 'Provider 2' }]);
                        }
                    }
                }
            };
            sinon.stub(Provider, 'find').resolves([{ name: 'Provider 1' }, { name: 'Provider 2' }]);

            await providers.getFilteredProviders(req, res);
        });

        it('should return 500 if an error occurs', async () => {
            const req = {
                query: {
                    name: 'Provider',
                    category: 'Category',
                    lat: '123.456',
                    lng: '78.910'
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
            sinon.stub(Provider, 'find').rejects(new Error('Database error'));

            await providers.getFilteredProviders(req, res);
        });

        
    });


});
