import axios from "axios";
import moment from "moment";

import {
  SUBMIT_FORM_REQUEST
} from "./types";

// Register User
export const submitForm = (inputValue, userEmail) => {
  const data = {
    email: userEmail,
    story: inputValue,
    date: moment().format('MMMM Do YYYY')
  }
  return dispatch => {
    dispatch ({ 
      type: SUBMIT_FORM_REQUEST
    });
    axios
      .post("/api/forms/submit", data)
      .then(res => {
        dispatch ({ 
        });
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