import React from 'react';
import logo from "../assets/images/more/logo1.png"
import fb from "../assets/images/icons/fb.png"
import twitter from "../assets/images/icons/twitter.png"
import insta from "../assets/images/icons/insta.png"
import linkedin from "../assets/images/icons/linkedin.png"


import { FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer flex flex-col py-10 '>
            <div className='w-10/12 mx-auto space-y-3'>
                <img src={logo} alt="" className='w-10' />
                <h1 className='font-rancho text-3xl'>Espresso Emporium</h1>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex items-center gap-3'>
                    <img src={fb} alt="" className='w-6' />
                    <img src={twitter} alt="" className='w-6' />
                    <img src={insta} alt="" className='w-6' />
                    <img src={linkedin} alt="" className='w-6' />
                </div>
                <h1>Get in Touch</h1>
                <div>
                    <div className='flex items-center gap-2'> <FaPhoneAlt /> +88 01533 333 333</div>
                    <div className='flex items-center gap-2'> <MdEmail /> info@gmail.com</div>
                    <div className='flex items-center gap-2'> <FaLocationDot /> 72, Wall street, King Road, Dhaka</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;