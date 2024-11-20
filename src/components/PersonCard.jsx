import React from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({ person }) => {
    const { serviceName, category, pricing, counselorName, rating, learnMore, image } = person;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        className='w-full p-2 h-[250px] rounded-sm'
                        src={person.image}
                        alt="councelor" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {serviceName}</h2>
                    <p>{category}</p>
                    <p>$ {pricing}</p>
                    <p>Name: {counselorName}</p>
                    <p>Ratting {rating}</p>
                    <div className="card-actions justify-end">
                    <Link className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;