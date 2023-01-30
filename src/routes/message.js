const express = require("express");
const messageRouter = express.Router();

let messages = [];

// Add a new message
messageRouter.post("/", (req, res) => {
  const message = req.body.message;
  const author = req.body.author;
  const newMessage = { message, author };
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
