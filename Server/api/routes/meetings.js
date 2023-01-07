const express = require('express');
const router = express.Router();
const {getAllMeetings, getProviderMeetings, getCustomerMeetings, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meetings')

router.get('/', getAllMeetings);
router.get('/providerMeetings/:providerName', getProviderMeetings);
router.get('/customerMeetings/:customerName', getCustomerMeetings);
router.post('/', createMeeting);
router.patch('/:meetingId', updateMeeting);
router.delete('/:meetingId', deleteMeeting);

module.exports = router;