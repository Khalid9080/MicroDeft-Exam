import React, { useEffect, useState } from 'react';

const Display_Course = () => {
    const [courses, setCourses] = useState([]);  
    const [errorMessage, setErrorMessage] = useState(""); 

    useEffect(() => {
        const token = localStorage.getItem('authToken');  

        if (!token) {
            setErrorMessage("Authorization token is missing. Please log in.");
            return;
        }
        fetch('https://react-interview.crd4lc.easypanel.host/api/course', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())  
            .then(data => {
                console.log('API Response:', data);  
                const courses = data.data.data || [];  
                if (Array.isArray(courses)) {
                    localStorage.setItem('courses', JSON.stringify(courses));  
                    setCourses(courses);
                } else {
                    console.error('No courses found in the response data.');
                    setErrorMessage("No courses found in the response.");
                }
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setErrorMessage("Failed to fetch courses. Please try again.");
            });
    }, []);  

    return (
        <div>
            <div className='lg:w-3/4 mx-auto my-10'>
                <div className="text-center p-10">
                    <h1 className="text-5xl font-bold">Available Courses</h1>
                    <p className="py-6">
                        Browse through the available courses below. Click on a course to learn more or enroll.
                    </p>
                </div>

                
                {errorMessage && (
                    <div className="text-red-500 text-sm mt-2">
                        {errorMessage}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               
                    {courses.length > 0 ? (
                        courses.map((course, index) => (
                          
                            <div key={index} className="card bg-base-100  shadow-xl">
                                <figure>
                                    <img
                                        src="/pexels-luis-gomes-166706-546819.jpg"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <div className='flex gap-3 items-center'>   
                                        <h2 className="card-title font-bold text-xl">{course.title}</h2>
                                        <div className="badge p-3" style={{ backgroundColor: course.badge_color }}>{course.badge_text}</div>
                                    </div>
                                <div className='space-y-2'>
                                    <h1 className='font-semibold'>Instructor: {course.instructor_name}</h1>
                                    <p>{course.description}</p>
                                </div>
                                    

                                </div>
                            </div>







                        ))
                    ) : (
                        <div className="text-center text-gray-500">No courses available at the moment.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Display_Course;

/*
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

*/
