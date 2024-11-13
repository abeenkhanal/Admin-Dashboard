import React from 'react'
import { FaCar, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Analytics = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        {/* left side */}
        <div className='bg-red-700 flex'>
            <div>
            <FaCar className="text-pink-500 text-2xl" />
            </div>
            <div>
                <h2>Analytics Dashboard</h2>
                <p>This is an example dashboard created using build-in elements and components.</p>
            </div>
        </div>
        {/* right side */}
        <div className='bg-slate-400'>
            <button>
            <FaStar /> 
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
          <FaCar className="mr-2" />
          <span>Buttons</span>
          <IoIosArrowDown className="ml-1" />
        </button>
        </div>
    </div>
  )
}

export default Analytics
