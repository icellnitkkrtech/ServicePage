import React from "react";
import { BsBell, BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              iCell Services
            </span>
            <div className="ml-10 space-x-4">
              <button className="hover:text-indigo-600">Home</button>
              <button className="hover:text-indigo-600">Services</button>
              <button className="hover:text-indigo-600">Support</button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <BsBell className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <BsPersonCircle className="h-6 w-6" />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
