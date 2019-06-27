import * as Types from "../actions/types";

const initialState = {
  results: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.POSTING_IMAGES:
      
      return;
    case Types.POSTED_IMAGES:
        return {
          ...state,
          results: action.results,
          loading: false
        };
    case Types.GETTING_IMAGES:
      return;
    case Types.GOT_IMAGES:
      return;
    default:
      return state;
  }
}
