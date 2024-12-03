import React from 'react';
import { FiEye } from "react-icons/fi";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffeedata, coffees, setCoffees }) => {

    
    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure that you want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#63C7F7",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-rho-lilac.vercel.app/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Good Luck !!!",
                                text: "Deleted coffee details.",
                                icon: "success"
                              });

                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="p-5 flex bg-[#F5F4F1] shadow-xl justify-between items-center">
            <img
                src={coffeedata.photo}
                alt="Shoes"
                className="rounded-xl w-1/3" />

            <div>
                <h2>Name: {coffeedata.name} </h2>
                <h2>Chef:  {coffeedata.chef} </h2>
                <h2>Category:  {coffeedata.category} </h2>
            </div>
            <div className="join join-vertical space-y-2 ">
                <Link to={`viewDetails/${coffeedata._id}`} className="btn text-lg bg-[#D2B48C] text-white "><FiEye /></Link >
                <Link to={`updatecoffee/${coffeedata._id}`}  onClick={() => {handleUpdate(coffeedata._id)}} className="btn text-lg bg-[#3C393B] text-white "><MdEdit /></Link >
                <button onClick={() => { handleDelete(coffeedata._id) }} className="btn text-lg bg-[#EA4744] text-white "><MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;