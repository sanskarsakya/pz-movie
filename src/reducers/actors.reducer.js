import {  constants } from "../constants";

export const ACTOR_DEFAULT_STATE = {
    loading: false,
    error: "",
    casts: [],
    crews: [],
  };

  
export function actors(state = ACTOR_DEFAULT_STATE, action) {
    switch (action.type) {
        case constants.MOVIES_GET_ACTORS_REQUEST: 
            return {
                loading: true
            };
        case constants.MOVIES_GET_ACTORS_SUCCESS: 
            return {
                casts: action.payload.cast,
                crews: action.payload.crew,
            };
        case constants.MOVIES_GET_ACTORS_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}

/**
 * cast and crew
 * movie structure
 * cast
 * crew
 * detail
 * image
 * 
 * is movie loaded ? loadMovieDetail : (loadCnC loadImage LoadRecommendation)
 */