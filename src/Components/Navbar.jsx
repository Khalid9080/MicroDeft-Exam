import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const link1 = (
        <div className="font-semibold space-x-2 flex">
            <li><NavLink to="/add_course" className="text-base">Add Course</NavLink></li>
            <li><NavLink to="/display_course" className="text-base">Display Course</NavLink></li>
        
        </div>
    );
    const link2 = (
        <div className="font-semibold space-x-2 flex">
            <li><NavLink to="/login" className="text-base">Login</NavLink></li>
            <li><NavLink to="/" className="text-base">Register</NavLink></li>
        </div>
    );

    
    return (
        <div className="navbar bg-purple-200 container mx-auto p-8  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link1}
      </ul>
    </div>
    <a className="font-bold text-3xl">Course Selection</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link1}
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
      {link2}
    </ul>
  </div>
</div>
    );
};

export default Navbar;