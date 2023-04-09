const express = require('express');
const router = express.Router();
const {getAllCustomers, getCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers')

router.get('/', getAllCustomers);
router.get('/:customerUserName', getCustomer);
router.patch('/:customerUserName', updateCustomer);
router.delete('/:customerUserName', deleteCustomer);

module.exports = router;