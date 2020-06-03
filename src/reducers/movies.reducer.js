
import { constants } from "../constants/index";
export const MOVIE_DEFAULT_STATE = {
  loading: false,
  error: "",
  items: [],
  item: {},
  text: ""
};

export function movies(state = MOVIE_DEFAULT_STATE, action) {
  switch (action.type) {
    case constants.MOVIES_GET_TRENDING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case constants.MOVIES_GET_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.movies
      };
    case constants.MOVIES_GET_TRENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case constants.MOVIES_GET_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case constants.MOVIES_GET_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.movie
      };
    case constants.MOVIES_GET_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case constants.SET_SEARCH_TEXT:
      return {
        ...state,
        text: action.text
      };
    case constants.SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case constants.SEARCH_SUCCESS:
      console.log(action.movies);
      return {
        ...state,
        items: action.movies,
        loading: false
      };
    case constants.SEARCH_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case constants.MOVIES_RESET:
      return state;
    default:
      return state;
  }
}
