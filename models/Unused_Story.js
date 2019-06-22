const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for User Info
const BabyStory = new Schema({
  story: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", BabyStory);
