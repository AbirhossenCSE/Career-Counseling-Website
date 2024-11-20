import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto p-2'>
                <Navbar></Navbar>
            </nav>
            
            <header>
                <Header></Header>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className='w-11/12 mx-auto mt-5'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;