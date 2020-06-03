import { actorService } from '../services';
import { actorConstants } from '../constants';

export const actorActions = {
    getAllByMovie,
}

function getAllByMovie(movieId) {
    return dispatch => {

        dispatch(request());

        actorService.getActorByMovie(movieId)
            .then(
                actors => dispatch(success(actors)),
                error  => dispatch(failure(error))
            )
        function request() { return { type: actorConstants.GETALL_BY_MOVIE_REQUEST } }
        function success(actors) { return { type: actorConstants.GETALL_BY_MOVIE_SUCCESS, actors } }
        function failure(error) { return { type: actorConstants.GETALL_BY_MOVIE_FAILURE, error } }
    }
}
