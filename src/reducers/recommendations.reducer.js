import { recommendationConstants } from "../constants";

export function recommendations(state = {}, action) {
    switch (action.type) {
        case recommendationConstants.GETALL_BY_MOVIE_REQUEST: 
            return {
                loading: true
            };
        case recommendationConstants.GETALL_BY_MOVIE_SUCCESS: 
            return {
                items: action.recommendations
            };
        case recommendationConstants.GETALL_BY_MOVIE_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}