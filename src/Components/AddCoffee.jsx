import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiArrowBack } from "react-icons/bi";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddCoffee = () => {
    const { register, handleSubmit } = useForm()
    //send data to the server
    const mutation = useMutation({
        mutationFn: async (formData) => {
            console.log(formData);
            await axios.post('https://coffee-store-server-rho-lilac.vercel.app/coffee', formData)
                // .then(res => res.json())
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Added a new Coffee successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }
    })


    const onSubmit = (data) => {
        console.log(data)
        mutation.mutate(data)
    }

    return (
        <div className='addCoffeebg py-10'>
            <Link to="/" className='flex w-40 items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>
            <div className='bg-[#F4F3F0] w-10/12 mx-auto p-10 flex flex-col justify-center text-center'>
                <h2 className='text-2xl font-rancho text-[#374151] font-bold'>Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row items-center gap-3 '>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Name*</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter coffee name"
                                className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Chef*</span>
                            </div>
                            <input
                                {...register("chef", { required: true })}
                                type="text"
                                placeholder="Enter coffee chef"
                                className="input input-bordered w-full " />
                        </label>

                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Supplier*</span>
                            </div>
                            <input
                                {...register("supplier", { required: true })}
                                type="text"
                                placeholder="Enter coffee supplier"
                                className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Taste*</span>
                            </div>
                            <input
                                {...register("taste", { required: true })}
                                type="text"
                                placeholder="Enter coffee taste"
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <input
                                {...register("category", { required: true })}
                                type="text"
                                placeholder="Enter coffee category"
                                className="input input-bordered w-full " />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Details*</span>
                            </div>
                            <input
                                {...register("details", { required: true })}
                                type="text"
                                placeholder="Enter coffee details"
                                className="input input-bordered w-full " />
                        </label>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Photo*</span>
                        </div>
                        <input
                            {...register("photo", { required: true })}
                            type="text"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full " />
                    </label>
                    <input type="submit" value="Add Coffee" className='bg-[#D2B48C] rounded w-full mt-5 p-3 font-rancho font-bold text-2xl cursor-pointer hover:bg-[#e0a558] border-2 border-[#331A15]' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;