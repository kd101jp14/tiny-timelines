import axios from "axios";

import * as Types from "./types";

export const getWeights = userEmail => {
  var data = {
    email: userEmail
  };
  return dispatch => {
    dispatch({
      type: Types.GETTING_WEIGHTS
    });
    axios
      .post("/api/tracker/getall", data)
      .then(res => {
        console.log("Success!", res);
        dispatch({
          type: Types.GOT_WEIGHTS,
          weights: res.data
        });
        console.log("Success!");
        //dispatch
      })
      .catch(err => {
        console.log("Didn't work", err);
        dispatch({
            type: Types.FAILED_GETTING_WEIGHTS
          });
      });
  };
};