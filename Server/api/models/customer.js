const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true, unique: false},
    lastName: {type: String, required: true, unique: false},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    phoneNumber: {type: String, required: true},
});

module.exports = mongoose.model('Customer', customerSchema);