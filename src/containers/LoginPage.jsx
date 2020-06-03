import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        // <div className="col-lg-8 offset-lg-2">
        //     <h2>Login</h2>
        //     <form name="form" onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label>Username</label>
        //             <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
        //             {submitted && !username &&
        //                 <div className="invalid-feedback">Username is required</div>
        //             }
        //         </div>
        //         <div className="form-group">
        //             <label>Password</label>
        //             <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
        // {submitted && !password &&
        //     <div className="invalid-feedback">Password is required</div>
        // }
        //         </div>
        //         <div className="form-group">
        //             <button className="btn btn-primary">
        //                 {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
        //                 Login
        //             </button>
        //             <Link to="/register" className="btn btn-link">Register</Link>
        //         </div>
        //     </form>
        // </div>
        <div class="container mx-auto h-full flex justify-center items-center">
            <div class="w-1/3">
                <form name="form" onSubmit={handleSubmit}>
                    <h1 class="font-hairline mb-6 text-center">Login to our Website</h1>
                    <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">Username</label>
                            <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
                            {submitted && !username &&
                                <div className="invalid-feedback">Username is required</div>
                            }
                        </div>

                        <div class="mb-4">
                            <label class="font-bold text-gray-700 block mb-2">Password</label>
                            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
                            {submitted && !password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-teal text-white font-bold py-2 px-4 rounded" >
                                {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
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

export { LoginPage };