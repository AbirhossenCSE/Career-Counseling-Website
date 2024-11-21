import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Footer from './Footer';


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            <div className="card bg-base-100 w-96 shadow-xl mx-auto top-40">
                <figure className="px-10 pt-10">
                    <img
                        src={user?.photoURL}
                        alt="Photo"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    
                </div>
            </div>

            <footer className='mt-64'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Profile;