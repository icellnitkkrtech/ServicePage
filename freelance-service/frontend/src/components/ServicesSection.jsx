import React from "react";

const ServicesSection = () => {
  const services = [
    { title: "Web Development", description: "Modern web solutions." },
    { title: "SEO Optimization", description: "Boost your site rankings." },
    { title: "Digital Marketing", description: "Expand your reach." },
    { title: "E-Commerce", description: "Custom online stores." },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;