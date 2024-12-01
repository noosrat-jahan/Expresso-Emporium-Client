import React from 'react';
import logo from "../assets/images/more/logo1.png"
const Navbar = () => {
    return (
        <div className='navbar flex bg-[#372727] items-center justify-center text-white mt-0 p-2 gap-3'>
            <img src={logo} alt="" className='w-10' />
            <h1 className='font-rancho text-3xl'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;