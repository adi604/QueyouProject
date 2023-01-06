const express = require('express');
const router = express.Router();
const {getAllProviders, getProvider, updateProvider, deleteProvider} = require('../controllers/providers')

router.get('/', getAllProviders);
router.get('/:providerName', getProvider);
router.patch('/:providerName', updateProvider);
router.delete('/:providerName', deleteProvider);

module.exports = router;