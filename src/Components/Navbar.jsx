import React from 'react';
import logo from "../assets/images/more/logo1.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className='navbar flex bg-[#372727] items-center justify-center text-white mt-0 p-2 gap-3'>
                <img src={logo} alt="" className='w-10' />
                <h1 className='font-rancho text-3xl'>Espresso Emporium</h1>
            </div>
            <div className='flex justify-end mr-5 mt-3 gap-2'>
                <Link to="users" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 '>Users</Link>
                <Link to="signin" className=' bg-[#E3B577] gap-2 font-rancho text-[#331A15] border border-[#331A15] rounded-md font-semibold text-2xl px-3 py-1 '>SignIn</Link>
            </div>
        </div>
    );
};

export default Navbar;