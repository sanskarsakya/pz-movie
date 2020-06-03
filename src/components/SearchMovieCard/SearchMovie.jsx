import React from 'react';

import { Link } from "../shared/Link/Link";

function SearchMovie({ movie }) {

    return (
        <div className="flex p-4 text-xs cursor-pointer w-full" >
            <img style={{width:32, height:50}} className="mr-2 object-fit" src="https://image.tmdb.org/t/p/w300/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="asdf" />
            <div style={{color: '#8E8E89'}}>
                <p>Term Life</p>
                <div className="flex">
                    <p>IMDB:</p>
                    <p style={{color: '#14AEC1'}}>5.5</p>
                    <p>2016</p>
                </div>
                <p>Drama, Cinema</p>
            </div>
        </div>
    );
}

export { SearchMovie };