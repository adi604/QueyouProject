const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Category', categorySchema);