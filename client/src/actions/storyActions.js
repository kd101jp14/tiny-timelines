import axios from "axios";

import * as Types from "./types";

export const getStories = userEmail => {
  var data = {
    email: userEmail
  };
  return dispatch => {
    dispatch({
      type: Types.GETTING_STORIES
    });
    axios
      .post("/api/stories/getall", data)
      .then(res => {
        console.log("Success!", res);
        dispatch({
          type: Types.GOT_STORIES,
          stories: res.data
        });
        console.log("Success!");
        //dispatch
      })
      .catch(err => {
        console.log("Didn't work", err);
        dispatch({
            type: Types.FAILED_GETTING_STORIES
          });
      });
  };
};
