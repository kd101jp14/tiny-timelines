import axios from "axios";

import {
  SUBMIT_FORM_REQUEST
} from "./types";

// Register User
export const submitForm = (inputValue, userEmail) => {
  var data = {
    email: userEmail,
    story: inputValue
  }
  return (dispatch) => {
    axios
      .post("/api/forms/submit", data)
      .then(res => {
        console.log("Success!");
        //dispatch
      })
      .catch(err => {
        console.log("Didn't work", err);
        //dispatch
      }
    );
  };
};