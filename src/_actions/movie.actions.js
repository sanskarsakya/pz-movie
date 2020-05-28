import { movieConstants } from '../_constants';
import { movieService } from '../_services';

export const movieActions = {
    getAll,
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
