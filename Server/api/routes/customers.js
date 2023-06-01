const express = require('express');
const router = express.Router();
const {getAllCustomers, getCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers')
const { verifyAuthorization } = require('../../utils/utils');


//router.get('/', getAllCustomers);
router.get('/:customerUserName', verifyAuthorization, getCustomer);
router.patch('/:customerUserName', verifyAuthorization, updateCustomer);
router.delete('/:customerUserName', verifyAuthorization, deleteCustomer);

module.exports = router;