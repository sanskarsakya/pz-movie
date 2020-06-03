// import { movieConstants } from '../constants';
// import { movieService } from '../services';

// export const movieActions = {
//     getAll,
//     getById,
// }

// function getAll(filter, page) {
//     return dispatch => {

//         dispatch(request());

//         movieService.getAll(filter, page)
//             .then(
//                 movies => dispatch(success(movies)),
//                 error => dispatch(failure(error))
//             )
//         function request() { return { type: movieConstants.GETALL_REQUEST } }
//         function success(movies) { return { type: movieConstants.GETALL_SUCCESS, movies } }
//         function failure(error) { return { type: movieConstants.GETALL_FAILURE, error } }
//     }
// }

// function getById(id) {
//     return dispatch => {

//         dispatch(request());

//         movieService.getById(id)
//             .then(
//                 movie => dispatch(success(movie)),
//                 error => dispatch(failure(error))
//             )
//         function request() { return { type: movieConstants.GET_BY_ID_REQUEST } }
//         function success(movie) { return { type: movieConstants.GET_BY_ID_SUCCESS, movie } }
//         function failure(error) { return { type: movieConstants.GET_BY_ID_FAILURE, error } }
//     }
// }
import {
  _getTrending,
  _getMovies,
  _getMovie,
  _searchMovies,
  _getActors,
  _getRecommendations
} from "../services/movie.service";
import { constants } from "../constants";
import { sliceArray } from "../helpers/util";

export const movieActions = {
  getTrending,
  getMovies,
  getMovieDetail,
  getActors,
  setSearchText,
  searchMovie,
  resetMovies,
  getRecommendations
};

function getTrending() {
  return dispatch => {
    dispatch(request());

    _getTrending().then(
      movies => dispatch(success(sliceArray(movies.data.results, 5))),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.MOVIES_GET_TRENDING_REQUEST, name: 'Trending' };
    }
    function success(movies) {
      return { type: constants.MOVIES_GET_TRENDING_SUCCESS, name: 'Trending', movies };
    }
    function failure(error) {
      return { type: constants.MOVIES_GET_TRENDING_FAILURE, name: 'Trending', error };
    }
  };
}

function getMovies(filter, page) {
  return dispatch => {
    dispatch(request());

    _getMovies({ filter: filter, page: page }).then(
      movies => dispatch(success(movies.data.results)),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.MOVIES_GET_TRENDING_REQUEST, name: 'Movies' };
    }
    function success(movies) {
      return { type: constants.MOVIES_GET_TRENDING_SUCCESS, name: 'Movies', movies };
    }
    function failure(error) {
      return { type: constants.MOVIES_GET_TRENDING_FAILURE, name: 'Movies', error };
    }
  };
}

function getRecommendations(movieId) {
  return dispatch => {
    dispatch(request());

    _getRecommendations(movieId).then(
      movies => dispatch(success(movies.data.results)),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.MOVIES_GET_TRENDING_REQUEST, name: 'Recommendations' };
    }
    function success(movies) {
      return { type: constants.MOVIES_GET_TRENDING_SUCCESS, name: 'Recommendations', movies };
    }
    function failure(error) {
      return { type: constants.MOVIES_GET_TRENDING_FAILURE, name: 'Recommendations', error };
    }
  };
}

function getMovieDetail(id) {
  return dispatch => {
    dispatch(request(id));

    _getMovie(id).then(
      movie => dispatch(success(movie.data)),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.MOVIES_GET_DETAIL_REQUEST, name: 'Movies' };
    }
    function success(movie) {
      return { type: constants.MOVIES_GET_DETAIL_SUCCESS, name: 'Movies', movie };
    }
    function failure(error) {
      return { type: constants.MOVIES_GET_DETAIL_FAILURE, name: 'Movies', error };
    }
  };
}

function getActors(id) {
  return dispatch => {
    dispatch(request(id));

    _getActors(id).then(
      actors => dispatch(success(actors.data.cast)),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.MOVIES_GET_ACTORS_REQUEST };
    }
    function success(actors) {
      return { type: constants.MOVIES_GET_ACTORS_SUCCESS, actors };
    }
    function failure(error) {
      return { type: constants.MOVIES_GET_ACTORS_FAILURE, error };
    }
  };
}

function setSearchText(text) {
  return dispatch => {
    dispatch(success(text));

    function success(text) {
      return { type: constants.SET_SEARCH_TEXT, name: 'Movies', text };
    }
  };
}

function searchMovie(query, page) {
  return dispatch => {
    dispatch(request());

    _searchMovies({ query: query, page: page }).then(
      movies => dispatch(success(movies.data.results)),
      error => dispatch(failure(error))
    );
    function request() {
      return { type: constants.SEARCH_REQUEST, name: 'Movies' };
    }
    function success(movies) {
      return { type: constants.SEARCH_SUCCESS, name: 'Movies', movies };
    }
    function failure(error) {
      return { type: constants.SEARCH_FAILURE, name: 'Movies', error };
    }
  };
}

function resetMovies() {
  return dispatch => {
    dispatch(request());

    function request() {
      return { type: constants.MOVIES_RESET };
    }
  };
}

  // function getMovieDetail(id) {
  //   return dispatch => {
  //     dispatch(request(id));

  //     _getMovie(id)
  //       .then(
  //         axios.spread((...responses) => {
  //           const detail = responses[0];
  //           const actors = responses[1];
  //           const recommendations = responses[2];
  //           const images = responses[3];
  //           let data = { ...{}, detail, actors, recommendations, images };
  //           // use/access the results
  //           dispatch(success(data));
  //         })
  //       )
  //       .catch(errors => {
  //         // react on errors.
  //         dispatch(failure(errors));
  //       });
  //     function request() {
  //       return { type: constants.MOVIES_GET_DETAIL_REQUEST };
  //     }
  //     function success(movie) {
  //       return { type: constants.MOVIES_GET_DETAIL_SUCCESS, movie };
  //     }
  //     function failure(error) {
  //       return { type: constants.MOVIES_GET_DETAIL_FAILURE, error };
  //     }
  //   };
  // }
