import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find((service) => service.id === parseInt(id));

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <div className="details-page">
            <img src={service.image} alt={service.serviceName} />
            <h1>{service.serviceName}</h1>
            <p>Category: {service.category}</p>
            <p>Pricing: {service.pricing}</p>
            <p>Counselor: {service.counselorName}</p>
            <p>Rating: {service.rating}</p>
        </div>
    );
};

export default Details;

