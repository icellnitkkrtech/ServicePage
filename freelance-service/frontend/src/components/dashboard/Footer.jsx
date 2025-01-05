import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">iCell Services</h3>
            <p className="text-sm text-gray-400">
              Supporting your digital journey
            </p>
          </div>
          <div className="space-x-4">
            <button className="text-sm hover:text-indigo-400">FAQs</button>
            <button className="text-sm hover:text-indigo-400">Support</button>
            <button className="text-sm hover:text-indigo-400">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
