import { constants } from "../constants";

export const WATCHLIST_DEFAULT_STATE = {
  loading: false,
  error: "",
  items: []
};

export function watchlist(state = WATCHLIST_DEFAULT_STATE, action) {
  switch (action.type) {
    case constants.WATCHLIST_CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case constants.WATCHLIST_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.concat(action.movie)
      };
    case constants.WATCHLIST_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case constants.WATCHLIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item, index) => item.id !== action.movie.id)
      };

    default:
      return state;
  }
}
