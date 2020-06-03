import {  constants } from "../constants";

export const ACTOR_DEFAULT_STATE = {
    loading: false,
    error: "",
    items: [],
  };

  
export function actors(state = ACTOR_DEFAULT_STATE, action) {
    switch (action.type) {
        case constants.MOVIES_GET_ACTORS_REQUEST: 
            return {
                loading: true
            };
        case constants.MOVIES_GET_ACTORS_SUCCESS: 
            return {
                items: action.actors
            };
        case constants.MOVIES_GET_ACTORS_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}