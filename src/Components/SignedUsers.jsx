import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignedUsers = () => {
    const AllUsers = useLoaderData()
    const [users, setUsers] = useState(AllUsers)

    const handleDelete = id =>{
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-rho-lilac.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);  
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      }); 
                    const remaining = users.filter(usr => usr._id !== id)  
                    setUsers(remaining)       
                })                
              }
          });

        
    }

    return (
        <div className='w-11/12 mx-auto my-5'>
            <Link to="/" className='flex  items-center gap-2 font-rancho text-[#374151] font-semibold text-2xl ml-24 pb-5'><BiArrowBack /> Back to home</Link>

            All users: {users.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Creation Date</th>
                            <th>LastSignInTime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className='space-x-3'>
                                    <button className='btn'>E</button>
                                    <button onClick={()=>{handleDelete(user._id)}} className='btn'>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SignedUsers;