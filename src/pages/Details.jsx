import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const person = useLoaderData(); // Get the data from the loader

    const { serviceName, category, pricing, counselorName, rating, image } = person;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto mt-10">
            <figure>
                <img
                    className="w-full p-2 h-[250px] rounded-sm"
                    src={image}
                    alt="counselor"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Category: {category}</p>
                <p>Pricing: $ {pricing}</p>
                <p>Counselor: {counselorName}</p>
                <p>Rating: {rating}</p>
                <Link to='/'>
                    <button className='btn btn-neutral'>Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;


