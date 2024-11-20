import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Career from '../pages/Career';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';



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
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
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