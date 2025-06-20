const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');


router.post('/postNewMessage', messageController.createMessage);
router.get('/getAllMessages', messageController.getMessages);

module.exports = router;