const mongoose = require("mongoose");
const Review = require('../models/review');
const Provider = require('../models/provider');

module.exports = {
    // ##### Get all the reviews objects. #####
    getAllReviews : (req, res) => {
        Review.find().then((reviews) => {
            res.status(200).json(reviews)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get all the reviews objects about provider by name. #####
    getProviderReviewes : (req, res) => {
        const providerName = req.params.providerName;
        Review.find({targetProviderName: providerName}).then((reviews) => {
            res.status(200).json(reviews)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Create new review. #####
    createReview : (req, res) => {
        const {name, content, targetProviderName} = req.body
        Provider.findOne({name: targetProviderName}).then((p) => {
            if(p == null) {
                res.status(404).json({
                    message: `provider ${targetProviderName} not found !`
                });
            }
            else {
                const review = new Review({
                    _id: new mongoose.Types.ObjectId(),
                    name: name,
                    content: content,
                    targetProviderName: targetProviderName
                });
                review.save().then(() => {
                    res.status(200).json({
                        message: `new review about ${targetProviderName} created !`
                    });
                });
            }
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Delete review by id. #####
    deleteReview : (req, res) => {
        const reviewId = req.params.reviewId;
        Review.findByIdAndDelete(reviewId, function(err, r) {
            if (!err) {
                res.status(200).json({
                    message: "review deleted !"
                })
            } else {
                res.status(404).json({
                    message: "review not found !"
                })
            }
        })
    }
}