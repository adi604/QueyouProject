const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    password: {type: String, required: true},
    location: {
        type: {type: String, required: true, default: "Point"},
        coordinates: {type: [Number], required: true}
    },
    address: {type: String, required: true},
    mail: {type: String, required: true},
    category: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    description: {type: String, required: true},
    maxDate: {type: String, required: true}, // example : "2024-05-07".
    durationMeeting: {type: Number, required: true}, // in minutes. example : 25.
    openTime: {type: String, required: true}, // example : "08:25".
    closeTime: {type: String, required: true}, // example : "20:00".
    disabledDays: {type: [Number], required: false, default: []}, // list of indexes between 0 to 6. example : [1, 3].
    disabledDates: {type: [String], required: false, default: []} // example : ["2023-04-24", "2023-04-25"].
});

providerSchema.index({location: "2dsphere"});
module.exports = mongoose.model('Provider', providerSchema);