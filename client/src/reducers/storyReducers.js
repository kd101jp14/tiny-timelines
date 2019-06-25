import * as Types from "../actions/types";

const initialState = {
  stories: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.GETTING_STORIES:
      return {
        ...state,
        loading: true
      };
    case Types.GOT_STORIES:
      return {
        ...state,
        stories: action.stories,
        loading: false
      };
    case Types.FAILED_GETTING_STORIES:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
