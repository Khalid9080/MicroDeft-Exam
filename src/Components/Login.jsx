import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;
        } else {
            setErrorMessage("");
        }

        setLoading(true); 
        fetch('https://react-interview.crd4lc.easypanel.host/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false); 

            if (data.status && data.data.token) {
                localStorage.setItem('authToken', data.data.token);

                console.log('Login Successful:', data);
                navigate('/add_course');
            } else {
                setErrorMessage(data.status_message || 'Login failed. Please try again.');
            }
        })
        .catch(error => {
            setLoading(false);
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        });
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen font-mulish">
                <div className="card bg-purple-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-center text-3xl font-bold leading-snug pb-3 font-sumana '>Login Page</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
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
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">
                                {errorMessage}
                            </div>
                        )}

                        <div className="form-control mt-5">
                            <button
                                className="btn bg-black text-white hover:text-black"
                                disabled={loading} 
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>

                        <h1 className='mt-2'>
                            Do not have an account? Go to <NavLink to="/register"><span className='text-red-500'>Register.</span></NavLink>
                        </h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
