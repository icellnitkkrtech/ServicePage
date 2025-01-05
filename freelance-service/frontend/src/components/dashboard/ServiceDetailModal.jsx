import React, { useState } from "react";
import {
  BsX,
  BsClock,
  BsCash,
  BsFileText,
  BsChat,
  BsCheckCircle,
  BsDownload,
} from "react-icons/bs";

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
  const [activeTab, setActiveTab] = useState("details");

  if (!isOpen) return null;

  const tabs = [
    { id: "details", label: "Details" },
    { id: "payments", label: "Payments" },
    { id: "documents", label: "Documents" },
    { id: "timeline", label: "Timeline" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Project Info</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-500">Status:</span>{" "}
                    {service.status}
                  </p>
                  <p>
                    <span className="text-gray-500">Start Date:</span>{" "}
                    {service.startDate}
                  </p>
                  <p>
                    <span className="text-gray-500">End Date:</span>{" "}
                    {service.endDate}
                  </p>
                  <p>
                    <span className="text-gray-500">Budget:</span>{" "}
                    {service.totalBudget}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Current Phase</h3>
                {service.phases.find((p) => p.status === "In Progress") && (
                  <div className="text-sm">
                    <p className="font-medium">
                      {
                        service.phases.find((p) => p.status === "In Progress")
                          .name
                      }
                    </p>
                    <p className="text-gray-500 mt-1">
                      Due:{" "}
                      {
                        service.phases.find((p) => p.status === "In Progress")
                          .paymentDetails.dueDate
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Project Phases</h3>
              {service.phases.map((phase, index) => (
                <div key={phase.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{phase.name}</h4>
                      <p className="text-sm text-gray-500">
                        Amount: {phase.paymentDetails.amount}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        phase.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : phase.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  {phase.deliverables && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Deliverables:</p>
                      <ul className="mt-1 space-y-1">
                        {phase.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-center gap-2"
                          >
                            <BsCheckCircle
                              className={
                                item.status === "Approved"
                                  ? "text-green-500"
                                  : "text-gray-400"
                              }
                            />
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "payments":
        return (
          <div className="space-y-4">
            {service.phases.map((phase) => (
              <div key={phase.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{phase.name}</h4>
                    <p className="text-sm text-gray-500">
                      {phase.paymentDetails.status === "Paid"
                        ? `Paid on ${phase.paymentDetails.paidDate}`
                        : `Due on ${phase.paymentDetails.dueDate}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{phase.paymentDetails.amount}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        phase.paymentDetails.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {phase.paymentDetails.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "documents":
        return (
          <div className="space-y-4">
            {service.documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <BsFileText className="text-gray-400" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      Uploaded: {doc.uploadedAt}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                  <BsDownload />
                </button>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-semibold">{service.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <BsX size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b">
            <div className="flex space-x-4 p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === tab.id
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
