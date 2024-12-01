
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { BsFillCupHotFill } from "react-icons/bs";
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';


function App() {
  const AllCoffeeData = useLoaderData()

  const [coffees, setCoffees] = useState(AllCoffeeData)
  console.log(coffees);

  return (
    <div>
      <div className='coffeeCard flex flex-col justify-center items-center space-y-3 my-10'>
        <h3>--- Sip & Savor ---</h3>
        <h1 className='text-[#331A15] text-4xl font-semibold font-rancho'>Our Popular Products </h1>
        <Link to="/addcoffee" className='flex bg-[#E3B577] justify-center items-center gap-2 font-rancho text-white border border-[#331A15] rounded-md font-semibold text-2xl p-3 '>Add Coffee <span className='text-[#331A15]'><BsFillCupHotFill /></span></Link>

        <div className='w-9/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            AllCoffeeData.map(coffeedata =>
              <CoffeeCard
                key={coffeedata._id}
                coffeedata={coffeedata}
                coffees={coffees}
                setCoffees={setCoffees}
              >
              </CoffeeCard>)
          }
        </div>
      </div>


    </div>
  )
}

export default App
