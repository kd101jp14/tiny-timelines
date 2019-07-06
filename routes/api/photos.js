const express = require("express");
const router = express.Router();
const formData = require('express-form-data');
const Keys = require("../../models/Keys");
const S3 = require("aws-s3");
const aws = require('aws-sdk');
var fs = require('fs'); 


var AWS_ACCESS_KEY = 'your_AWS_access_key'
var AWS_SECRET_KEY = 'your_AWS_secret_key'
var S3_BUCKET = 'images_upload'

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Load User model
const User = require("../../models/User");

router.use(formData.parse());

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
    return res.json(user.photos);
  });
});

router.post("/post", (req, res) => {

  console.log("Req", req);
  const values = Object.values(req.files)
  console.log("Files", values);

  aws.config.update({
    accessKeyId: process.env.AWS_BUCKET_ID, 
    secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY});

  var s3 = new aws.S3();

  for (let i = 0; i < values.length; i++) {
    console.log("Files", i);
    var bodystream = fs.createReadStream(values[i].path);
    var dirName = req.body.EMAIL + "/" + values[i].name;
    var options = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: dirName,
      Body: bodystream,
      Expires: 60,
      ContentType: values[i].type,
      ACL: 'public-read'
    };


    var uploadPromise = s3.putObject(options).promise();
    uploadPromise.then(function(data){
      var imgUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${dirName}`;
      User.findOne({ email: req.body.EMAIL }).then(user => {
        if (!user) {
          return res.status(400).json({ email: "That email does not exists" });
        } 
    
        if(user.photos === null){
            user.photos = [];
        }
    
        const newPhoto = {
          url: imgUrl,
          createDate: req.body.date
        };
    
        user.photos.push(newPhoto);
        user.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    
      });

      res.json({
        imageUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_BUCKET_REGION}.amazonaws.com/${dirName}`
      });
    });

    /*S3Client.uploadFile(values[i])
      .then(data => {
        console.log("data!", data);
        res.end();
        // data.location
      })
      .catch(err => console.log("error!", err));*/
  }

  /*const S3Client = new S3(config);


  for (let i = 0; i < values.length; i++) {
    console.log("Files", i);
    S3Client.uploadFile(values[i])
      .then(data => {
        console.log("data!", data);
        res.end();
        // data.location
      })
      .catch(err => console.log("error!", err));
  }*/

  console.log("Done");
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