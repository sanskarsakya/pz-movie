
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
        // <div className="col-lg-8 offset-lg-2">
        //     <h2>Register</h2>
        //     <form name="form" onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label>First Name</label>
        //             <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
        //             {submitted && !user.firstName &&
        //                 <div className="invalid-feedback">First Name is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <label>Last Name</label>
        //             <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
        //             {submitted && !user.lastName &&
        //                 <div className="invalid-feedback">Last Name is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <label>Username</label>
        //             <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
        //             {submitted && !user.username &&
        //                 <div className="invalid-feedback">Username is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <label>Password</label>
        //             <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
        //             {submitted && !user.password &&
        //                 <div className="invalid-feedback">Password is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <button className="btn btn-primary">
        //                 {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
        //                 Register
        //             </button>
        //             <Link to="/login" className="btn btn-link">Cancel</Link>
        //         </div>
        //     </form>
        // </div>
        <div class="container mx-auto h-full flex justify-center items-center">
            <div class="w-1/3">
                <form name="form" onSubmit={handleSubmit}>
                    <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
                    <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">First name</label>
                            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your firstName" />
                            {submitted && !user.firstName && 
                                <div className="invalid-feedback">First name is required</div>
                            }
                        </div>
                        
                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">Last name</label>
                            <input type="text" name="lastName" value={user.lastname} onChange={handleChange} className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                            {submitted && !user.lastName &&
                                <div className="invalid-feedback">Last name is required</div>
                            }
                        </div>
                        
                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">Username</label>
                            <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                            {submitted && !user.username &&
                                <div className="invalid-feedback">Username is required</div>
                            }
                        </div>

                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">Password</label>
                            <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
                            {submitted && !user.password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-teal text-white font-bold py-2 px-4 rounded" >
                                {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                     Login
                </button>
                        </div>

                    </div>
                    <div class="text-center">
                        <Link to="/register" className="btn btn-link">
                            <p class="text-grey-dark text-sm text-white">Don't have an account? <a href="#" class="no-underline text-blue font-bold">Create an Account</a>.</p>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}
