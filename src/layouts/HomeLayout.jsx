import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto p-2'>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default HomeLayout;