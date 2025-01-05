import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-blue-500">
          MyWebsite
        </a>
        <ul className="hidden lg:flex space-x-8 text-blue-500 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-700">Home</a></li>
          <li><a href="#services" className="hover:text-blue-700">Services</a></li>
          <li><a href="#login" className="hover:text-blue-700">Login</a></li>
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
