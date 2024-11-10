import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { MdOutlineRocket } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

 
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4">
        <h2 className="text-blue-700 font-semibold text-lg">MENU</h2>
      </div>
      <nav className="px-4">
        {/* Dashboards Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xl  text-gray-800 cursor-pointer" onClick={() => toggleMenu('dashboards')}>
            <span className='flex gap-2 items-center'><MdOutlineRocket className="hover:text-blue-500 transition duration-300 ease-in-out" />Dashboards</span>
            {openMenu === 'dashboards' ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-800" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-800" />
            )}
          </div>
          {openMenu === 'dashboards' && (
            <ul className="mt-2 space-y-2 pl-4">
              <li className="text-blue-700">Analytics</li>
              <li>Commerce</li>
              <li>Sales</li>
              <li>Minimal</li>
              <li>CRM</li>
            </ul>
          )}
           

           

        </div>

        {/* Page Section */}
        <div className="mb-4">
          <div 
            className="flex justify-between items-center text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('uiPages')}
          >
            <span>UI COMPONENTS</span>
            {openMenu === 'uiPages' ? (
              <ChevronUpIcon className="h-5 w-5 text-blue-700" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-700" />
            )}
          </div>
          {openMenu === 'uiPages' && (
            <ul className="mt-2 space-y-2 pl-4">
              <li>Elements</li>
              <li>Components</li>
              <li>Tables</li>
            </ul>
          )}
        </div>

{/* Application Section */}

        <div className="mb-4">
          <div 
            className="flex justify-between items-center text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('uiComponents')}
          >
            <span>UI COMPONENTS</span>
            {openMenu === 'uiComponents' ? (
              <ChevronUpIcon className="h-5 w-5 text-blue-700" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-700" />
            )}
          </div>
          {openMenu === 'uiComponents' && (
            <ul className="mt-2 space-y-2 pl-4">
              <li>Elements</li>
              <li>Components</li>
              <li>Tables</li>
            </ul>
          )}
        </div>

        {/* Dashboard Widgets Section */}
        <div className="mb-4">
          <div 
            className="flex justify-between items-center text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('dashboardWidgets')}
          >
            <span>DASHBOARD WIDGETS</span>
            {openMenu === 'dashboardWidgets' ? (
              <ChevronUpIcon className="h-5 w-5 text-blue-700" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-700" />
            )}
          </div>
          {openMenu === 'dashboardWidgets' && (
            <ul className="mt-2 space-y-2 pl-4">
              <li>Chart Boxes 1</li>
              <li>Chart Boxes 2</li>
              <li>Chart Boxes 3</li>
              <li>Profile Boxes</li>
            </ul>
          )}
        </div>

        {/* Forms Section */}
        <div className="mb-4">
          <div 
            className="flex justify-between items-center text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('forms')}
          >
            <span>FORMS</span>
            {openMenu === 'forms' ? (
              <ChevronUpIcon className="h-5 w-5 text-blue-700" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-blue-700" />
            )}
          </div>
          {openMenu === 'forms' && (
            <ul className="mt-2 space-y-2 pl-4">
              <li>Elements</li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
