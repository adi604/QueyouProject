const express = require('express');
const router = express.Router();
const {getAllReviews, getReview, getProviderReviewes, createReview, updateReview, deleteReview} = require('../controllers/reviews');
const { verifyAuthorization } = require('../../utils/utils');

//router.get('/', getAllReviews);
router.get('/providerReviews/:providerUserName', verifyAuthorization, getProviderReviewes);
router.post('/', verifyAuthorization, createReview);
//router.delete('/:reviewId', deleteReview);

module.exports = router;