import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

const ContactUs = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold mt-6 text-center'>Contact us</h2>
                <h3 className='text-2xl font-bold text-gray-400 m-3 text-center'>Start the conversation to established good relationship and business.</h3>

                <div className='flex gap-5 justify-center mt-8'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className=" px-10 pt-10">
                            <MdEmail size={56} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <h2 className='font-bold'>Email</h2>
                            <p>{user?.email}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary mt-2">Contact Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure className=" px-10 pt-10">
                            <FaPhone size={56} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <h2 className='font-bold'>Phone</h2>
                            <p>0123456789</p>
                            <div className="card-actions">
                                <button className="btn btn-primary mt-2">Contact Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='mt-6'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ContactUs;