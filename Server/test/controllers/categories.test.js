const { describe, it, afterEach } = require('@jest/globals');
const sinon = require('sinon');
const { expect } = require('chai');
const categories = require('../../api/controllers/categories');
const mongoose = require("mongoose");
const Category = require('../../api/models/category');


describe('Cateogries Controller', () => {
    afterEach(() => {
        sinon.restore(); // Restore the original functions after each test
    });

    describe("getAllCategories", () => {
        it('should return all categories with status 200', () => {
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (categories) => {
                            expect(categories).to.deep.equals(['category1', 'category2', 'category3']);
                        }
                    }
                }
            };
            sinon.stub(Category, 'find').resolves(['category1', 'category2', 'category3']);

            categories.getAllCategories({}, res);
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
            sinon.stub(Category, 'find').rejects(new Error('Database error'));

            categories.getAllCategories({}, res);
        });

    });

    describe("getFilteredCategories", () => {
        it('should return filtered categories with status 200', () => {
            const req = {
                params: {
                    subCategoryString: 'test'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(200);
                    return {
                        json: (categories) => {
                            expect(categories).to.deep.equal(['test category 1', 'test category 2']);
                        }
                    }
                }
            };
            sinon.stub(Category, 'find').resolves(['test category 1', 'test category 2']);

            categories.getFilteredCategories(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                params: {
                    subCategoryString: 'test'
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
            sinon.stub(Category, 'find').rejects(new Error('Database error'));

            categories.getFilteredCategories(req, res);
        });

    });

    describe("createCategory", () => {
        it('should create a new category and return 201 with success message', () => {
            const req = {
                body: {
                    categoryName: 'newCategory'
                }
            };
            const res = {
                status: (num) => {
                    expect(num).to.equal(201);
                    return {
                        json: (obj) => {
                            expect(obj.message).to.equals(`category newCategory created !`);
                        }
                    }
                }
            };
            const c = new Category({
                _id: 'fakeId',
                categoryName: req.body.categoryName
            });
            sinon.stub(mongoose.Types, 'ObjectId').returns('fakeId');
            const saveStub = sinon.stub().resolves(c);

            sinon.stub(Category.prototype, 'save').callsFake(function () {
                this._id = 'fakeId';
                this.save = saveStub;
                return this.save();
            });

            categories.createCategory(req, res);
        });

        it('should return 500 if an error occurs', () => {
            const req = {
                body: {
                    categoryName: 'newCategory'
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
            sinon.stub(mongoose.Types, 'ObjectId').returns('fakeId');
            sinon.stub(Category.prototype, 'save').rejects(new Error('Database error'));

            categories.createCategory(req, res);
        });
    });


});
