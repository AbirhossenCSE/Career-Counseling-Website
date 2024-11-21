import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PersonCard from '../components/PersonCard';
import Details from './Details';


const Career = () => {
    const persons = useLoaderData();




    return (
        <div className='w-11/12 mx-auto mt-5'>
            <div className='grid md:grid-cols-3'>
                {persons.map((person) => (
                    <PersonCard key={person.id} person={person}></PersonCard>
                ))}
            </div>

        </div>
    );
};

export default Career;