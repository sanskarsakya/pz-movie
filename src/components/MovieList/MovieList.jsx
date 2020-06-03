import React from 'react';

import { Movie } from "../movie/Movie";

function MovieList({ title, movies }) {

    return (
        <div className="w-full py-4" style={{backgroundColor:'#1E2129'}}>
            <div className="container mx-auto flex justify-between items-center mb-6">
                <p className="font-bold text-xl leading-5" style={{ color: '#00ACC1' }}>{title}</p>
                <div className="flex items-center cursor-pointer text-gray-600 hover:text-white">
                    <p className="text-sm">View All </p>
                    <svg className="ml-1" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0L0.442505 1.0575L3.8775 4.5L0.442505 7.9425L1.5 9L6 4.5L1.5 0Z" fill="#8E95A5" />
                    </svg>
                </div>
            </div>

            {movies.loading && <em>Loading movies...</em>}
            {movies.error && <span className="text-danger">ERROR: {movies.error}</span>}
            <div>
                {movies.items &&
                    <ul className="container flex flex-wrap justify-between mx-auto">
                        {movies.items.map((movie, index) =>
                            <div key={movie.id} className="mb-5">
                                <Movie movie={movie}></Movie>
                            </div>
                        )}
                    </ul>
                }
            </div>


        </div>
    );
}

export { MovieList };