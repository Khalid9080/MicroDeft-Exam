import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);  // Toggle between true and false
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen font-mulish">
                <div className="card bg-purple-200  w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className='text-center text-3xl font-bold leading-snug '> Login page</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className='btn btn-xs absolute right-3 top-12'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                            <label className="label">
                                <a className="text-sm link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-5">
                            <button className="btn bg-black text-white hover:text-black">Login</button>

                            
                        </div>

                        <h1 className='mt-2'>
                            Do not have an account? Go to <NavLink to="/register"><span className='text-red-500'>Register.</span></NavLink>
                        </h1>
                    </form>
                </div>
            </div>

            {/* Toast container should be placed here for notifications */}
         
        </div>
    );
};

export default Login;