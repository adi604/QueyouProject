const mongoose = require("mongoose");

const Category = require('../models/category');

module.exports = {
    // ##### Get all the categories objects. #####
    getAllCategories : (req, res) => {
        Category.find().then((categories) => {
            res.status(200).json(categories)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get all the categories objects that contains the category argument. #####
    getFilteredCategories : (req, res) => {
        const subCategoryStr = req.params.subCategoryString;
        Category.find({categoryName: {$regex: subCategoryStr, $options: 'i'}}).then((categories) => {
            res.status(200).json(categories)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Create new category. #####
    createCategory : (req, res) => {
        const category = new Category({
            _id: new mongoose.Types.ObjectId(),
            categoryName: req.body.categoryName
        });
        category.save().then((c) => {
            res.status(201).json({
                message: `category ${c.categoryName} created !`
            })
        }).catch(error => {
            res.status(500).json({error});
        });
    }
}