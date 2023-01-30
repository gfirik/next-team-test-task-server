const express = require("express");
const numberRouter = express.Router();

let prevNumber = 0;
let numbers = [];

// Send the next number and get the average between it and the previous one
numberRouter.post("/", (req, res) => {
  const nextNumber = Number(req.body.number);
  numbers.push(nextNumber);
  let avg = 0;
  if (numbers.length > 1) {
    avg = (numbers[numbers.length - 2] + nextNumber) / 2;
    prevNumber = numbers[numbers.length - 2];
  } else {
    avg = nextNumber;
  }
  // The average between ${prevNumber} and ${nextNumber} is ${avg}
  res.json({
    previousNumber: prevNumber,
    nextNumber: nextNumber,
    averageNumber: avg,
  });
});

// Get all numbers and calculations
numberRouter.get("/", (req, res) => {
  res.json({ numbers: numbers });
});

module.exports = { numberRouter, numbers };
