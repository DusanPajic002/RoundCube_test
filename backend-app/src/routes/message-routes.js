const express = require('express');
const router = express.Router();
const messageController = require('../controller/message.controller');


router.post('/newMessages', messageController.createMessage);
router.get('/getAllMessages', messageController.getMessages);

module.exports = router;