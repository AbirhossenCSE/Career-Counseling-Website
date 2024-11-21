import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Details = () => {
    const person = useLoaderData();

    const { serviceName, category, pricing, counselorName, rating, image, details } = person;

    return (

        <div>
            <nav className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <div className="card bg-base-100 w-6/12 shadow-xl mx-auto mt-10">
                <figure>
                    <img
                        className="w-full p-2 h-[350px] rounded-xl"
                        src={image}
                        alt="counselor"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{serviceName}</h2>
                    <p><span className='font-bold'>Category:</span> {category}</p>
                    <p><span className='font-bold'>Pricing: </span> ${pricing}</p>
                    <p><span className='font-bold'>Name:</span> {counselorName}</p>
                    <p><span className='font-bold'>Rating:</span> {rating}</p>
                    <p><span className='font-bold'>Details:</span> {details}</p>
                    <Link to='/'>
                        <button className='btn btn-neutral'>Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;


