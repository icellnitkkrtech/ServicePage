import React, { useState } from "react";
import {
  BsPersonCircle,
  BsBell,
  BsShield,
  BsGlobe,
  BsPalette,
  BsEnvelope,
} from "react-icons/bs";

const Settings = () => {
  const [settings, setSettings] = useState({
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+91 98765 43210",
      company: "Tech Solutions Inc",
    },
    notifications: {
      email: true,
      push: true,
      sms: false,
      updates: true,
    },
    privacy: {
      showProfile: true,
      showActivity: true,
    },
    preferences: {
      language: "en",
      theme: "light",
      timezone: "Asia/Kolkata",
    },
  });

  const handleSaveChanges = () => {
    // Handle saving changes
    console.log("Saving settings:", settings);
  };

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BsPersonCircle className="text-2xl text-gray-400" />
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={settings.profile.name}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, name: e.target.value },
                })
              }
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, email: e.target.value },
                })
              }
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={settings.profile.phone}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, phone: e.target.value },
                })
              }
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              value={settings.profile.company}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: { ...settings.profile, company: e.target.value },
                })
              }
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BsBell className="text-2xl text-gray-400" />
          <h2 className="text-xl font-semibold">Notification Settings</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-700 capitalize">
                {key} Notifications
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        [key]: !value,
                      },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BsShield className="text-2xl text-gray-400" />
          <h2 className="text-xl font-semibold">Privacy Settings</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(settings.privacy).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-700 capitalize">Show {key}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    setSettings({
                      ...settings,
                      privacy: { ...settings.privacy, [key]: !value },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveChanges}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
