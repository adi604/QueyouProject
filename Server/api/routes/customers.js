const express = require('express');
const router = express.Router();
const {getAllCustomers, getCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers')

router.get('/', getAllCustomers);
router.get('/:customerUsername', getCustomer);
router.patch('/:customerUsername', updateCustomer);
router.delete('/:customerUsername', deleteCustomer);

module.exports = router;