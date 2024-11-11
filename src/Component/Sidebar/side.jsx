import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { RiRocket2Line } from "react-icons/ri";
import { TbBrandPagekit } from "react-icons/tb";
import { GrInbox } from "react-icons/gr";
import { IoCarSportOutline } from "react-icons/io5";

import { SlDiamond } from "react-icons/sl";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);


  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-white h-screen shadow-md ">
      <div className="p-4">
        <h2 className="text-blue-700 font-bold text-sm">MENU</h2>
      </div>
      <nav className="px-4 ">
        {/* Dashboards Section */}
        <div className="mb-4">
        <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiDashboard')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <RiRocket2Line className="transition text-2xl  duration-0 ease-in-out" />
              Dashboard
             
            </span>
            {openMenu === 'uiDashboard' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>
          {openMenu === 'uiDashboard' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Analytics</li>
              <li className="hover:text-blue-700">Commerce</li>
              <li className="hover:text-blue-700">Sales</li>
              <li className="hover:text-blue-700">Minimal</li>
              <li className="hover:text-blue-700">CRM</li>
            </ul>
          )}




        </div>

        {/* Page Section */}
        <div className="mb-4">
          <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiPages')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <TbBrandPagekit className="transition text-2xl  duration-0 ease-in-out" />
              Pages
            </span>
            {openMenu === 'uiPages' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uiPages' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Login</li>
              <li className="hover:text-blue-700">Login Boxed</li>
              <li className="hover:text-blue-700">Register</li>
              <li className="hover:text-blue-700">Register Boxed</li>
              <li className="hover:text-blue-700">Forgot Password</li>
              <li className="hover:text-blue-700">Forgot Password Box</li>

            </ul>
          )}
        </div>


        {/* Application Section */}
<div className="mb-4">
          <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiApplication')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <GrInbox className="transition duration-0 text-2xl  ease-in-out" />
              Application
            </span>
            {openMenu === 'uiApplication' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uiApplication' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Mailbox</li>
              <li className="hover:text-blue-700">Chat</li>
              <li className="hover:text-blue-700">FQA Section</li>
              <li className="hover:text-blue-700">Forums</li>
              
            
            </ul>
          )}
        </div>




       
      </nav>
      <div className="pl-4 pt-2">
        <h2 className="text-blue-700 font-bold text-sm">MENU</h2>
      </div>


      <nav className="px-4 py-4 ">


        {/* Elements Section */}
        <div className="mb-4">
              <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiElements')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <SlDiamond className="transition duration-0 text-2xl  ease-in-out" />
              Elements
            </span>
            {openMenu === 'uiElements' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>
          {openMenu === 'uiElements' && (
            <ul className="mt-2 space-y-2 pl-8">
        <li className="hover:text-blue-700">Buttons</li>
              <li className="hover:text-blue-700">Dropdown</li>
              <li className="hover:text-blue-700">Icon</li>
              <li className="hover:text-blue-700">Badge</li>
              <li className="hover:text-blue-700">Cards</li>
              <li className="hover:text-blue-700">Loading Indicators</li>
              <li className="hover:text-blue-700">List Groups </li>
              <li className="hover:text-blue-700">Navigation Menus</li>
              <li className="hover:text-blue-700">Timelines </li>
              <li className="hover:text-blue-700">Utilities Menus</li>
            </ul>
          )}
        </div>
     

        {/* Components Section */}
        <div className="mb-4">
          <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uicomponents')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <IoCarSportOutline className="transition text-2xl  duration-0 ease-in-out" />
              Pages
            </span>
            {openMenu === 'uicomponents' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uicomponents' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Tabs</li>
              <li className="hover:text-blue-700">Accordings Boxed</li>
              <li className="hover:text-blue-700">Register</li>
              <li className="hover:text-blue-700">Register Boxed</li>
              <li className="hover:text-blue-700">Forgot Password</li>
              <li className="hover:text-blue-700">Forgot Password Box</li>
              <li className="hover:text-blue-700">Login</li>
              <li className="hover:text-blue-700">Login Boxed</li>
              <li className="hover:text-blue-700">Register</li>
              <li className="hover:text-blue-700">Register Boxed</li>
              <li className="hover:text-blue-700">Forgot Password</li>
              <li className="hover:text-blue-700">Forgot Password Box</li>
              <li className="hover:text-blue-700">Login</li>
              <li className="hover:text-blue-700">Login Boxed</li>
              <li className="hover:text-blue-700">Register</li>
              <li className="hover:text-blue-700">Register Boxed</li>
              <li className="hover:text-blue-700">Forgot Password</li>
              <li className="hover:text-blue-700">Forgot Password Box</li>

            </ul>
          )}
        </div>


        {/* Application Section */}
<div className="mb-4">
          <div  className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiApplication')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <GrInbox className="transition duration-0 text-2xl  ease-in-out" />
              Application
            </span>
            {openMenu === 'uiApplication' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uiApplication' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Mailbox</li>
              <li className="hover:text-blue-700">Chat</li>
              <li className="hover:text-blue-700">FQA Section</li>
              <li className="hover:text-blue-700">Forums</li>
            
            </ul>
          )}
        </div>




       
      </nav>
      
    </div>
    
  );
};

export default Sidebar;
