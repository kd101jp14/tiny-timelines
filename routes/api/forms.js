const express = require("express");
const router = express.Router();

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/submit", (req, res) => {
  // Form validation

  /*const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }*/

  console.log("submit", req.body);

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "That email does not exists" });
    } 

    if(user.stories === null){
        user.stories = [];
    }

    const newStory = {
      content: req.body.story,
      createDate: req.body.date
    };

    user.stories.push(newStory);
    user.save()
    .then(user => res.json(user))
    .catch(err => console.log(err));

  });
});



module.exports = router;