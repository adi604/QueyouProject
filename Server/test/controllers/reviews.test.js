const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const reviews = require('../../api/controllers/reviews');
const Review = require('../../api/models/review');
const Provider = require('../../api/models/provider');
const mongoose = require("mongoose");


describe('Reviews Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });


    describe("reviews.js", () => {
        describe("getAllReviews", () => {
            it('should return all reviews', async () => {
                const req = {};
                const res = {
                    status: (num) => {
                        expect(num).to.equal(200);
                        return {
                            json: (reviews) => {
                                expect(reviews).to.deep.equal([{ name: 'John', content: 'Review 1' }, { name: 'Alice', content: 'Review 2' }]);
                            }
                        }
                    }
                };
                sinon.stub(Review, 'find').resolves([{ name: 'John', content: 'Review 1' }, { name: 'Alice', content: 'Review 2' }]);

                reviews.getAllReviews(req, res);
            });

            it('should return 500 if an error occurs', async () => {
                const req = {};
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
                sinon.stub(Review, 'find').rejects(new Error('Database error'));

                reviews.getAllReviews(req, res);
            });

        });

        describe("getProviderReviews", () => {
            it('should return provider reviews based on username', async () => {
                const req = {
                    params: {
                        providerUserName: 'provider123'
                    }
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(200);
                        return {
                            json: (reviews) => {
                                expect(reviews).to.deep.equal([{ name: 'John', content: 'Review 1' }, { name: 'Alice', content: 'Review 2' }]);
                            }
                        }
                    }
                };
                sinon.stub(Review, 'find').resolves([{ name: 'John', content: 'Review 1' }, { name: 'Alice', content: 'Review 2' }]);

                reviews.getProviderReviewes(req, res);
            });

            it('should return 500 if an error occurs', async () => {
                const req = {
                    params: {
                        providerUserName: 'provider123'
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
                sinon.stub(Review, 'find').rejects(new Error('Database error'));

                reviews.getProviderReviewes(req, res);
            });

        });

        describe("createReview", () => {
            it('should return 404 if provider is not found', async () => {
                const req = {
                    body: {
                        name: 'John',
                        content: 'Review 1',
                        score: 4.5,
                        date: '2023-06-08',
                        targetProviderUserName: 'provider123'
                    }
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(404);
                        return {
                            json: (obj) => {
                                expect(obj.message).to.equal('provider provider123 not found !');
                            }
                        }
                    }
                };
                sinon.stub(Provider, 'findOne').resolves(null);

                reviews.createReview(req, res);
            });

            it('should return 500 if an error occurs', async () => {
                const req = {
                    body: {
                        name: 'John',
                        content: 'Review 1',
                        score: 4.5,
                        date: '2023-06-08',
                        targetProviderUserName: 'provider123'
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

                reviews.createReview(req, res);
            });

        });

        describe("deleteReview", () => {
            it('should delete a review', async () => {
                const req = {
                    params: {
                        reviewId: '12345'
                    }
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(200);
                        return {
                            json: (obj) => {
                                expect(obj.message).to.equal('review deleted !');
                            }
                        }
                    }
                };
                sinon.stub(Review, 'findByIdAndDelete').callsFake((id, callback) => {
                    expect(id).to.equal('12345');
                    callback(null, {});
                });

                reviews.deleteReview(req, res);
            });

            it('should return 404 if review is not found', async () => {
                const req = {
                    params: {
                        reviewId: '12345'
                    }
                };
                const res = {
                    status: (num) => {
                        expect(num).to.equal(404);
                        return {
                            json: (obj) => {
                                expect(obj.message).to.equal('review not found !');
                            }
                        }
                    }
                };
                sinon.stub(Review, 'findByIdAndDelete').callsFake((id, callback) => {
                    callback(new Error('Review not found'), null);
                });

                reviews.deleteReview(req, res);
            });

        });
    });

});
