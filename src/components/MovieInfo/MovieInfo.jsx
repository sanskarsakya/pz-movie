import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { watchListActions } from "../../actions/watchList.actions";
import { history } from "../../helpers";

export const MovieInfo = ({ movie }) => {
  const dispatch = useDispatch();


  function isExist(watchlist, id) {
    return watchlist.filter(wl => wl.id === id).length ? true : false;
  }

  // SELECTORS
  const isInWatchList = useSelector(state =>
    state.watchlist ? isExist(state.watchlist.items, movie.id) : false
  );
  const user = useSelector(state => state.authentication.user);

  function addToWatchList(movie, isInWatchList) {
    if (!user) {
      history.push('/login');
      return;
    }
    if (isInWatchList) {
      dispatch(watchListActions.removeFromWatchList(movie));
    } else {
      console.log(movie);
      dispatch(watchListActions.addToWatchList(movie));
    }
  }

  return (
    <>
      {/* start movie info section */}
      <div className="mt-12 flex items-start">
        {/* image */}
        <div
          style={{
            width: 171,
            maxHeight: 276,
            borderRadius: 20,
            borderColor: "#8787D7"
          }}
          className="overflow-hidden flex-shrink-0 border "
        >
          <img
            className="w-full h-full object-cover"
            src={
              "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
              movie.poster_path
            }
            alt=""
          />
        </div>

        <div className="ml-10">
          <h1 className="font-bold text-5xl">{movie.title}</h1>
          <p className="mt-1 font-semibold text-lg max-w-xl">{movie.tagline}</p>
          <p className="mt-5 text-lg max-w-xl">{movie.overview}</p>
          <span className="flex items-center mt-2">
            <p className="text-xl italic ">Released: </p>
            <p className="ml-1 text-xl ">{movie.release_date}</p>
          </span>
          <span className="flex items-center mt-2">
            <p className="text-xl italic ">Duration: </p>
            <p className="ml-1 text-xl ">{movie.runtime} mins</p>
          </span>
          <span className="flex items-center mt-2">
            <p className="text-xl italic ">Budget: </p>
            <p className="ml-1 text-xl ">${movie.budget}</p>
          </span>
          <span className="flex items-center mt-3">
            <div className="">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 2.33325L17.6052 9.63659L25.6668 10.8149L19.8335 16.4966L21.2102 24.5233L14.0002 20.7316L6.79016 24.5233L8.16683 16.4966L2.3335 10.8149L10.3952 9.63659L14.0002 2.33325Z"
                  fill="#FF6F41"
                />
              </svg>
            </div>
            <div className="flex items-center">
            <p className="ml-3 text-xl italic font-semibold">
              {movie.vote_average} ({movie.vote_count})
            </p>
              <button
                className="px-4 py-2 text-xs ml-4 rounded-full font-semibold"
                onClick={() => addToWatchList(movie, isInWatchList)}
                style={{ background: "#FF5F2C" }}
              >
                {isInWatchList ? "REMOVE TO WATCHLIST" : "ADD TO WATCHLIST"}
              </button>
            </div>
          </span>

        </div>
      </div>
      {/* end movie info section */}
    </>
  );

};
