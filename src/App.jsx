import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'settings') {
      setOpenDropdown(!openDropdown);
    } else {
      setOpenDropdown(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex h-full">

        {/* Sidebar */}
        <div
          className={`
            bg-white shadow-lg transform duration-300 ease-in-out
            fixed md:static top-0 left-0 h-full z-30
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:-translate-x-0'}
            w-[85vw] md:w-[15vw] 
            ${isOpen ? '' : 'md:hidden'}
          `}
        >
          <div className="p-4">
            <h1 className="text-xl font-bold mb-6">Sidebar</h1>

            {/* Sidebar Menu Items */}
            <ul className="space-y-2">
              <li
                className={`flex items-center p-2 rounded cursor-pointer transition-all 
                  ${activeMenu === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
                `}
                onClick={() => handleMenuClick('dashboard')}
              >
                <Icon icon="material-symbols:dashboard-outline" className="mr-2" />
                Dashboard
              </li>

              <li
                className={`flex items-center justify-between p-2 rounded cursor-pointer transition-all
                  ${activeMenu === 'settings' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
                `}
                onClick={() => handleMenuClick('settings')}
              >
                <div className="flex items-center">
                  <Icon icon="mdi:cog-outline" className="mr-2" />
                  Settings
                </div>
                <Icon
                  icon={openDropdown ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                  className="ml-2"
                />
              </li>

              {/* Dropdown Submenu */}
              {openDropdown && (
                <ul className="pl-6 mt-1 space-y-1">
                  <li
                    className={`p-2 rounded cursor-pointer transition-all
                      ${activeMenu === 'profile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
                    `}
                    onClick={() => handleMenuClick('profile')}
                  >
                    Profile
                  </li>
                  <li
                    className={`p-2 rounded cursor-pointer transition-all
                      ${activeMenu === 'account' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
                    `}
                    onClick={() => handleMenuClick('account')}
                  >
                    Account
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex flex-col transition-all duration-300 ease-in-out w-full md:${isOpen ? 'w-[85vw]' : 'w-full'}`}
        >
          {/* Topbar */}
          <div className="flex items-center h-14 shadow-md px-4 bg-white sticky top-0 z-10">
            <Icon
              onClick={handleClick}
              icon="ri:menu-2-fill"
              width="25"
              height="25"
              className="cursor-pointer"
            />
            <h2 className="ml-4 text-lg font-semibold">Topbar</h2>
          </div>

          {/* Page Content */}
          <div className="p-4">
            <p>Main content for: <strong>{activeMenu}</strong></p>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={handleClick}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default App;
