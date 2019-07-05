import axios from "axios";
import moment from "moment";
import * as Types from "./types";

export const submitForm = (inputValue, userEmail) => {
  const data = {
    email: userEmail,
    story: inputValue,
    date: moment().format("MMMM Do YYYY")
  };
  return dispatch => {
    dispatch({
      type: Types.SUBMIT_FORM_REQUEST
    });
    axios
      .post("/api/forms/submit", data)
      .then(res => {
        console.log("Success!");
        dispatch({
          type: Types.FORM_REQUEST_SUBMITTED
        });
      })
      .catch(err => {
        console.log("Didn't work", err);
        dispatch({
          type: Types.FORM_REQUEST_FAILED
        });
      });
  };
};
