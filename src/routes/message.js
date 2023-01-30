const express = require("express");
const messageRouter = express.Router();

let messages = [];

// Add a new message
messageRouter.post("/", (req, res) => {
  const newMessage = req.body.message;
  messages.push(newMessage);
  res.json(newMessage);
});

// Get all messages
messageRouter.get("/", (req, res) => {
  res.json({
    messages: messages,
  });
});

module.exports = { messageRouter, messages };
