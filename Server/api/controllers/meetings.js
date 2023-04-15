const mongoose = require("mongoose");
const Meeting = require('../models/meeting');

module.exports = {
    // ##### Get all the meetings objects. #####
    getAllMeetings : (req, res) => {
        Meeting.find().then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get all the meetings objects of provider by providerUserName. #####
    getProviderMeetings : (req, res) => {
        const providerUserName = req.params.providerUserName;
        Meeting.find({providerUserName: providerUserName}).then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Get all the meetings objects of customer by customerUserName. #####
    getCustomerMeetings : (req, res) => {
        const customerUserName = req.params.customerUserName;
        Meeting.find({customerUserName: customerUserName}).then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Create new meeting. #####
    createMeeting : (req, res) => {
        const {date, time, providerUserName, customerUserName, providerName, customerName} = req.body
        // We assume here that providerName,customerName exists,
        // And that there is no conflict in the dateAndTime.
        const meeting = new Meeting({
            _id: new mongoose.Types.ObjectId(),
            date: date,
            time: time,
            providerUserName: providerUserName,
            customerUserName: customerUserName,
            providerName: providerName,
            customerName: customerName
        });
        meeting.save().then(() => {
            res.status(200).json({
                message: "new meeting created !",
                meeting
            });
        }).catch(error => {
            res.status(500).json({error});
        });
    },
    // ##### Update meeting by id. #####
    // Can used us for change customer of meeting, Or change dateAndTime.
    updateMeeting : (req, res) => {
        const meetingId = req.params.meetingId;
        Meeting.findByIdAndUpdate(meetingId, req.body, function(err, m) {
            if (!err) {
                res.status(200).json({
                    message: "meeting updated !"
                })
            } else {
                res.status(404).json({
                    message: "update failed !"
                })
            }
        })
    },
    // ##### Delete meeting by id. #####
    deleteMeeting : (req, res) => {
        const meetingId = req.params.meetingId;
        Meeting.findByIdAndDelete(meetingId, function(err, m) {
            if (!err) {
                res.status(200).json({
                    message: "meeting deleted !"
                })
            } else {
                res.status(404).json({
                    message: "delete failed !"
                })
            }
        })
    }
}