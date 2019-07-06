// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const forms = require("./routes/api/forms");
const stories = require("./routes/api/stories");
const photos = require("./routes/api/photos");
const weights = require("./routes/api/weights");
const tracker = require("./routes/api/tracker");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  // DB Config
  const db = require("./config/keys").mongoURI;
}

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected!"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/forms", forms);
app.use("/api/stories", stories);
app.use("/api/photos", photos);
app.use("/api/weights", weights);
app.use("/api/tracker", tracker);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
