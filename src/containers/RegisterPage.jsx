
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

export const RegisterPage = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }
    return (
        <div className="container mx-auto h-full flex justify-center items-center mt-8">
            <div className="w-1/3">
                <form name="form" onSubmit={handleSubmit}>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="font-bold text-gray-700 block mb-2">First name</label>
                            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} classNameName={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your firstName" />
                            {submitted && !user.firstName && 
                                <div classNameName="invalid-feedback">First name is required</div>
                            }
                        </div>
                        
                        <div className="mb-4">
                            <label className="font-bold text-gray-700 block mb-2">Last name</label>
                            <input type="text" name="lastName" value={user.lastname} onChange={handleChange} classNameName={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                            {submitted && !user.lastName &&
                                <div classNameName="invalid-feedback">Last name is required</div>
                            }
                        </div>
                        
                        <div className="mb-4">
                            <label className="font-bold text-gray-700 block mb-2">Username</label>
                            <input type="text" name="username" value={user.username} onChange={handleChange} classNameName={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                            {submitted && !user.username &&
                                <div classNameName="invalid-feedback">Username is required</div>
                            }
                        </div>

                        <div className="mb-4">
                            <label className="font-bold text-gray-700 block mb-2">Password</label>
                            <input type="password" name="password" value={user.password} onChange={handleChange} classNameName={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
                            {submitted && !user.password &&
                                <div classNameName="invalid-feedback">Password is required</div>
                            }
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-teal text-white font-bold py-2 px-4 rounded" >
                                {registering && <span classNameName="spinner-border spinner-border-sm mr-1"></span>}
                     Login
                </button>
                        </div>

                    </div>
                    <div className="text-center">
                        <Link to="/register" classNameName="btn btn-link">
                            <p className="text-grey-dark text-sm text-white">Don't have an account? <a href="#" className="no-underline text-blue font-bold">Create an Account</a>.</p>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}
