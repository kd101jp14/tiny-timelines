import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import storyReducers from "./storyReducers";
import pictureReducers from "./pictureReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  stories: storyReducers,
  pictures: pictureReducers
});