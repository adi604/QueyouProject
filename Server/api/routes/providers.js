const express = require('express');
const router = express.Router();
const {getAllProviders, getProvider, updateProvider, deleteProvider, getFilteredProviders} = require('../controllers/providers')
const {verifyAuthorization} = require('../../utils/utils')

router.get('/', getAllProviders);
router.get('/username/:providerUserName', getProvider);
router.get('/filter',verifyAuthorization, getFilteredProviders);
router.patch('/username/:providerUserName', updateProvider);
router.delete('/username/:providerUserName', deleteProvider);

module.exports = router;