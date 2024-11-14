import React from 'react'
import { FaCar, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaMoneyBillWave, FaGraduationCap, FaBuilding } from "react-icons/fa";
import { Chart } from "react-google-charts";
import { IoIosMenu } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GoFlame } from "react-icons/go";
import ProgressBar from "@ramonak/react-progress-bar";


const Analytics = () => {
    const progress = 70; // Percentage for the progress bar
    const totalOrders = 1896; // Total orders amount
    const growth = 100; // Year-over-Year Growth percentage

      
 const data = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

 const options = {
  title: "Bar/area interval chart",
  curveType: "function",
  intervals: { color: "series-color" },
  interval: {
    i0: {
      color: "#4374E0",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i1: {
      color: "#E49307",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
  },
  legend: "none",
};
    return (
        <div className=''>
        <div className="  flex items-center justify-between p-4 bg-[#F6F7F8] shadow-md sm:flex-row sm:space-y-0 space-y-4 flex-col">
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


        {/* variation */}
        
        <div className="p-6 shadow-md h-screen  ">
            
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4 group w-fit">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">Variation 1</button>
        <button className="px-4 py-2 text-gray-500 rounded-lg font-semibold group-hover:text-white hover:bg-blue-500 ">Variation 2</button>
      </div>
      
      {/* Header */}
      <div className=' w-full bg-[#FFFFFF] '>
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg pl-4">Portfolio Performance</h2>
        <button className="px-4 py-2 border rounded-lg text-gray-700">View All</button>
      </div>

      {/* Performance Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 border border-gray-300 ">
        {/* Card 1 - Cash Deposits */}
        <div className="flex items-center space-x-4 ">
          <div className="p-4 bg-yellow-100 rounded-full">
            <FaMoneyBillWave className="text-yellow-500 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Cash Deposits</p>
            <h3 className="text-2xl font-bold">1,7M</h3>
            <p className="text-red-500 text-sm">
              <span className="text-xs">↓</span> 54.1% less earnings
            </p>
          </div>
        </div>

        {/* Card 2 - Invested Dividends */}
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-pink-100 rounded-full">
            <FaGraduationCap className="text-pink-500 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Invested Dividends</p>
            <h3 className="text-2xl font-bold">9M</h3>
            <p className="text-blue-500 text-sm">
              <span className="text-xs">↑</span> 14.1% growth rate
            </p>
          </div>
        </div>

        {/* Card 3 - Capital Gains */}
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-green-100 rounded-full">
            <FaBuilding className="text-green-500 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Capital Gains</p>
            <h3 className="text-2xl font-bold">$563</h3>
            <p className="text-orange-500 text-sm">
              <span className="text-xs">↑</span> 7.35% increase
            </p>
          </div>
        </div>
      </div>

      {/* View Complete Report Button */}
      <div className="flex justify-center mt-6 pb-5">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md">
          View Complete Report
        </button>
      </div>
      
    </div>
    <div className="flex justify-between gap-6 mt-10">
  {/* Left Section */}
  <div className="w-1/2 space-y-4 bg-white ">
    <div className="flex justify-between items-center border-b h-14 p-4" >
      <div className="flex items-center gap-2">
        <IoCloudDownloadOutline className='text-2xl'/>
        <span>Technical Support</span>
      </div>
      <IoIosMenu className='text-2xl' />
    </div>
    <div className="w-full">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <div className='p-4'>
        <div className='border-b'>
        <h1 className='text-l font-semibold'>SALES PROGRESS</h1>
        </div>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-xl font-semibold'>Total Orders</h1>
                <h2 className='text-l font-medium'>Last year expenses</h2>
            </div>
            <div>
                <h1 className='text-3xl font-extrabold text-green-600'>$ 1896</h1>
            </div>
        </div>

        <ProgressBar completed="60" className='w-full mt-9'/>
        <h2>YOY Growth</h2>
        
      </div>
       
    </div>
    
  </div>

  {/* Right Section */}
  
  <div className="w-1/2 bg-slate-500">
  <div className="flex justify-between items-center border-b h-14 p-4">
      <div className="flex items-center gap-2">
        <GoFlame className='text-2xl'/>
        <span>Technical Support</span>
      </div>
      <IoIosMenu className='text-2xl' />
     
    </div>

  </div>
</div>

    </div>
   
        </div>
      );
}

export default Analytics
