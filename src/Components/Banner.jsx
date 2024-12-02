import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-bg mt-5 flex justify-end py-40 text-white text-left'>
            <div className='flex flex-col items-start lg:ml-[45%] space-y-3 px-4'>
                <h1 className='font-rancho text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='w-3/4 text-xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link to="https://theneedforcoffee.com/" target='_blank' className='flex bg-[#E3B577] justify-center items-center gap-2 font-rancho text-black border border-[#331A15] rounded-md font-semibold text-2xl p-3 '>Learn More<span className='text-[#331A15]'></span></Link>
            </div>

        </div>
    );
};

export default Banner;