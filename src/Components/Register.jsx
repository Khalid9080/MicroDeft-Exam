import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");  // State to hold error message

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation (minimum 8 characters)
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters.");
            return;  // Prevent form submission
        } else {
            setErrorMessage("");  // Clear any previous error messages
        }

        const RegisteredUser = { name, email, password };

        // Sending data to the API using fetch
        fetch('https://react-interview.crd4lc.easypanel.host/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(RegisteredUser), // Convert object to JSON string
        })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log('Success Post Registered data to API:', data);
            // Handle success, maybe redirect or show a success message
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, maybe show an error message to the user
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

                        {/* Show error message if password is less than 8 characters */}
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
