const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const port = 3333;
const { messageRouter, messages } = require("./routes/message");
const { numberRouter, numbers } = require("./routes/number");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the 'static' directory
app.use(express.static("static"));

// Use the message, number and upload routes
app.use("/message", messageRouter);
app.use("/number", numberRouter);

app.get("/", function (req, res) {
  // Get files from the 'static' folder
  fs.readdir("static", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading files");
    } else {
      // Get the array from routes/message
      const data = {};
      if (numbers.length) data.numbers = numbers;
      if (messages.length) data.messages = messages;
      res.json({ data });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
