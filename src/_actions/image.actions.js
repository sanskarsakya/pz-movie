import { imagesService } from "../_services";
import { imageConstants } from "../_constants";

export const imageActions = {
    getAllByMovie,
}

function getAllByMovie(movieId) {
    return dispatch => {

        dispatch(request());

        imagesService.getImagesByMovie(movieId)
            .then(
                images => dispatch(success(images)),
                error  => dispatch(failure(error))
            )
        function request() { return { type: imageConstants.GETALL_BY_MOVIE_REQUEST } }
        function success(images) { return { type: imageConstants.GETALL_BY_MOVIE_SUCCESS, images } }
        function failure(error) { return { type: imageConstants.GETALL_BY_MOVIE_FAILURE, error } }
    }
}
