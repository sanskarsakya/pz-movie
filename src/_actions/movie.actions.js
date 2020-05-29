import { movieConstants } from '../_constants';
import { movieService } from '../_services';

export const movieActions = {
    getAll,
    getById,
}

function getAll(filter, page) {
    return dispatch => {

        dispatch(request());

        movieService.getAll(filter, page)
            .then(
                movies => dispatch(success(movies)),
                error => dispatch(failure(error))
            )
        function request() { return { type: movieConstants.GETALL_REQUEST } }
        function success(movies) { return { type: movieConstants.GETALL_SUCCESS, movies } }
        function failure(error) { return { type: movieConstants.GETALL_FAILURE, error } }
    }
}

function getById(id) {
    return dispatch => {

        dispatch(request());

        movieService.getById(id)
            .then(
                movie => dispatch(success(movie)),
                error => dispatch(failure(error))
            )
        function request() { return { type: movieConstants.GET_BY_ID_REQUEST } }
        function success(movie) { return { type: movieConstants.GET_BY_ID_SUCCESS, movie } }
        function failure(error) { return { type: movieConstants.GET_BY_ID_FAILURE, error } }
    }
}
