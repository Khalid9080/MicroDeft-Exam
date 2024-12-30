import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='bg-purple-200'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <div className='min-h-[calc(100vh-550px)]'></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;