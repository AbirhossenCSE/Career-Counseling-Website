import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Register = () => {
    const { createNewUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        // Password validation logic
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            alert('Password must have Uppercase, Lowercase letter & must be at least 6 characters.');
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You have successfully created an account.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false, 
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have successfully logged in with Google.',
                    icon: 'success',
                    timer: 2000, 
                    showConfirmButton: false, 
                });

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                    setUser(user);
                }, 2000);
            })
            .catch((error) => {
                console.error('ERROR', error.message);

                Swal.fire({
                    title: 'Login Failed',
                    text: 'Something went wrong while logging in with Google.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            });
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center pt-6'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
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
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered w-full"
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaRegEye />
                                ) : (
                                    <FaEyeSlash />
                                )}
                            </button>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-xl">Register</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Already Have An Account ? <Link className='text-red-500' to='/auth/login'>Login</Link>
                </p>

                <div className='w-6/6 mx-auto'>
                    <p onClick={handleGoogleSignIn} className='btn btn-ghost'>Login With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
