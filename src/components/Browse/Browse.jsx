import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from "../../actions/movie.actions";
import { getReleaseDate } from "../../helpers/util";

// COMPONENTS
import Card from "../Card/Card";
import { Genre } from "../Dropdown/Genre";
import { Rating } from "../Dropdown/Rating";
import { Search } from "../Search/Search";

import ReactPaginate from "react-paginate";

function Browse() {
    const dispatch = useDispatch();

    // STATES
    const [currentPage, setCurrentPage] = React.useState(1);
    const [genre, setGenre] = React.useState([]);
    const [filter, setFilter] = React.useState("");
    const [selectedGenre, setSelectedGenre] = React.useState(0);
    const [selectedRatingOption, setSelectedRatingOption] = React.useState("");

    // SELECTORS
    const { items, error, loading, text } = useSelector(state => state.movies);
    const { items: genreItems } = useSelector(state => state.genres);

    const filteredData = useSelector(state =>
        state.movies ? filterByGenre(state.movies, selectedGenre) : state.movies
    );

    const sortedData = useSelector(state =>
        state.movies
            ? sortByRating(state.movies, selectedRatingOption)
            : state.movies
    );

    // EFFECTS
    useEffect(() => {
        fetchMovies(filter, currentPage);
        fetchGenre();
    }, [filter, currentPage]);

    // useEffect(() => {
    //     fetchGenre();
    // }, [])

    useEffect(() => {
        if (text && text.length > 2) {
            console.log(text);
            searchMovies(text);
        }
        if (text.length === 0) {
            console.log(text);
            fetchMovies(filter, currentPage);
        }
    }, [text]);


    function filterByGenre(movies, selectedGenre) {
        let data = movies.items
            ? movies.items.filter(
                item => item.genre_ids && item.genre_ids.includes(selectedGenre)
            )
            : [];

        return data;
    }

    function sortByRating(movies, selectedRatingOption) {
        const compareHighToLow = (a, b) => {
            return b.vote_average - a.vote_average;
        };
        const compareLowToHigh = (a, b) => {
            return a.vote_average - b.vote_average;
        };

        let data = movies.items
            ? selectedRatingOption === "Highest"
                ? movies.items.sort(compareLowToHigh)
                : movies.items.sort(compareHighToLow)
            : [];

        return data;
    }

    function fetchMovies(filter, currentPage) {
        dispatch(movieActions.getMovies(filter, currentPage));
    }

    function searchMovies(text) {
        dispatch(movieActions.searchMovie(text, 1));
    }

    function fetchGenre() {
        console.log('genre')
        // setGenre([
        //     {
        //         id: 28,
        //         name: "zcxv"
        //     },
        //     {
        //         id: 12,
        //         name: "asdf"
        //     },
        //     {
        //         id: 16,
        //         name: "qwer"
        //     }
        // ]);
        dispatch(movieActions.getGenres());
    }

    function genreChange(event) {
        let selected = genreItems[event.target.selectedIndex].id;
        setSelectedGenre(selected);
        // filterByGenre(genreItems[event.target.selectedIndex].id)
    }

    function ratingChange(event) {
        setSelectedRatingOption(event.target.value);
    }

    function handlePageClick(e) {
        console.log(e.selected + 1);
        setCurrentPage(e.selected + 1);
    }

    return (
        <>
            <div className="mt-8 max-w-6xl mx-auto pb-16">
                <h1 className="font-bold text-4xl mr-2">Browse</h1>
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className={`flex cursor-pointer  ${filter === 'now_playing' ? "rounded-full px-3 py-1 bg-white text-blue-800" : ""}`} onClick={() => { setFilter("now_playing"); setCurrentPage(1); }}>
                            <span className="mr-1" role="img" aria-label="fire">🗺️</span>Now Playing
                        </span>

                        <span className={`flex cursor-pointer ml-8  ${filter === 'popular' ? "rounded-full px-3 py-1 bg-white text-blue-800" : ""}`} onClick={() => { setFilter("popular"); setCurrentPage(1); }}>
                            <span className="mr-1" role="img" aria-label="fire">🔥</span>Popular
                        </span>

                        <span className={`flex cursor-pointer ml-8  ${filter === 'top_rated' ? "rounded-full px-3 py-1 bg-white text-blue-800" : ""}`} onClick={() => { setFilter("top_rated"); setCurrentPage(1); }}>
                            <span className="mr-1" role="img" aria-label="fire">✨</span>Top Rated
                        </span>

                        <span className={`flex cursor-pointer ml-8  ${filter === 'upcoming' ? "rounded-full px-3 py-1 bg-white text-blue-800" : ""}`} onClick={() => { setFilter("upcoming"); setCurrentPage(1); }}>
                            <span className="mr-1" role="img" aria-label="fire">💖</span>Upcoming
                        </span>
                    </div>

                    <div className="flex">
                        <Search />
                        <Genre
                            genre={genreItems}
                            selectedGenre={selectedGenre}
                            genreChange={genreChange}
                        />
                        <Rating
                            selectedRatingOption={selectedRatingOption}
                            ratingChange={ratingChange}
                        />
                    </div>


                </div>
                <div>
                    {loading && <em>Loading ..</em>}
                </div>
                <div className="mt-8 flex flex-wrap -ml-3">
                    {!selectedRatingOption && !selectedRatingOption && items &&
                        items.map((movie, index) => (
                            <Card
                                key={movie.id}
                                id={movie.id}
                                name={movie.title}
                                image={movie.poster_path}
                                vote_average={movie.vote_average}
                                popularity={movie.popularity}
                                year={getReleaseDate(movie.release_date)}
                            />
                        ))
                    }
                    {selectedGenre !== 0 && filteredData &&
                        filteredData.map((movie, index) => (
                            <Card
                                key={movie.id}
                                id={movie.id}
                                name={movie.title}
                                image={movie.poster_path}
                                vote_average={movie.vote_average}
                                popularity={movie.popularity}
                                year={getReleaseDate(movie.release_date)}
                            />
                        ))
                    }
                    {selectedRatingOption && sortedData &&
                        sortedData.map((movie, index) => (
                            <Card
                                key={movie.id}
                                id={movie.id}
                                name={movie.title}
                                image={movie.poster_path}
                                vote_average={movie.vote_average}
                                popularity={movie.popularity}
                                year={getReleaseDate(movie.release_date)}
                            />
                        ))
                    }
                </div>
                <div>
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        forcePage={currentPage - 1}
                        breakClassName={"break-me"}
                        pageCount={100}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"flex justify-between items-center max-w-lg mx-auto mt-4"}
                        activeClassName={"bg-white text-blue-900 px-2 rounded-full"}
                    />
                </div>
            </div>
        </>
    );
}

export default Browse;