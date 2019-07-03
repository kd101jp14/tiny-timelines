const express = require("express");
const router = express.Router();
const Keys = require("../../models/Keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/getall", (req, res) => {
  // Form validation

  /*const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }*/

  console.log("getall", req.body);

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "That email does not exists" });
    } 

    // console.log(user.stories);
    return res.json(user.stories);
  });
});

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