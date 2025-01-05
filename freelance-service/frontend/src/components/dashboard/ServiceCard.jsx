import React from "react";
import { BsClock, BsCash, BsFileText, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import ServiceDetailModal from "./ServiceDetailModal";
const ServiceCard = ({ service, onSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const getStatusColor = (status) => {
    const colors = {
      "In Progress": "bg-blue-100 text-blue-800",
      Completed: "bg-green-100 text-green-800",
      "At Risk": "bg-yellow-100 text-yellow-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const currentPhase = service.phases?.find(
    (phase) => phase.status === "In Progress"
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{service.name}</h3>
          <span className="text-sm text-gray-500">{service.category}</span>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
            service.status
          )}`}
        >
          {service.status}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{service.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${service.progress}%` }}
            ></div>
          </div>
        </div>

        {currentPhase && (
          <div className="p-3 bg-gray-50 rounded-lg text-sm">
            <p className="font-medium">{currentPhase.name}</p>
            <p className="text-gray-500 text-xs mt-1">
              Due: {currentPhase.paymentDetails.dueDate}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-2">
            <button className="p-2 text-gray-500 hover:text-indigo-600">
              <BsFileText />
            </button>
            <button className="p-2 text-gray-500 hover:text-indigo-600">
              <BsCash />
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Details <BsArrowRight />
          </button>
        </div>
        <ServiceDetailModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          service={service}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
