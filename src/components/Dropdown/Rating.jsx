import React from "react";

export const Rating = ({ selectedRatingOption, ratingChange }) => {
    return (
      <>
      <div className="flex">
      <h1 className="mr-3">Rating sort</h1>
        <select className="px-2 py-1 mr-3 text-black" onChange={ratingChange}>
          <option> Highest </option>
          <option> Lowest </option>
        </select>
      </div>
      
      </>
    );
  };