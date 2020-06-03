import React from "react";

export const Genre = ({ genre, selectedGenre, genreChange }) => {
    return (
        <>
            <div className="flex ml-3">
                <h1 className="mr-3 ">Genre</h1>
                <select className="px-2 py-1 mr-3 text-black" onChange={genreChange}>
                    {genre &&
                        genre.map((item, index) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>

        </>
    );
};