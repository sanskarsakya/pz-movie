import { searcConstants } from "../constants/search.constants";

export function search(state = {}, action) {
    switch (action.type) {
        case searcConstants.SET_SEARCH_TEXT:
            return {
                text: action.text
            };

        case searcConstants.SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case searcConstants.SEARCH_SUCCESS:
            return {
                ...state,
                items: action.movies,
                loading:false,
            };

        case searcConstants.SEARCH_FAILURE:
            return {
                error: action.error
            };

        default:
            return state;
    }
}