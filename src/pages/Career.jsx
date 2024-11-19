import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PersonCard from '../components/PersonCard';


const Career = () => {
    const persons = useLoaderData();
    console.log('Data', persons);
    
    return (
        <div>
            <h2>Abir</h2>
            <h2>Data {persons.length}</h2>
            <div>
                {persons.map((person) => (
                   <PersonCard key={person.id} person={person}></PersonCard>
                ))}
            </div>
            
        </div>
    );
};

export default Career;