const express = require('express');
const router = express.Router();
const {getAllMeetings, getProviderMeetings, getProviderTimesMeetings, getCustomerMeetings, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meetings')

router.get('/', getAllMeetings);
router.get('/providerMeetings/:providerUserName', getProviderMeetings);
router.get('/providerTimesMeetings/:providerUserName/:date', getProviderTimesMeetings);
router.get('/customerMeetings/:customerUserName', getCustomerMeetings);
router.post('/', createMeeting);
router.patch('/:meetingId', updateMeeting);
router.delete('/:meetingId', deleteMeeting);

module.exports = router;