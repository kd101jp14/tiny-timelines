import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import storyReducers from "./storyReducers";
import photoReducers from "./photoReducers";
import weightReducers from "./weightReducers"

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  stories: storyReducers,
  photos: photoReducers,
  weights: weightReducers
});