const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    mail: {type: String, required: false},
    description: {type: String, required: false}
});

module.exports = mongoose.model('Provider', providerSchema);