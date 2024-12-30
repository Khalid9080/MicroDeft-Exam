import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return; 
        } else {
            setErrorMessage("");
        }

        const RegisteredUser = { name, email, password };
        fetch('https://react-interview.crd4lc.easypanel.host/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(RegisteredUser), 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success Post Registered data to API:', data);
            navigate('/login'); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen font-mulish">
                <div className="card bg-purple-200 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-center text-3xl font-bold leading-snug pb-3 font-sumana '>Register Page</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">
                                {errorMessage}
                            </div>
                        )}

                        <div className="form-control mt-4">
                            <button className="btn bg-black text-white hover:text-white">Register</button>
                        </div>

                        <h1 className='mt-2'>Already have an account? Go to <NavLink to="/login"><span className='text-red-500'>Login.</span></NavLink></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
