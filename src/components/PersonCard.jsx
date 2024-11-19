import React from 'react';

const PersonCard = ({ person }) => {
    const { serviceName, category, pricing, counselorName, rating, learnMore } = person;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{category}</p>
                    <p>{pricing}</p>
                    <p>{counselorName}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{learnMore}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonCard;