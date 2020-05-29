import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../_actions';

function SearchPage() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll('', 1));
    }, [dispatch]);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h3>All Movie Search:</h3>
            {movies.loading && <em>Loading movies...</em>}
            {movies.error && <span className="text-danger">ERROR: {movies.error}</span>}
            {movies.items &&
                <ul>
                    {movies.items.map((movie, index) =>
                        <li key={movie.id}>
                            <Link to={'/movie/' + movie.id}>{movie.title}</Link>
                        </li>

                    )}
                </ul>
            }
        </div>
    );
}

export { SearchPage };