import React, { useContext } from 'react';
import logo from "../assets/images/more/logo1.png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {

    const { users, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
            .then(() => {
               
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Out Successfully",
                    showConfirmButton: false,
                    timer: 3500
                });
                navigate('/signin')
            })
            .catch(error => {
                console.log('Error:', error.message);
            })
    }

    return (
        <div>
            <div className='navbar flex bg-[#372727] items-center justify-center text-white mt-0 p-2 gap-3'>
                <img src={logo} alt="" className='w-10' />
                <h1 className='font-rancho text-3xl'>Espresso Emporium</h1>
            </div>
            <div className='flex justify-end mr-5 mt-3 gap-2'>
                {
                    users ? <div>
                        <Link to="users" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 mr-3'>Users</Link>
                        <Link onClick={handleLogout} to="signin" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 '>SignOut</Link>
                     </div> 
                    : <div>
                        <Link to="signin" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 mr-3'>Login</Link>
                        <Link to="signup" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 '>SignUp</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;