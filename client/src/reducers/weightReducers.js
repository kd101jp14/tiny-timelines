import * as Types from "../actions/types";

const initialState = {
  weights: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.GETTING_WEIGHTS:
      return {
        ...state,
        loading: true
      };
    case Types.GOT_WEIGHTS:
      return {
        ...state,
        weights: action.weights,
        loading: false
      };
    case Types.FAILED_GETTING_WEIGHTS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
