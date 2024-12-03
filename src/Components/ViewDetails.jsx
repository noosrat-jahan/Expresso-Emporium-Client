import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const DetailsCoffeeData = useLoaderData()
    console.log("details of it:", DetailsCoffeeData);

    return (
        <div>
            <Link to="/" className='flex w-40 items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>

            <div className="w-9/12 mx-auto mt-5 p-5 mb-10 flex bg-[#F5F4F1] shadow-xl justify-between gap-5 items-center">
                <img
                    src={DetailsCoffeeData.photo}
                    alt="Shoes"
                    className="rounded-xl w-1/3" />
                <div className='w-6/12 space-y-3'>
                    <h2><span className='font-bold text-xl mr-3'>Name:</span> {DetailsCoffeeData.name} </h2>
                    <h2><span className='font-bold text-xl mr-3'>Chef:</span>  {DetailsCoffeeData.chef} </h2>
                    <h2><span className='font-bold text-xl mr-3'>Supplier:</span>  {DetailsCoffeeData.supplier} </h2>
                    <h2><span className='font-bold text-xl mr-3'>Taste:</span>  {DetailsCoffeeData.taste} </h2>
                    <h2><span className='font-bold text-xl mr-3'>Category:</span>  {DetailsCoffeeData.category} </h2>
                    <h2><span className='font-bold text-xl mr-3'>Details:</span>  {DetailsCoffeeData.details} </h2>
                </div>

            </div>
        </div>
    );
};

export default ViewDetails;