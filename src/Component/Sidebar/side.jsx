import React, { useState } from 'react';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Function to handle toggling the dropdowns
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
          <h3 
            className="text-sm font-semibold text-gray-800 cursor-pointer"
            onClick={() => toggleMenu('dashboards')}
          >
            Dashboards
          </h3>
          {openMenu === 'dashboards' && (
            <ul className="mt-2 space-y-2">
              <li className="text-blue-700">Analytics</li>
              <li>Commerce</li>
              <li>Sales</li>
              <li>Minimal</li>
              <li>CRM</li>
            </ul>
          )}
        </div>

        {/* UI Components Section */}
        <div className="mb-4">
          <h3 
            className="text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('uiComponents')}
          >
            UI COMPONENTS
          </h3>
          {openMenu === 'uiComponents' && (
            <ul className="mt-2 space-y-2">
              <li>Elements</li>
              <li>Components</li>
              <li>Tables</li>
            </ul>
          )}
        </div>

        {/* Dashboard Widgets Section */}
        <div className="mb-4">
          <h3 
            className="text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('dashboardWidgets')}
          >
            DASHBOARD WIDGETS
          </h3>
          {openMenu === 'dashboardWidgets' && (
            <ul className="mt-2 space-y-2">
              <li>Chart Boxes 1</li>
              <li>Chart Boxes 2</li>
              <li>Chart Boxes 3</li>
              <li>Profile Boxes</li>
            </ul>
          )}
        </div>

        {/* Forms Section */}
        <div className="mb-4">
          <h3 
            className="text-sm font-semibold text-blue-700 cursor-pointer"
            onClick={() => toggleMenu('forms')}
          >
            FORMS
          </h3>
          {openMenu === 'forms' && (
            <ul className="mt-2 space-y-2">
              <li>Elements</li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
