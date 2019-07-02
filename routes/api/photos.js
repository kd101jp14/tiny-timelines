const express = require("express");
const router = express.Router();
const Keys = require("../../models/Keys");

router.get("/keys", (req, res) => {
  Keys.find({}, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      throw err;
    }
  });
});

module.exports = router;