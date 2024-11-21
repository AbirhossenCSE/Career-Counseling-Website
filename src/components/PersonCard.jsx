import React from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({ person }) => {
    const { serviceName, category, pricing, counselorName, rating, id } = person;

    return (
        <div className="mx-auto p-2">
            <div className="card bg-gray-200 w-96 h-[500px] flex flex-col justify-between">
                <figure className="h-[250px]">
                    <img
                        className="w-full h-full object-cover p-3 rounded-xl"
                        src={person.image}
                        alt="counselor"
                    />
                </figure>
                <div className="card-body flex flex-col">
                    <h2 className="text-2xl font-bold text-center">{serviceName}</h2>
                    <p>
                        <span className="font-bold">Category:</span> {category}
                    </p>
                    <p>
                        <span className="font-bold">Pricing:</span> ${pricing}
                    </p>
                    <p>
                        <span className="font-bold">Name:</span> {counselorName}
                    </p>
                    <p>
                        <span className="font-bold">Rating:</span> {rating}
                    </p>
                    <div className="mt-auto">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-neutral w-full">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;

