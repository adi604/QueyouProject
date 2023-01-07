const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dateAndTime: {type: String, required: true},
    providerName: {type: String, required: true}, // can add 'ref' for populate.
    customerName: {type: String, required: true} // can add 'ref' for populate.
});

module.exports = mongoose.model('Meeting', meetingSchema);