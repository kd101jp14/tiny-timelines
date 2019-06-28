import axios from "axios";

import * as Types from "./types";
import { types } from "util";

// Register User
export const postPictures = (pictures, userEmail) => {
  return (dispatch) => {
    // use AWS s3 library to post. 
      // TODO: Create free tier aws s3 bucket; Create accessId & acessKey as needed to use aws s3 NPM package.


      // WATCHOUT: May need to upload one image at a time - check the documentation for the image upload to limit.

      //aws.uploadFile (i think)
      //.then(data => {
      //   dispatch({
      //     type: Types.POSTED_IMAGES,
      //     results: data.location
      //   });
      // })
      
  }
};

export const getPictures = userEmail => {
  return (dispatch) => {

      //aws.getFromBucket (i made this up)
      //.then(data => {
      //   dispatch({
      //     type: Types.GOT_IMAGES,
      //     results: data (not sure what prop)
      //   });
      // })
      
  }
};
