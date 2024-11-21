import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                Swal.fire({
                    title: 'Successfully Updated!',
                    text: 'Successfully Update Account.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
            }).catch((error) => {
                Swal.fire({
                    title: 'Update Failed',
                    text: 'Something went wrong',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            });


    };
    return (
        <div>

            <nav className='w-11/12 mx-auto p-2'>
                <Navbar></Navbar>
            </nav>

            <div className='min-h-screen flex justify-center items-center'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center pt-6'>Update your Profile</h2>
                    <form onSubmit={handleUpdate} className="card-body">
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
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-xl">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;

