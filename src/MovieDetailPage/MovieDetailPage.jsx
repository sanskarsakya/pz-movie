import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../_actions';

import { ActorList } from './components/ActorList';
import { RecommendationList } from './components/Recommendations';
import { ImageList } from './components/ImageList';


function MovieDetailPage(props) {
    const { match } = props;

    console.log(match.params.movie_id);
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll('', 1));
    }, [dispatch]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h3>All Movie detail page:</h3>
            <ActorList {...props}></ActorList>
            <RecommendationList {...props}></RecommendationList>
            <ImageList {...props}></ImageList>
            {/* {movies.loading && <em>Loading movies...</em>}
            {movies.error && <span className="text-danger">ERROR: {movies.error}</span>}
            {movies.items &&
                <ul>
                    {movies.items.map((movie, index) =>
                        <li key={movie.id}>
                            <Link to={'/movie/' + movie.id}>{movie.title}</Link>
                        </li>

                    )}
                </ul>
            } */}
        </div>
    );
}

export { MovieDetailPage };