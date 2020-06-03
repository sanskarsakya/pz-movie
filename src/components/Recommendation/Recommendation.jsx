import React from "react";
import { getReleaseDate } from "../../helpers/util";
import Card from "../Card/Card";

export const Recommendation = ({ items }) => {
  return (
    <>
      <div className="mt-12">
        <h1 className="font-semibold text-3xl tracking-wider mr-2">
          Recommendations
        </h1>
        {items && (
          <div className="-ml-3 flex justify-between flex-wrap mt-5">
            {items.map((movie, index) => (
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
  );
};

