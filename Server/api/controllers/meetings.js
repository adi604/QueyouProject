const mongoose = require("mongoose");
const Meeting = require('../models/meeting');

module.exports = {
    // ##### Get all the meetings objects. #####
    getAllMeetings: (req, res) => {
        Meeting.find().then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Get all the meetings objects of provider by providerUserName. #####
    getProviderMeetings: (req, res) => {
        const providerUserName = req.username;
        Meeting.find({ providerUserName: providerUserName }).then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Get all the times meetings by provider and date. #####
    getProviderTimesMeetings: (req, res) => {
        const providerUserName = req.username;
        const date = req.params.date;
        Meeting.find({ providerUserName: providerUserName, date: date }).then((meetings) => {
            const meetingsTimes = meetings.map(meeting => meeting.time);
            res.status(200).json({ times: meetingsTimes });
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Get all the meetings objects of customer by customerUserName. #####
    getCustomerMeetings: (req, res) => {
        const customerUserName = req.username;
        Meeting.find({ customerUserName: customerUserName }).then((meetings) => {
            res.status(200).json(meetings)
        }).catch(error => {
            res.status(500).json({ error });
        });
    },
    // ##### Create new meeting. #####
    createMeeting: (req, res) => {
        console.log(req.body);
        const { date, time, providerUserName, providerName, customerName } = req.body
        const customerUserName = req.username;
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
            res.status(500).json({ error });
        });
    },
    // ##### Update meeting by id. #####
    // Can used us for change customer of meeting, Or change dateAndTime.
    updateMeeting: (req, res) => {
        const meetingId = req.params.meetingId;
        Meeting.findByIdAndUpdate(meetingId, req.body, function (err, m) {
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
    deleteMeeting: (req, res) => {
        const meetingId = req.params.meetingId;
        const username = req.username;
        Meeting.findById(meetingId, function (err, m) {
            if (err) {
                res.status(404).json({
                    message: "meeting not found !"
                });
            } else if (username !== m.customerUserName && username !== m.providerUserName) {
                res.status(401).json({
                    message: "not authorized !"
                });
            } else {
                Meeting.findByIdAndDelete(meetingId, function (err, m) {
                    if (!err) {
                        res.status(200).json({
                            message: "meeting deleted !"
                        });
                    } else {
                        res.status(404).json({
                            message: "delete failed !"
                        });
                    }
                })
            }
        });

    }
}