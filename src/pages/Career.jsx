import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PersonCard from '../components/PersonCard';


const Career = () => {
    const persons = useLoaderData();
    console.log('Data', persons);
    
    return (
        <div className='w-11/12 mx-auto'>
            <h2>Councelor {persons.length}</h2>
            <div className='grid grid-cols-3'>
                {persons.map((person) => (
                   <PersonCard key={person.id} person={person}></PersonCard>
                ))}
            </div>
            
        </div>
    );
};

export default Career;