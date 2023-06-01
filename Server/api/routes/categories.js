const express = require('express');
const router = express.Router();
const {getAllCategories, getFilteredCategories, createCategory} = require('../controllers/categories')

router.get('/', getAllCategories);
//router.get('/:subCategoryString', getFilteredCategories);
//router.post('/', createCategory);

module.exports = router;