import React from "react";
import { Chart } from "react-google-charts";
import { AiOutlineDelete } from "react-icons/ai";

const Activeusers = () => {
  const users = [
    {
      id: "#345",
      name: "John Doe",
      role: "Web Developer",
      city: "Madrid",
      status: "PENDING",
      statusColor: "bg-yellow-400",
      chartType: "PieChart",
      chartData: [["Task", "Hours per Day"], ["Work", 8], ["Other", 4]],
    },
    {
      id: "#347",
      name: "Ruben Tillman",
      role: "UI Designer",
      city: "Berlin",
      status: "COMPLETED",
      statusColor: "bg-green-400",
      chartType: "LineChart",
      chartData: [["Day", "Sales"], [1, 10], [2, 30], [3, 40]],
    },
    {
      id: "#321",
      name: "Elliot Huber",
      role: "Backend Engineer",
      city: "London",
      status: "IN PROGRESS",
      statusColor: "bg-red-400",
      chartType: "BarChart",
      chartData: [["Metric", "Value"], ["Feature A", 40], ["Feature B", 60]],
    },
    {
      id: "#55",
      name: "Vinnie Wagstaff",
      role: "UI Designer",
      city: "Amsterdam",
      status: "ON HOLD",
      statusColor: "bg-blue-400",
      chartType: "AreaChart",
      chartData: [["Day", "Progress"], [1, 20], [2, 40], [3, 50]],
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
        <div className="space-x-2">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
            Last Week
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
            All Month
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="table-auto w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Sales</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="px-4 py-3">{user.id}</td>
              <td className="px-4 py-3">
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs">{user.role}</p>
                </div>
              </td>
              <td className="px-4 py-3">{user.city}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${user.statusColor}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <Chart
                  chartType={user.chartType}
                  width="100px"
                  height="50px"
                  data={user.chartData}
                  options={{ legend: "none", backgroundColor: "transparent" }}
                />
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-500 hover:underline">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="flex justify-center gap-5 mx-auto items-center p-4 border-t border-gray-200">
        <button className="flex items-center text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
          <AiOutlineDelete className="w-5 h-5 mr-2" />
          Delete
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default Activeusers;
