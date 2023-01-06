const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    mail: {type: String, required: false}
});

module.exports = mongoose.model('Customer', customerSchema);