// import { searcConstants } from "../constants/search.constants";
// import { movieService } from "../services";

// export const searchActions = {
//     setSearchText,
//     searchMovie
// }

// function setSearchText(text) {
//     return dispatch => {

//         dispatch(success(text));


//         function success(text) { return { type: searcConstants.SET_SEARCH_TEXT, text } }
//     }
// }

// function searchMovie(query, page) {
//     return dispatch => {
//         dispatch(request());

//         movieService.searchMovies(query, page)
//             .then(
//                 movies => dispatch(success(movies)),
//                 error => dispatch(failure(error))
//             )
//         function request() { return { type: searcConstants.SEARCH_REQUEST } }
//         function success(movies) { return { type: searcConstants.SEARCH_SUCCESS, movies } }
//         function failure(error) { return { type: searcConstants.SEARCH_FAILURE, error } }
//     }
// }
