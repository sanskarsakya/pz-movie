import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function Header() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(userActions.getAll());
    // }, [dispatch]);


    return (
        <div className="col-lg-8 offset-lg-2">

            {user &&
                <div>
                    <h1>Hi {user.firstName}!</h1>
                    <p>You're logged in with React Hooks!!</p>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            }
            {/* { &&
                <div>
                    <p>Not logged in</p>
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            } */}
        </div>
    );
}

export { Header };