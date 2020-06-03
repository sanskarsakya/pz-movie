import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../actions/movie.actions";


import Browse from "../components/Browse/Browse";

import { Trending } from "../components/Trending/Trending";

export const MoviePage = props => {
  // SELECTORS
  const { items: trendingItems, error: trendingError, loading: trendingLoading } = useSelector(state => state.trending);

  const dispatch = useDispatch();


  useEffect(() => {
    fetchTrending();
  }, [])



  function fetchTrending() {
    dispatch(movieActions.getTrending());
  }

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: "#20209A" }}
    >
      <div className="text-white max-w-6xl mx-auto">
        {/* <div>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
        <Trending trending={trendingItems} />
        <Browse />

      </div>
    </div>
  );

  // return (
  //   <div className="p-5">
  //     <pre>{JSON.stringify(trendingItems)}</pre>
  //     <h1 className="mb-2">Movie Page</h1>
  //     <div className="mb-6 flex items-center">
  //       <GenreComponent
  //         genre={genre}
  //         selectedGenre={selectedGenre}
  //         genreChange={genreChange}
  //       />

  //       <RatingComponent
  //         selectedRatingOption={selectedRatingOption}
  //         ratingChange={ratingChange}
  //       />
  //     </div>

  //     <div className="flex mb-4">
  //       <Search />
  //       <p className="ml-2">{text}</p>
  //     </div>

  //     <div className="flex mb-6">
  //       <button
  //         className="px-2 py-1 bg-red-200 rounded mr-2"
  //         onClick={() => {
  //           setFilter("now_playing");
  //           setCurrentPage(1);
  //         }}
  //       >
  //         Now Playing
  //       </button>
  //       <button
  //         className="px-2 py-1 bg-red-200 rounded mr-2"
  //         onClick={() => {
  //           setFilter("popular");
  //         }}
  //       >
  //         Popular
  //       </button>
  //       <button
  //         className="px-2 py-1 bg-red-200 rounded mr-2"
  //         onClick={() => {
  //           setFilter("top_rated");
  //         }}
  //       >
  //         Top Rated
  //       </button>
  //       <button
  //         className="px-2 py-1 bg-red-200 rounded mr-2"
  //         onClick={() => {
  //           setFilter("upcoming");
  //         }}
  //       >
  //         Upcoming
  //       </button>
  //     </div>
  //     {loading && <em>Loading ..</em>}
  //     {error && <span className="text-danger">ERROR: {error}</span>}
  //     {!selectedRatingOption && !selectedRatingOption && items && (
  //       <div className="flex flex-wrap">
  //         {items.map((movie, index) => (
  //           <div key={movie.id} className="mb-2 mr-2">
  //             <MovieCard movie={movie} />
  //           </div>
  //         ))}
  //       </div>
  //     )}

  //     {selectedGenre !== 0 && filteredData && (
  //       <div className="flex flex-wrap">
  //         {filteredData.map((movie, index) => (
  //           <div key={movie.id} className="mb-2 mr-2">
  //             <MovieCard movie={movie} />
  //           </div>
  //         ))}
  //       </div>
  //     )}

  //     {selectedRatingOption && sortedData && (
  //       <div className="flex flex-wrap">
  //         {sortedData.map((movie, index) => (
  //           <div key={movie.id} className="mb-2 mr-2">
  //             <MovieCard movie={movie} />
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //     <ReactPaginate
  //       previousLabel={"prev"}
  //       nextLabel={"next"}
  //       breakLabel={"..."}
  //       forcePage={currentPage - 1}
  //       breakClassName={"break-me"}
  //       pageCount={100}
  //       marginPagesDisplayed={2}
  //       pageRangeDisplayed={5}
  //       onPageChange={handlePageClick}
  //       containerClassName={"pagination"}
  //       subContainerClassName={"pages pagination"}
  //       activeClassName={"active"}
  //     />
  //   </div>
  // );
};
