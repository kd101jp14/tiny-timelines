import axios from "axios";

import * as Types from "./types";

export const postingPictures = (userEmail, pictures) => {
  return (dispatch) => {
      //aws.uploadFile (i think)
      //.then(data => {
      //   dispatch({
      //     type: Types.POSTED_IMAGES,
      //     results: data.location
      //   });
      // })
      
  }
};

export const gettingPictures = userEmail => {
  return (dispatch) => {
    dispatch({
      type: Types.GETTING_PHOTOS
    });
    axios
      .post("/api/photos/getall", {email: userEmail})
      .then(res => {
        console.log("Success!", res);
        dispatch({
          type: Types.GOT_PHOTOS,
          results: res.data
        });
        console.log("Success!");
        //dispatch
      })
      .catch(err => {
        console.log("Didn't work", err);
        dispatch({
            type: Types.FAILED_GETTING_PHOTOS
          });
      });
      
  }
};
