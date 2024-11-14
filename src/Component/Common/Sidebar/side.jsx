import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { RiRocket2Line } from "react-icons/ri";
import { TbBrandPagekit } from "react-icons/tb";
import { GrInbox } from "react-icons/gr";
import { IoCarSportOutline } from "react-icons/io5";
import { LuTable2 } from "react-icons/lu";
import { SlDiamond } from "react-icons/sl";
import { BsPieChart } from "react-icons/bs";
import { FaDigitalTachograph } from "react-icons/fa";
import { TfiBasketball } from "react-icons/tfi";
import { FaIdCard } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { PiGameController } from "react-icons/pi";
import { GiChart } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);


  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-white h-full shadow-md  ">
      <div className="p-4">
        <h2 className="text-blue-700 font-bold text-sm">MENU</h2>
      </div>
      <nav className="px-8 ">
        {/* Dashboards Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer  hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
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
              <li className="hover:text-blue-700"><Link to="/">Analytics</Link></li>
              <li className="hover:text-blue-700"> <Link to="/Commerce">Commerce</Link></li>
              <li className="hover:text-blue-700">Sales</li>
              <li className="hover:text-blue-700">Minimal</li>
              <li className="hover:text-blue-700">CRM</li>
            </ul>
          )}




        </div>

        {/* Page Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
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
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
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
        <h2 className="text-blue-700 font-bold text-sm">UI COMPONENTS</h2>
      </div>


      <nav className="px-8 py-4 ">


        {/* Elements Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
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
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
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
              <li className="hover:text-blue-700">Accordions </li>
              <li className="hover:text-blue-700">Notification</li>
              <li className="hover:text-blue-700">Modals </li>
              <li className="hover:text-blue-700">Loading Blockers</li>
              <li className="hover:text-blue-700">Progress Bar</li>
              <li className="hover:text-blue-700">Tooltios & Popovers</li>
              <li className="hover:text-blue-700">Carousel</li>
              <li className="hover:text-blue-700">Calender</li>
              <li className="hover:text-blue-700">Pagination Boxed</li>
              <li className="hover:text-blue-700">Count Up</li>
              <li className="hover:text-blue-700">Scrollable</li>
              <li className="hover:text-blue-700">Tree View</li>
              <li className="hover:text-blue-700">Maps</li>
              <li className="hover:text-blue-700">Ratings</li>
              <li className="hover:text-blue-700">Image crop </li>
              <li className="hover:text-blue-700">Guided tours</li>


            </ul>
          )}
        </div>


        {/* Table Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiTable')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <LuTable2 className="transition duration-0 text-2xl  ease-in-out" />
              Table
            </span>
            {openMenu === 'uiTable' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uiTable' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Data Table</li>
              <li className="hover:text-blue-700">Regular Tables</li>
              <li className="hover:text-blue-700">Grid Tables</li>
            </ul>
          )}
        </div>
      </nav>
      <div className="pl-4 pt-2">
        <h2 className="text-blue-700 font-bold text-sm">DASH BOARD WIDGETS</h2>
      </div>


      <nav className="px-8 py-4 ">


        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <BsPieChart className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 1
            </span>
          </div>
        </div>



        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <FaDigitalTachograph className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 2
            </span>
          </div>
        </div>



        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <TfiBasketball className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 3
            </span>
          </div>
        </div>

          {/* Chart 1 Section */}
          <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <FaIdCard className="transition duration-0 text-2xl  ease-in-out" />
              Profile Boxes
            </span>
          </div>
        </div>

      </nav>

 {/* Forms Section */}
      <div className="p-4">
        <h2 className="text-blue-700 font-bold text-sm">Forms</h2>
      </div>
      <nav className="px-8 ">
        {/* form Elements Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiFElements')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <FaRegLightbulb className="transition text-2xl  duration-0 ease-in-out" />
              Elements

            </span>
            {openMenu === 'uiFElements' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>
          {openMenu === 'uiFElements' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Controls</li>
              <li className="hover:text-blue-700">Layouts</li>
              <li className="hover:text-blue-700">validation</li>
              <li className="hover:text-blue-700">Wizard</li>
              
            </ul>
          )}




        </div>

        {/* Widgets Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md"
            onClick={() => toggleMenu('uiWidgets')}>
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <PiGameController className="transition text-2xl  duration-0 ease-in-out" />
              Widgets
            </span>
            {openMenu === 'uiWidgets' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800 transition duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-800 transition duration-300 ease-in-out" />
            )}
          </div>

          {openMenu === 'uiWidgets' && (
            <ul className="mt-2 space-y-2 pl-8">
              <li className="hover:text-blue-700">Datepicker</li>
              <li className="hover:text-blue-700">Range Slider</li>
              <li className="hover:text-blue-700">Input Selects</li>
              <li className="hover:text-blue-700">Toggle Switch </li>
              <li className="hover:text-blue-700">WYSIWYG Editor </li>
              <li className="hover:text-blue-700">Input Mask </li>
              <li className="hover:text-blue-700">Clipboard  </li>
              <li className="hover:text-blue-700">Textarea Autosize </li>

            </ul>
          )}
        </div>
      </nav>
      <div className="pl-4 pt-2">
        <h2 className="text-blue-700 font-bold text-sm">CHARTS</h2>
      </div>


      <nav className="px-8 py-4 ">


        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <GiChart className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 1
            </span>
          </div>
        </div>



        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <BsPieChart className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 2
            </span>
          </div>
        </div>



        {/* Chart 1 Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-base cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-md">
            <span className="flex gap-2 items-center hover:text-blue-500 transition duration-300 ease-in-out">
              <SlGraph className="transition duration-0 text-2xl  ease-in-out" />
              Chart Box 3
            </span>
          </div>
        </div>


      </nav>
      
    </div>

  );
};

export default Sidebar;
