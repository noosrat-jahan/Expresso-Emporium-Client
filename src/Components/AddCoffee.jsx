import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { BiArrowBack } from "react-icons/bi";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee);


        //send data to the server
        fetch('https://coffee-store-server-rho-lilac.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added a new Coffee successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className='addCoffeebg py-10'>
            <Link to="/" className='flex w-40 items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>
            <div className='bg-[#F4F3F0] w-10/12 mx-auto p-10 flex flex-col justify-center text-center'>
                <h2 className='text-2xl font-rancho text-[#374151] font-bold'>Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee}>
                    <div className='flex flex-col lg:flex-row items-center gap-3 '>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
                    </div>
                    <input type="submit" value="Add Coffee" className='bg-[#D2B48C] rounded w-full mt-5 p-3 font-rancho font-bold text-2xl cursor-pointer hover:bg-[#e0a558] border-2 border-[#331A15]' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;