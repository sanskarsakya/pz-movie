import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../_actions';

// COMPONENTS
import { MovieList } from "../components/MovieList/MovieList";

function MoviePage() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll('', 1));
    }, [dispatch]);


    return (
        <>
            <MovieList title={'Suggestions'} movies={movies}></MovieList>
            <MovieList title={'Trending'} movies={movies}></MovieList>
        </>
    );
}

export { MoviePage };