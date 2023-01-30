const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "static";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file uploads
uploadRouter.post("/", upload.single("file"), (req, res, next) => {
  res.send("File uploaded");
});

module.exports = uploadRouter;
