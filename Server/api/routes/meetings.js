const express = require('express');
const router = express.Router();
const {getAllMeetings, getProviderMeetings, getProviderTimesMeetings, getCustomerMeetings, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meetings');
const { verifyAuthorization } = require('../../utils/utils');

//router.get('/', getAllMeetings);
router.get('/providerMeetings/:providerUserName', verifyAuthorization, getProviderMeetings);
router.get('/providerTimesMeetings/:providerUserName/:date', verifyAuthorization, getProviderTimesMeetings);
router.get('/customerMeetings/:customerUserName', verifyAuthorization, getCustomerMeetings);
router.post('/', verifyAuthorization, createMeeting);
//router.patch('/:meetingId', updateMeeting);
router.delete('/:meetingId', verifyAuthorization, deleteMeeting);

module.exports = router;