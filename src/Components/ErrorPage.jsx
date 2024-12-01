import React from 'react';
import error from '../assets/images/404/404.gif';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const ErrorPage = () => {
    return (
        <div>
            <Link to="/" className='flex  items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 mt-5'><BiArrowBack /> Back to home</Link>
            <div className='flex justify-center'>
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;