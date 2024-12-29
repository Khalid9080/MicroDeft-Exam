import React, { useState } from 'react';

const Add_Course = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent form from reloading the page

        const form = e.target;  // Access the form element directly

        const title = form.title.value;  // Get the title field value
        const description = form.description.value;  // Get the description field value
        const badge_text = form.badge_text.value;  // Get the badge text field value
        const badge_color = form.badge_color.value;  // Get the badge color field value
        const instructor_name = form.instructor_name.value;  // Get the instructor name field value

        // Validate the form data (e.g., check if fields are empty)
        if (!title || !description || !badge_text || !badge_color || !instructor_name) {
            setErrorMessage("Please fill out all fields.");
            return;  // Prevent form submission if validation fails
        } else {
            setErrorMessage("");  // Clear previous error message
        }

        // Authorization token (assumed to be stored in localStorage after login)
        const token = localStorage.getItem('authToken');

        if (!token) {
            setErrorMessage("Authorization token is missing. Please log in.");
            return;
        }

        // Prepare the data to be sent to the API
        const courseData = {
            title,
            description,
            badge_text,
            badge_color,
            instructor_name
        };

        // Send the form data to the API using fetch
        fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Add the token to the Authorization header
            },
            body: JSON.stringify(courseData)  // Send the form data as a JSON object
        })
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            console.log('Course added successfully:', data);
            // Handle success (e.g., redirect or show a success message)
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

                        {/* Display error message */}
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



/*


import React, { useState } from 'react';

const Add_Course = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        badge_text: '',
        badge_color: '',
        instructor_name: ''
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form data (for example, check if all fields are filled)
        const { title, description, badge_text, badge_color, instructor_name } = formData;

        if (!title || !description || !badge_text || !badge_color || !instructor_name) {
            setErrorMessage("Please fill out all fields.");
            return;
        } else {
            setErrorMessage("");  // Clear any previous error messages
        }

        // Authorization token (get from localStorage or context)
        const token = localStorage.getItem('authToken');  // Adjust this as needed

        if (!token) {
            setErrorMessage("Authorization token is missing. Please log in.");
            return;
        }

        // Prepare the data to be sent in the POST request
        const courseData = {
            title,
            description,
            badge_text,
            badge_color,
            instructor_name
        };

        // Send the form data to the API using fetch
        fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Pass token in the Authorization header
            },
            body: JSON.stringify(courseData) // Convert form data to JSON
        })
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log('Course added successfully:', data);
            // Handle success, maybe redirect to another page or show a success message
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error, show an error message to the user
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
                                    value={formData.title}
                                    onChange={handleChange}
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
                                    value={formData.instructor_name}
                                    onChange={handleChange}
                                    placeholder="Instructor name"
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
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered h-24"
                                    placeholder="Describe the course"
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
                                    value={formData.badge_text}
                                    onChange={handleChange}
                                    placeholder="Badge text"
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
                                    value={formData.badge_color}
                                    onChange={handleChange}
                                    placeholder="#ff0000"
                                    className="input input-bordered"
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




*/