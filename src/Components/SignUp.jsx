import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { BiArrowBack } from 'react-icons/bi';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createNewUser, setUsers, GoogleSignIn } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                setUsers(user)
                console.log(user);

                const createdAt = user?.metadata?.creationTime
                const userData = { email, password, createdAt }


                // send new user data to the database
                fetch('https://coffee-store-server-rho-lilac.vercel.app/users/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (res.data.insertedId) {
                            Swal.fire({
                              position: "center",
                              icon: "success",
                              title: `Registarion is Successful`,
                              showConfirmButton: false,
                              timer: 3500
                            });
                          }
                    })
            })
            .catch(error => {
                console.log('Error:', error.message);
            })
    }

    const handleGoogleSignUp = () => {
        GoogleSignIn()
            .then((result) => {
                const user = result.user
                setUsers(user)
                console.log(user);

                const email = user?.email
                const createdAt = user?.metadata?.creationTime
                const lastSignInTime = user?.metadata?.lastSignInTime
                const userData = { email, createdAt, lastSignInTime }

                fetch('https://coffee-store-server-rho-lilac.vercel.app/users/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        Swal.fire({
                            title: "Success",
                            text: "You successfully logged in with Google",
                            icon: "success"
                        });
                    })

            })
            .catch(error => {
                console.log('Error:', error.message);
            })
    }
    
    return (
        <div>
            <Link to="/" className='flex  items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>
            <div className='w-4/12 mx-auto flex justify-center'>
                <div className="card  w-full max-w-sm shrink-0 ">
                    <form onSubmit={handleRegister} className="card-body border border-[#ABABAB] rounded">
                        <h1 className='text-center text-[#9b6e35] text-3xl font-semibold'>Create an account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username or Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Passowrd</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confrim Passowrd</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D2B48C] text-xl font-semibold">Create an account</button>
                        </div>
                        <p className='flex justify-center gap-3 mt-3 font-semibold'>Already have an account? <Link to="/signin" className='text-[#9b6e35] underline font-bold'>Login</Link> </p>
                    </form>
                    <div className="divider">OR</div>

                    <Link className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-2 font-semibold justify-center'><span className='text-blue-700 '><FaFacebook></FaFacebook></span> Continue with Facebook</Link>
                    <Link onClick={handleGoogleSignUp} className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-5 font-semibold justify-center'><FcGoogle /> Continue with Google</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;