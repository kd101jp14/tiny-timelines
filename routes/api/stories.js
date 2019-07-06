const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/User");

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


module.exports = router;