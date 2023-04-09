const express = require('express');
const router = express.Router();
const {getAllProviders, getProvider, updateProvider, deleteProvider} = require('../controllers/providers')

router.get('/', getAllProviders);
router.get('/:providerUserName', getProvider);
router.patch('/:providerUserName', updateProvider);
router.delete('/:providerUserName', deleteProvider);

module.exports = router;