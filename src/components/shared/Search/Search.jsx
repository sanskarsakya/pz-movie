import React, { useEffect } from 'react';
import { SearchMovie } from "../../SearchMovieCard/SearchMovie";
import { searchActions } from '../../../actions/search.actions';
import { useDispatch, useSelector } from 'react-redux';

function Search({ handleSearchChange }) {
    const [keyword, setKeyword] = React.useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchActions.setSearchText(keyword));
    }, [keyword]);

    function handleChange(event) {
        setKeyword(event.target.value)
    }

    return (
        <div className="relative">
            <input className="rounded border text-xs p-2 bg-transparent leading-none" style={{ color: '#8E95A5', width: 280, borderColor: '#424754' }} type="text" placeholder="Enter keyword here" onChange={handleChange}  />
            {/* <div className="p-4 w-full absolute -mb-12 bottom-0 right-0 bg-white">
                <SearchMovie></SearchMovie>
                asdf
            </div> */}
        </div>
    );
}

export { Search };