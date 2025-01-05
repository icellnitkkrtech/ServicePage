import React from "react";
import {
  BsGrid,
  BsClock,
  BsCash,
  BsCalendar,
  BsCheckCircle,
} from "react-icons/bs";
import { stats, services, activities } from "./data/DummyData";

const Overview = () => {
  const recentActivities = activities
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 3);

  const upcomingPayments = services
    .flatMap((service) =>
      service.phases
        .filter((phase) => phase.paymentDetails.status === "Pending")
        .map((phase) => ({
          serviceName: service.name,
          phaseName: phase.name,
          amount: phase.paymentDetails.amount,
          dueDate: phase.paymentDetails.dueDate,
        }))
    )
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">Active Projects</h3>
            <BsGrid className="text-indigo-500" />
          </div>
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            {stats.overview.activeProjects}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Total: {stats.overview.totalProjects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">Total Budget</h3>
            <BsCash className="text-green-500" />
          </div>
          <p className="text-2xl font-bold text-green-600 mt-2">
            {stats.overview.totalBudget}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Paid: {stats.overview.totalPaid}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">Pending Payments</h3>
            <BsClock className="text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-yellow-600 mt-2">
            {stats.overview.pendingPayments}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Next due: {stats.expenditure.nextDueDate}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-500 text-sm">Completed Projects</h3>
            <BsCheckCircle className="text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {stats.overview.completedProjects}
          </p>
        </div>
      </div>

      {/* Upcoming Payments */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Payments</h2>
        <div className="space-y-4">
          {upcomingPayments.map((payment, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium">{payment.serviceName}</h3>
                <p className="text-sm text-gray-500">{payment.phaseName}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-indigo-600">{payment.amount}</p>
                <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <p className="text-gray-600">{activity.message}</p>
                <span className="text-sm text-gray-500">
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
