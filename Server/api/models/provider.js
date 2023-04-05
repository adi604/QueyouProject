const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    password: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Provider', providerSchema);