import React from 'react'
import { FaCar, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Analytics = () => {
    return (
        <div className="w-[140vh] flex items-center justify-between p-4 bg-gray-100  shadow-md sm:flex-row sm:space-y-0 space-y-4 flex-col">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaCar className="text-pink-500 text-2xl" />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
              <p className="text-gray-500 text-sm">
                This is an example dashboard created using built-in elements and components.
              </p>
            </div>
          </div>
    
          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Star Icon Button */}
            <button className="p-2 bg-gray-800 text-white rounded-lg shadow-md">
              <FaStar />
            </button>
            {/* Dropdown Button */}
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
              <FaCar className="mr-2" />
              <span>Buttons</span>
              <IoIosArrowDown className="ml-1" />
            </button>
          </div>
        </div>
      );
}

export default Analytics
