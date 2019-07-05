const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for User Info
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  babyName: {
    type: String,
    required: true
  },
  stories: {
    type: Array,
    required: false,
    date: {
      type: Array,
      required: false
    }
  },
  photos: {
    type: Array,
    required: false,
    date: {
      type: Array,
      required: false
    }
  },
  weights: {
    type: Array,
    required: false,
    weight: {
      type: Array,
      required: false
    },
    date: {
      type: Array,
      required: false
    }
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
