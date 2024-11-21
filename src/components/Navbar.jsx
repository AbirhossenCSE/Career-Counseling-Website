import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const location = useLocation(); 

    const getLinkClass = (path) => {
        if (path === '/' && location.pathname === '/') {
            return 'text-primary font-bold underline'; 
        }
        return location.pathname.startsWith(path) && path !== '/'
            ? 'text-primary font-bold underline' 
            : 'hover:text-primary';
    };

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
                        <Link to="/" className={getLinkClass('/')}>Service</Link>
                        <Link to="/profile" className={getLinkClass('/profile')}>Profile</Link>
                        <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
                        <Link to="/update" className={getLinkClass('/update')}>Update Profile</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Career</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 mx-2">
                    <Link to="/" className={`mr-2 ${getLinkClass('/')}`}>Service</Link>
                    <Link to="/profile" className={`mr-2 ${getLinkClass('/profile')}`}>My Profile</Link>
                    <Link to="/contact" className={`mr-2 ${getLinkClass('/contact')}`}>Contact Us</Link>
                    <Link to="/update" className={`mr-2 ${getLinkClass('/update')}`}>Update Profile</Link>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="relative group w-8 h-8 mr-5">
                    {user?.email ? (
                        <div className="flex flex-col items-center">
                            <img
                                className="w-8 h-8 rounded-full cursor-pointer"
                                src={user?.photoURL}
                                alt="User Profile"
                            />
                            <p className="absolute left-[-84px] bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {user?.displayName}
                            </p>
                        </div>
                    ) : (
                        <p>No User</p>
                    )}
                </div>

                {user && user?.email ? (
                    <button onClick={LogOut} className="btn btn-neutral rounded-none">
                        LogOut
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-none">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

