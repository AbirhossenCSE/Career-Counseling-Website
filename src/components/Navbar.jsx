import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
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
                        <Link>Home</Link>
                        <Link>Service</Link>
                        <Link>Profile</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Career Counseling Website</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 mx-2">
                    <Link to='/' className='mr-2'>Home</Link>
                    <Link className='mr-2'>Service</Link>
                    <Link>Profile</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <p className=''>{user?.email}</p>
                <Link to='/auth/login'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;