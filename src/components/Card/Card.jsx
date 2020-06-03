
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, name, image, vote_average, popularity, year }) {
  return (
    <div className="w-1/5 p-3 transform hover:-translate-y-2 ease-in-out duration-200 transition-translate">
      <div
        className="overflow-hidden"
        style={{ height: 200, borderRadius: 20 }}
      // width:270
      >
        <img
          className="object-cover"
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt=""
        />
      </div>
      <Link to={"/movie/" + id}>
        <p  data-testid="movie_name"  className="mt-5 text-xl font-semibold cursor-pointer">{name}</p>
      </Link>
      <div
        className="mt-1 text-sm tracking-wider flex items-center"
        style={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        <span className="mr-6">{year}</span>
        <p>Adventure, Comedy</p>
      </div>
      <div className="mt-3 text-sm tracking-wider flex items-center">
        <svg
          className="mr-2"
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.333l2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.847l-4.12 2.166.787-4.586L1.333 6.18l4.607-.673L8 1.333z"
            fill="#FF6F41"
          />
        </svg>
        <p className="mr-1">{vote_average}</p>
        <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>({popularity})</p>
      </div>
    </div>
  );
};

export default Card;