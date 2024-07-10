const express = require("express");

const router = express.Router();

const upload = require("../../../services/uploadConfig");

router.post("/", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Please send file" });
    }

    const { filename } = req.file;

    return res.json({ message: "File uploaded !", filename });
  } catch (err) {
    console.error(err);
    return null;
  }
});

module.exports = router;
