import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have successfully logged into your account.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Login Failed',
                    text: error.message || 'Invalid email or password. Please try again!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);

                Swal.fire({
                    title: 'Login Successful!',
                    text: 'You have successfully logged in with Google.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Google Login Failed',
                    text: error.message || 'Unable to log in with Google. Please try again later!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-bold text-center pt-6'>Login to your account</h2>
                <form onSubmit={handleSubmit} className="card-body ">
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
                                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Don’t Have An Account?{' '}
                    <Link className='text-red-500' to='/auth/register'>
                        Register
                    </Link>
                </p>

                <p onClick={handleGoogleSignIn} className='btn btn-ghost'>
                    Login With Google
                </p>
            </div>
        </div>
    );
};

export default Login;
