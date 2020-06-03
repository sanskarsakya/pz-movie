import { constants } from "../constants";

export const watchListActions = {
  // getMyWatchList,
  addToWatchList,
  removeFromWatchList
};
// function getMyWatchList() {
//   return dispatch => {

//     dispatch(success(movies));

//     // watchListService.getAllWatchList()
//     //   .then(
//     //     movies => dispatch(success(movies)),
//     //     error => dispatch(failure(error))
//     //   )
//     function request() { return { type: watchListConstants.GETALL_FAILURE } }
//     function success(movies) { return { type: watchListConstants.GETALL_SUCCESS, movies } }
//     function failure(error) { return { type: watchListConstants.GETALL_FAILURE, error } }
//   }
// }
function addToWatchList(movie) {
  return dispatch => {
    dispatch(success(movie));

    function success(movie) {
      return { type: constants.WATCHLIST_CREATE_SUCCESS, movie };
    }
  };
}

function removeFromWatchList(movie) {
  return dispatch => {
    dispatch(success(movie));

    function success(movie) {
      return { type: constants.WATCHLIST_DELETE_SUCCESS, movie };
    }
  };
}
