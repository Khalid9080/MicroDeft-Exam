import React, { useState } from 'react';

const Add_Course = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const form = e.target;  

        const title = form.title.value;  
        const description = form.description.value;  
        const badge_text = form.badge_text.value;  
        const badge_color = form.badge_color.value;  
        const instructor_name = form.instructor_name.value;  
        
        if (!title || !description || !badge_text || !badge_color || !instructor_name) {
            setErrorMessage("Please fill out all fields.");
            return; 
        } else {
            setErrorMessage(""); 
        }

        const token = localStorage.getItem('authToken');

        if (!token) {
            setErrorMessage("Authorization token is missing. Please log in.");
            return;
        }

        const courseData = {
            title,
            description,
            badge_text,
            badge_color,
            instructor_name
        };

        fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(courseData) 
        })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => {
            console.error('Error:', error);
            setErrorMessage("Failed to add course. Please try again.");
        });
    };

    return (
        <div>
            <div className='lg:w-3/4 mx-auto my-10'>
                <div className="text-center p-10">
                    <h1 className="text-5xl font-bold">Add Your Course</h1>
                    <p className="py-6">
                        Crowdfunding is a method of raising capital through the collective effort of friends, family, customers, and individual investors. This approach taps into the collective efforts of a large pool of individuals—primarily online via social media and crowdfunding platforms—and leverages their networks for greater reach.
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Campaign Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Campaign name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="instructor_name"
                                    placeholder="Instructor name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-5'>
                            

                        <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Badge Color</span>
                                </label>
                                <input
                                    type="text"
                                    name="badge_color"
                                    placeholder="#ff0000"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Badge Text</span>
                                </label>
                                <input
                                    type="text"
                                    name="badge_text"
                                    placeholder="Badge text"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-5'>
                        

                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Describe the course"
                                    required
                                />
                            </div>
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">
                                {errorMessage}
                            </div>
                        )}

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Add Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add_Course;

