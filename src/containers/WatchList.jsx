import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../actions/movie.actions";

import { Trending } from "../components/Trending/Trending";

export const WatchList = props => {
    // SELECTORS
    const { items, error, loading } = useSelector(state => state.watchlist);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchWatchList();
    }, [])



    function fetchWatchList() {
        dispatch(movieActions.getTrending());
    }

    return (
        <div
            className="w-full h-full"
            style={{ backgroundColor: "#20209A" }}
        >
            <div className="text-white max-w-6xl mx-auto">
                <div>
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
                </div>
                <Trending title={"Watch List"} trending={items} />

            </div>
        </div>
    );

};
