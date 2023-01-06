const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: false, default: "anonymous"},
    content: {type: String, required: true},
    targetProviderName: {type: String, required: true} // can add 'ref' for populate.
});

module.exports = mongoose.model('Review', reviewSchema);