import React from "react";

function Actor({ name, image, character }) {
  return (
    <div data-testid="actor" className="w-1/5 p-3 transform hover:-translate-y-2 ease-in-out duration-200 transition-translate">
      <div
        className="rounded-md overflow-hidden"
        style={{ height: 200, borderRadius: 20 }}
      // width:270
      >
        <img
          className="object-cover"
          src={"https://image.tmdb.org/t/p/w185" + image}
          alt=""
        />
      </div>
      <p data-testid="actor_name" className="mt-4 text-xl font-semibold cursor-pointer">{name}</p>
      <div
        className="mt-1 text-sm tracking-wider flex items-center"
        style={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        <p>{character}</p>
      </div>
    </div>
  );
};

export default Actor;
