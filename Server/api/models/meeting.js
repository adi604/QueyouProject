const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: {type: String, required: true},
    time: {type: String, required: true},
    providerUserName: {type: String, required: true}, // can add 'ref' for populate.
    customerUserName: {type: String, required: true}, // can add 'ref' for populate.
    providerName: {type: String, required: true},
    customerName: {type: String, required: true}, // full name
});

module.exports = mongoose.model('Meeting', meetingSchema);