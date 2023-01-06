const express = require('express');
const router = express.Router();
const {getAllReviews, getReview, getProviderReviewes, createReview, updateReview, deleteReview} = require('../controllers/reviews')

router.get('/', getAllReviews);
router.get('/providerReviews/:providerName', getProviderReviewes);
router.post('/', createReview);
router.delete('/:reviewId', deleteReview);

module.exports = router;