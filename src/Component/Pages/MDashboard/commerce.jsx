import React from 'react'
import { FaCar, FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import { Chart } from "react-google-charts";
import { FaEye, FaBug, FaFileAlt, FaUser } from 'react-icons/fa';
const Duta = [
    { icon: <FaEye className="text-blue-400 text-4xl" />, title: "45.8k", subtitle: "Total Views", change: "+175.5%", changeColor: "text-green-500" },
    { icon: <FaBug className="text-blue-400 text-4xl" />, title: "63.2k", subtitle: "Bugs Fixed", change: "+175.5%", changeColor: "text-blue-500" },
    { icon: <FaFileAlt className="text-red-400 text-4xl" />, title: "5.82k", subtitle: "Reports Submitted", change: "+54.1%", changeColor: "text-blue-500" },
    { icon: <FaUser className="text-green-400 text-4xl" />, title: "17.2k", subtitle: "Profiles", change: "+175.5%", changeColor: "text-yellow-500" },
];

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
];

export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
};
const Commerce = () => {
    return (
        <div>

            <div className="  flex items-center justify-between p-4 bg-[#F6F7F8] shadow-md sm:flex-row sm:space-y-0 space-y-4 flex-col">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div className="p-4 bg-white rounded-lg shadow-md">

                        <FaChartPie className="text-pink-500 text-2xl" />

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
            <div className="flex space-x-4 p-4 group w-fit">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">Variation 1</button>
                    <button className="px-4 py-2 text-gray-500 rounded-lg font-semibold group-hover:text-white hover:bg-blue-500 ">Variation 2</button>
                </div>
             {/* Main Content */}
             <div className="flex flex-col md:flex-row md:space-x-4">
        
        {/* Chart Section */}
        <div className="flex-1">
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>

        {/* Stats Cards Section */}
        <div className="mt-10 md:mt-0 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Duta.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-500">{item.subtitle}</p>
                <p className={`text-sm ${item.changeColor} mt-2`}>{item.change}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>

    )
}

export default Commerce
