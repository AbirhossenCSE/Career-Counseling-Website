import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Career from '../pages/Career';



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to={'/career'}></Navigate>
            },
            {
                path: '/career',
                element: <Career></Career>,
                loader: () => fetch('career.json')
            }
        ]
       
    },
    

])


export default router;








// children: [
//     {
//         path: '/career',
//         element: <Career></Career>,
//     },
// ],

// const mainDataLoader = async ()=>{
//     const response = await fetch('career.json')
//     const data = await response.json()
//     return data;
// }