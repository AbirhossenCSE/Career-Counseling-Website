import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')  

        createNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                navigate('/');
            })
            .catch(err =>{
                
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            const user = result.user;
            toast.success('Successfully logged in with Google!', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/');
            setUser(user)
        })
        .catch((error) => {
            console.error('ERROR', error.message);
            toast.error('Failed to log in with Google.', {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    }


    return (
        <div className='min-h-screen flex justify-center items-center'> 
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center pt-6'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-xl">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Already Have An Account ? <Link className='text-red-500' to='/auth/login'>Login</Link> </p>

                <div>
                    <p onClick={handleGoogleSignIn} className='btn btn-ghost'>Login With Google</p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;