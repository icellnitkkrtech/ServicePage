import React, { useState } from "react";
import { BsBell, BsCheck2All, BsTrash } from "react-icons/bs";
// In any component
import { notifications } from "./data/DummyData";
const NotificationsPanel = () => {
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <BsBell className="mr-2" /> Notifications
        </h2>
        <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm">
          {notifications.filter((n) => !n.read).length} New
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`border rounded-lg p-4 ${
              !notification.read ? "bg-indigo-50" : ""
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <span className="text-sm text-gray-500">
                  {notification.timestamp}
                </span>
              </div>
              <div className="flex space-x-2">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-indigo-600 hover:text-indigo-800"
                    title="Mark as read"
                  >
                    <BsCheck2All size={20} />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  <BsTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No notifications to display
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
