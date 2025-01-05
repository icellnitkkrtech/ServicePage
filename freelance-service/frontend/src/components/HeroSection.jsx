import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-blue-500 text-white py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyWebsite</h1>
      <p className="text-lg mb-6">
        We offer amazing services tailored just for you!
      </p>
      <div>
        <a
          href="#services"
          className="bg-white text-blue-500 py-2 px-6 rounded-md font-medium mr-4 hover:bg-gray-200"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="bg-blue-700 py-2 px-6 rounded-md font-medium hover:bg-blue-800"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;