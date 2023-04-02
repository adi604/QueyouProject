const express = require('express');
const router = express.Router();
const {getAllProviders, getProvider, updateProvider, deleteProvider} = require('../controllers/providers')

router.get('/', getAllProviders);
router.get('/:providerUsername', getProvider);
router.patch('/:providerUsername', updateProvider);
router.delete('/:providerUsername', deleteProvider);

module.exports = router;