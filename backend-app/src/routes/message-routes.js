const express = require('express');
const router = express.Router();
const messageController = require('../controller/message.controller');

// Route to create a new message
router.post('/newMessages', messageController.createMessage);
// Route to get all messages
router.get('/getAllMessages', messageController.getMessages);

module.exports = router;