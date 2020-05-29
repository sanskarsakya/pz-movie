import { movieConstants } from "../_constants";

export function movies(state = {}, action) {
    switch (action.type) {
        case movieConstants.GETALL_REQUEST: 
            return {
                loading: true
            };
        case movieConstants.GETALL_SUCCESS: 
            return {
                items: action.movies
            };
        case movieConstants.GETALL_FAILURE: 
            return {
                error: action.error
            };
        case movieConstants.GET_BY_ID_REQUEST: 
            return {
                loading: true
            };
        case movieConstants.GET_BY_ID_SUCCESS: 
            return {
                item: action.movie
            };
        case movieConstants.GET_BY_ID_FAILURE: 
            return {
                error: action.error
            };
        default: 
            return state;
    }
}