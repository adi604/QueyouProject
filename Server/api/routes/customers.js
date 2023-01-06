const express = require('express');
const router = express.Router();
const {getAllCustomers, getCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers')

router.get('/', getAllCustomers);
router.get('/:customerName', getCustomer);
router.patch('/:customerName', updateCustomer);
router.delete('/:customerName', deleteCustomer);

module.exports = router;