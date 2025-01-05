import React, { useState } from "react";
import { BsSearch, BsFilter } from "react-icons/bs";
import ServiceCard from "./ServiceCard";
import { services } from "./data/DummyData";

const ServicesList = ({ onServiceSelect, viewMode }) => {
  const [filters, setFilters] = useState({ search: "", category: "all" });

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.category === "all" || service.category === filters.category)
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <BsSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select
            className="border rounded-lg px-4 py-2"
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="all">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onSelect={onServiceSelect}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-8 text-gray-500">No services found</div>
      )}
    </div>
  );
};

export default ServicesList;
