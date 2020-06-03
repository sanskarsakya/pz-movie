import { imageConstants } from "../constants";

export function images(state = {}, action) {
    switch (action.type) {
        case imageConstants.GETALL_BY_MOVIE_REQUEST: 
            return {
                loading: true
            };
        case imageConstants.GETALL_BY_MOVIE_SUCCESS: 
            return {
                items: action.images
            };
        case imageConstants.GETALL_BY_MOVIE_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}