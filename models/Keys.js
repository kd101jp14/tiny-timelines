const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Key Info
const KeySchema = new Schema({
    AWS_BUCKET_NAME: {
    type: String,
    required: true
  },
  AWS_BUCKET_ID: {
    type: String,
    required: true
  },
  AWS_BUCKET_SECRET_KEY: {
    type: String,
    required: true
  },
  AWS_BUCKET_REGION: {
    type: String,
    required: true
  }
});

module.exports = Keys = mongoose.model("keys", KeySchema);
