import React from 'react';

import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export const Navbar = (props) => {

    const user = useSelector(state => state.authentication.user);


    return (
        <div className=" w-full px-10 py-3" style={{ boxShadow: '0 14px 27px #16181e', backgroundColor: '#20209A' }} >
            <div className="flex items-i max-w-6xl mx-auto justify-end">
                <Link className="mr-3" to={"/movie"}>
                    <p className="text-white cursor-pointer">Home</p>
                </Link>
                {user && (
                    <>
                        <Link className="mr-3" to={"/watchlist"}>
                            <p className="text-white cursor-pointer">watchlist</p>
                        </Link>
                        <Link to="/login"> <p className="text-white cursor-pointer">Logout</p></Link>
                    </>
                )}
                {!user && (
                    <>
                        <Link to={"/login"}>
                            <p className="text-white cursor-pointer">Login</p>
                        </Link>
                    </>
                )}



            </div>
        </div>
    );
}
