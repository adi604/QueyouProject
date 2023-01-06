const express = require('express');
const router = express.Router();
const {signUpCustomers, loginCustomers, signUpProviders, loginProviders} = require('../controllers/users')

router.post('/signUpCustomers', signUpCustomers);
router.post('/loginCustomers', loginCustomers);
router.post('/signUpProviders', signUpProviders);
router.post('/loginProviders', loginProviders);

module.exports = router;