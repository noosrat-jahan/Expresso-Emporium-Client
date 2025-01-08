import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const updatedCoffee = useLoaderData()
    const {_id, name, chef, supplier, taste, category, details, photo} = updatedCoffee

    const navigate = useNavigate()

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const UpdatedCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(UpdatedCoffee);


        //send data to the server
        fetch(`https://coffee-store-server-rho-lilac.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Coffee successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                      navigate("/")
                }
            })
    }
    
    return (
        <div className='addCoffeebg py-10'>
            <Link to="/" className='flex  items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>
            <div className='bg-[#F4F3F0] w-10/12 mx-auto p-10 flex flex-col justify-center text-center'>
                <h2 className='text-2xl font-rancho text-[#374151] font-bold'>Update Existing Coffee Details</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='flex flex-col lg:flex-row items-center gap-3 '>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="Enter coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
                    </div>
                    <input type="submit" value="Update Coffee Details" className='bg-[#D2B48C] rounded w-full mt-5 p-3 font-rancho font-bold text-2xl cursor-pointer hover:bg-[#e0a558] border-2 border-[#331A15]' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;