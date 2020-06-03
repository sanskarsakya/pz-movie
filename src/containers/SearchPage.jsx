import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieActions } from '../actions';
import { searchActions } from '../actions/search.actions';
import { MovieList } from "../components/MovieList/MovieList";

function SearchPage({match, history}) {
    const movies = useSelector(state => state.search);
    const dispatch = useDispatch();


    useEffect(() => {
        if (movies.text && movies.text.length > 2) {
            dispatch(searchActions.searchMovie(movies.text, 1));
        }
        // if(movies.text < 1){
        //     history.push(`/movie`);
        // }
        // console.log(match.params.keyword)
    }, [movies.text]);


    return (
        <div className="col-lg-8 offset-lg-2">
            <h3>All Movie Search:</h3>
            <MovieList title={'Search : ' + movies.text} movies={movies}></MovieList>
        </div>
    );
}

export { SearchPage };