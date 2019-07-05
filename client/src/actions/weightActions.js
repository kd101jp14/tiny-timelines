import axios from "axios";
import moment from "moment";

import * as Types from "./types";

export const submitWeight = (weight, userEmail) => {
  const data = {
    email: userEmail,
    weight: weight,
    date: moment().format('MMMM Do YYYY')
  }
  return dispatch => {
    dispatch ({ 
      type: Types.SUBMIT_WEIGHT_REQUEST
    });
    axios
      .post("/api/weights/submit", data)
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