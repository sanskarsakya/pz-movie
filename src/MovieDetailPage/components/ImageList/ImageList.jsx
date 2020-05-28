import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imageActions } from '../../../_actions';

function ImageList(props) {
    const { match } = props;

    console.log(match.params.movie_id);
    const images = useSelector(state => state.images);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(imageActions.getAllByMovie(match.params.movie_id));
    }, [dispatch]);

    return (
        <div className="">
            <h3>Image List</h3>
            {images.items &&
                <ul>
                    {images.items.map((image, index) =>
                        <li key={index}>
                            <span>{image.height}</span>
                        </li>

                    )}
                </ul>
            }
        </div>
    );
}

export { ImageList };