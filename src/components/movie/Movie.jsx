import React from 'react';

function Movie({ movie }) {

    return (
        <div to="/movie/{}" style={{ height: 200, width: 144 }} className="relative rounded overflow-hidden cursor-pointer">
            <img className="w-full h-full object-fit" src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt="ad astra" />
            <div className="w-full h-full absolute top-0 left-0" style={{ background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.75) 7.63%, rgba(13, 12, 12, 0) 20%)' }}></div>
            <div className="w-full absolute bottom-0 p-2 text-white text-center text-sm">
                <p>{movie.title}</p>
            </div>
        </div>
     
    );
}

export { Movie };