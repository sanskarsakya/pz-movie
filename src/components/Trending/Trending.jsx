import React from "react";
import { getReleaseDate } from "../../helpers/util";
import Card from "../Card/Card";
import { Empty } from "../Emplty/Empty";

export const Trending = ({ title = "Trending", trending, showMore = false }) => {
    return (
        <>
            <div className="flex justify-between items-center  mt-12">
                <h1 className="font-bold text-4xl mr-2">{title}</h1>
                {showMore && (<div className="flex items-center">
                    <span className="text-base">MORE</span>
                    <svg
                        width="18"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25"
                            stroke="#fff"
                            strokWwidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                )}
            </div>

            {!trending.length && (<Empty />)}

            <div className="mt-8 max-w-6xl mx-auto">
                {trending && (
                    <div className="-ml-3 flex justify-between flex-wrap mt-5">
                        {trending
                            .map((movie, index) => (
                                <Card
                                    key={movie.id}
                                    id={movie.id}
                                    name={movie.title}
                                    image={movie.poster_path}
                                    vote_average={movie.vote_average}
                                    popularity={movie.popularity}
                                    year={getReleaseDate(movie.release_date)}
                                />
                            ))}
                    </div>
                )}
            </div>
        </>
    )
}