import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signin = () => {

    const { signInUser, setUsers } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const checked = form.remember.checked
        const loggedInUser = { email, password, checked }
        console.log(loggedInUser);

        signInUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                setUsers(user)

                //update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime
                const loginInfo = { email, lastSignInTime }

                fetch(`http://localhost:5000/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Sign in info updated in db:', data);
                    })
            })
            .catch(error => {
                console.log('Error:', error.message);
            })
    }

    return (
        <div className='w-4/12 mx-auto flex justify-center'>
            <div className="card  w-full shrink-0 ">

                <form onSubmit={handleSignIn} className="card-body border border-[#ABABAB] rounded">
                    <h1 className='text-center text-[#9b6e35] text-3xl font-semibold'>Login</h1>
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
                        <div className="form-control flex-row justify-between mt-3">
                            <label className="label justify-start cursor-pointer gap-3">
                                <input type="checkbox" name='remember' className="checkbox" />
                                <span className="label-text">Remember me</span>
                            </label>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-[#a07b49] font-semibold underline">Forgot password?</Link>
                            </label>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] text-xl font-bold">Login</button>
                    </div>
                    <p className='flex justify-center gap-3 mt-3 font-semibold'>Don’t have an account? <Link to="/signup" className='text-[#5d4527] underline font-semibold'>Create an account</Link> </p>
                </form>
                <div className="divider">OR</div>

                <Link className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-2 font-semibold justify-center'><span className='text-blue-700 '><FaFacebook></FaFacebook></span> Continue with Facebook</Link>
                <Link className='border border-[#C7C7C7] rounded-full p-3 flex items-center gap-5 mb-5 font-semibold justify-center'><FcGoogle /> Continue with Google</Link>
            </div>
        </div>

    );
};

export default Signin;