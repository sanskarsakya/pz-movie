import { actorConstants } from "../_constants";

export function actors(state = {}, action) {
    switch (action.type) {
        case actorConstants.GETALL_BY_MOVIE_REQUEST: 
            return {
                loading: true
            };
        case actorConstants.GETALL_BY_MOVIE_SUCCESS: 
            return {
                items: action.actors
            };
        case actorConstants.GETALL_BY_MOVIE_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}