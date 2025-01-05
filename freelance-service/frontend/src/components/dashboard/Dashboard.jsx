import React, { useState } from "react";
import { BsGrid, BsListUl, BsSun, BsMoon } from "react-icons/bs";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ServicesList from "./ServiceList";
import NotificationsPanel from "./NotificationPanel";
import SupportSection from "./SupportSection";
import Overview from "./Overview";
import Settings from "./Settings";
import AddWork from "./AddWork";
import { useTheme } from "./ThemeProvider";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col min-h-screen">
          <div
            className={`flex justify-between items-center p-4 ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white"
            } border-b transition-colors duration-200`}
          >
            <h1
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>

            <div className="flex items-center gap-4">
              {activeTab === "services" && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors duration-200 ${
                      viewMode === "grid"
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-indigo-100 text-indigo-600"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    <BsGrid />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors duration-200 ${
                      viewMode === "list"
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-indigo-100 text-indigo-600"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    <BsListUl />
                  </button>
                </div>
              )}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  darkMode
                    ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {darkMode ? <BsSun /> : <BsMoon />}
              </button>
            </div>
          </div>

          <main
            className={`flex-1 p-6 transition-colors duration-200 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}
          >
            <div className="container mx-auto">
              <div className="mb-6">
                {activeTab === "dashboard" && <Overview />}
                {activeTab === "services" && (
                  <ServicesList
                    onServiceSelect={setSelectedService}
                    viewMode={viewMode}
                  />
                )}
                {activeTab === "addWork" && <AddWork />}
                {activeTab === "notifications" && <NotificationsPanel />}
                {activeTab === "support" && <SupportSection />}
                {activeTab === "settings" && <Settings />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
