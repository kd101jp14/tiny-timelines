import axios from "axios";
import moment from "moment";
import * as Types from "./types";

export const submitWeight = (weightValue, userEmail) => {
  const data = {
    email: userEmail,
    weight: weightValue,
    date: moment().format("MMMM Do YYYY")
  };
  return dispatch => {
    dispatch({
      type: Types.SUBMIT_WEIGHT_REQUEST
    });
    axios
      .post("/api/weights/submit", data)
      .then(res => {
        console.log("Success!");
        dispatch({
          type: Types.WEIGHT_REQUEST_SUBMITTED
        });
      })
      .catch(err => {
        console.log("Didn't work", err);
        dispatch({
          type: Types.WEIGHT_REQUEST_FAILED
        });
      });
  };
};
