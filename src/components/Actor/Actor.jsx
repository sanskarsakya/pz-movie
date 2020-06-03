import React from "react";

function Actor({ name, image, character, job }) {
  return (
    <div data-testid="actor" style={{ width: 270, }} className="p-3 transform hover:-translate-y-2 ease-in-out duration-200 transition-translate">
      <div
        className="rounded-md overflow-hidden"
        style={{ height: 200, borderRadius: 20 }}
      // width:270
      >
        {image ? (
          <img
            className="object-cover"
            src={"https://image.tmdb.org/t/p/w185" + image}
            alt=""
          />) : (<div className="w-full h-full flex items-center justify-center" style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 1.53%, rgba(9, 9, 98, 0.8) 100%)"
          }}>No image</div>)}
      </div>
      <p data-testid="actor_name" className="mt-4 text-xl font-semibold cursor-pointer">{name}</p>
      <div
        className="mt-1 text-sm tracking-wider flex items-center"
        style={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        {character && (<p>{character}</p>)}
        {job && (<p>{job}</p>)}
      </div>
    </div>
  );
};

export default Actor;
