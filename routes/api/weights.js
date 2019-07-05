const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/User");

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

    if(user.weights === null){
        user.weights = [];
    }

    const newWeight = {
      weight: req.body.weight,
      date: req.body.date
    };

    user.weights.push(newWeight);
    user.save()
    .then(user => res.json(user))
    .catch(err => console.log(err));

  });
});

module.exports = router;