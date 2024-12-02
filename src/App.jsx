
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { BsFillCupHotFill } from "react-icons/bs";
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';


import rec1 from "./assets/images/cups/Rectangle 9.png"
import rec2 from "./assets/images/cups/Rectangle 10.png"
import rec3 from "./assets/images/cups/Rectangle 11.png"
import rec4 from "./assets/images/cups/Rectangle 12.png"
import rec5 from "./assets/images/cups/Rectangle 13.png"
import rec6 from "./assets/images/cups/Rectangle 14.png"
import rec7 from "./assets/images/cups/Rectangle 15.png"
import rec8 from "./assets/images/cups/Rectangle 16.png"
import Banner from './Components/Banner';


function App() {
  const AllCoffeeData = useLoaderData()

  const [coffees, setCoffees] = useState(AllCoffeeData)
  console.log(coffees);

  return (
    <div>
      <Banner></Banner>
      
      <div className='coffeeCard flex flex-col justify-center items-center space-y-3 my-10'>
        <h3>--- Sip & Savor ---</h3>
        <h1 className='text-[#331A15] text-4xl font-semibold font-rancho'>Our Popular Products </h1>
        <Link to="/addcoffee" className='flex bg-[#E3B577] justify-center items-center gap-2 font-rancho text-white border border-[#331A15] rounded-md font-semibold text-2xl p-3 '>Add Coffee <span className='text-[#331A15]'><BsFillCupHotFill /></span></Link>

        <div className='w-9/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            coffees.map(coffeedata =>
              <CoffeeCard
                key={coffeedata._id}
                coffeedata={coffeedata}
                coffees={coffees}
                setCoffees={setCoffees}
              >
              </CoffeeCard>)
          }
        </div>

        <div className='text-center w-11/12 mx-auto pt-10'>
          <h2 className='font-semibold mb-2'>Follow Us Now</h2>
          <h1 className='font-rancho text-[#331A15] text-4xl font-bold'>Follow on Instagram</h1>
          <div className=' mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <img src={rec1} alt="" />
            <img src={rec2} alt="" />
            <img src={rec3} alt="" />
            <img src={rec4} alt="" />
            <img src={rec5} alt="" />
            <img src={rec6} alt="" />
            <img src={rec7} alt="" />
            <img src={rec8} alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
