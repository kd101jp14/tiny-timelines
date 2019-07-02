import * as Types from "../actions/types";

const initialState = {
  results: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.POSTING_PHOTOS:
        return {
          ...state,
          loading: true
        };
    case Types.POSTED_PHOTOS:
        return {
          ...state,
          results: action.results,
          loading: false
        };
    case Types.GETTING_PHOTOS:
        return {
          ...state,
          loading: true
        };
    case Types.GOT_PHOTOS:
        return {
          ...state,
          results: action.results,
          loading: false
        };
    default:
      return state;
  }
}
