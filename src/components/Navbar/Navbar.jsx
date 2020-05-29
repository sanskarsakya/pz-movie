import React from 'react';
import logo from './logo.png';

import { Link } from "../shared/Link/Link";
import { Search } from "../shared/Search/Search";

function Navbar(props) {

    // style={{boxShadow: '0px 14px 4px rgba(22, 24, 30, 0.25)'}}
    return (
        <div className="w-full px-10 py-3 flex justify-between" style={{ boxShadow: '0 14px 27px #16181e', backgroundColor: '#1E2129' }} >
            <img className="" style={{ height: 40, width: 138 }} src={logo} alt="" />
            <div className="flex items-center">
                <Link text="Home"></Link>
                <Link text="Login"></Link>
                <div className="ml-5">
                    <Search text="Home"></Search>
                </div>
            </div>
        </div>
    );
}

export { Navbar };