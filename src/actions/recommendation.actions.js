import { recommendationService } from "../services";
import { recommendationConstants } from "../constants";

export const recommendationActions = {
    getAllByMovie,
}

function getAllByMovie(movieId) {
    return dispatch => {

        dispatch(request());

        recommendationService.getRecommendationByMovie(movieId)
            .then(
                recommendations => dispatch(success(recommendations)),
                error => dispatch(failure(error))
            )
        function request() { return { type: recommendationConstants.GETALL_BY_MOVIE_REQUEST } }
        function success(recommendations) { return { type: recommendationConstants.GETALL_BY_MOVIE_SUCCESS, recommendations } }
        function failure(error) { return { type: recommendationConstants.GETALL_BY_MOVIE_FAILURE, error } }
    }
}
