const { Message } = require('../models'); 
const Joi = require('joi');

// Define the schema for message validation
const messageSchema = Joi.object({
  message: Joi.string().min(1).max(1000).required(),
  user: Joi.string().min(1).max(100).required(),
});

// Function to create a new message
exports.createMessage = async (req, res) => {
  try {
    const { error, value } = messageSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ status: 'failed', message: error.details[0].message });
    }
    
    const newMessage = await Message.create(value);
    res.status(201).json({ status: 'success', data: newMessage });
  } catch (err) {
    res.status(500).json({ status: 'failed', message: 'An internal server error occurred.' });
  }
};

// Function to retrieve messages with pagination
exports.getMessages = async (req, res) => {
  try {
    const page = parseInt(req.query.pageNumber, 10) || 1;
    const size = parseInt(req.query.pageSize, 10) || 10; 
    const limit = size;
    const offset = (page - 1) * size;
    const { count, rows } = await Message.findAndCountAll({ limit, offset}); 
    
    res.status(200).json({
      status: 'success',
      totalMessages: count,
      totalPages: Math.ceil(count / limit),
      messages: rows,
    });
  } catch (err) {
    res.status(500).json({ status: 'failed', message: 'An internal server error occurred.' });
  }
};