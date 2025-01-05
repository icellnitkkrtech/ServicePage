import React, { useState } from "react";
import {
  BsGrid,
  BsBell,
  BsGear,
  BsQuestionCircle,
  BsPersonCircle,
  BsBoxArrowRight,
  BsClipboardData,
  BsChatDots,
  BsX,
  BsList,
  BsHouseAdd,
} from "react-icons/bs";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <BsGrid /> },
    { id: "services", label: "Services", icon: <BsClipboardData /> },
    { id: "addWork", label: "AddWork", icon: <BsHouseAdd /> },
    { id: "notifications", label: "Notifications", icon: <BsBell /> },
    { id: "support", label: "Support", icon: <BsChatDots /> },
    { id: "settings", label: "Settings", icon: <BsGear /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-indigo-600 text-white"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-white border-r shadow-sm
        transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="flex flex-col h-full p-4">
          {/* User Profile Section */}
          <div className="flex items-center space-x-3 mb-8 p-3 bg-gray-50 rounded-lg">
            <BsPersonCircle className="w-10 h-10 text-gray-500" />
            <div>
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">Client</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="mt-auto">
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-3">
                Quick Stats
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active Services</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pending</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg">
              <BsBoxArrowRight />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
