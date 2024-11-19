import React from "react";
import { Chart } from "react-google-charts";
import { AiOutlineUser, AiOutlineLineChart } from "react-icons/ai";
import { HiOutlineChartBar, HiOutlineRefresh } from "react-icons/hi";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Commute", 2],
  ["Leisure", 3],
  ["Sleep", 9],
];

const options = {
  pieHole: 0.4,
  is3D: false,
  legend: "none",
  colors: ["#34d399", "#fbbf24", "#f87171", "#60a5fa", "#a78bfa"],
};

const TopSellers = () => {
  const sellers = [
    {
      name: "Jeff Walberg",
      role: "Lead UX Developer",
      leads: 12,
      sales: 56.24,
      profileImg: "https://via.placeholder.com/100",
      bgImg:
        "https://images.unsplash.com/photo-1581090700227-2875fd4946dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      customImg:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      name: "John Rosenberg",
      role: "Short profile description",
      leads: 8,
      sales: 45.89,
      profileImg: "https://via.placeholder.com/100",
      bgImg:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Ruben Tillman",
      role: "Etiam sit amet orci eget",
      leads: 15,
      sales: 76.34,
      profileImg: "https://via.placeholder.com/100",
      bgImg:
        "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  return (
    <div className="bg-gray-100 p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Top Sellers Cards
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {sellers.map((seller, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
          >
            {/* Background Image */}
            <div
              className={`h-32 ${
                index === 0 ? "bg-cover bg-center relative" : "bg-cover bg-center"
              }`}
              style={{
                backgroundImage: `url(${seller.bgImg})`,
              }}
            >
              {index === 0 && seller.customImg && (
                <img
                  src={seller.customImg}
                  alt="Custom Highlight"
                  className="absolute bottom-2 right-2 w-12 h-12 rounded-full border-2 border-white"
                />
              )}
            </div>

            {/* Profile Section */}
            <div className="p-6 relative -mt-10">
              <img
                src={seller.profileImg}
                alt={seller.name}
                className="rounded-full w-20 h-20 mx-auto border-4 border-white"
              />
              <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
                {seller.name}
              </h2>
              <p className="text-sm text-center text-gray-500">{seller.role}</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded mt-4 w-full flex items-center justify-center hover:bg-green-600">
                <AiOutlineUser className="mr-2" />
                View Profile
              </button>
            </div>

            {/* Dynamic Content: Pie Chart or Stats */}
            <div className="p-6 border-t">
              {index === 1 ? (
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={"150px"}
                />
              ) : (
                <div className="text-center">
                  <p>
                    <span className="text-red-500 font-semibold">
                      {seller.leads} new leads,
                    </span>{" "}
                    <span className="text-green-500 font-semibold">
                      ${seller.sales.toFixed(2)}
                    </span>{" "}
                    in sales
                  </p>
                  <button className="border border-blue-500 text-blue-500 mt-4 px-4 py-2 rounded w-full flex items-center justify-center hover:bg-blue-100">
                    <HiOutlineChartBar className="mr-2" />
                    Full Report
                  </button>
                </div>
              )}
            </div>

            {/* Icons Section */}
            <div className="grid grid-cols-2 gap-4 p-6 border-t">
              <button className="text-blue-500 flex flex-col items-center hover:text-blue-600">
                <HiOutlineChartBar className="text-3xl" />
                <span className="text-sm mt-2">Reports</span>
              </button>
              <button className="text-green-500 flex flex-col items-center hover:text-green-600">
                <AiOutlineLineChart className="text-3xl" />
                <span className="text-sm mt-2">Leads</span>
              </button>
              <button className="text-purple-500 flex flex-col items-center hover:text-purple-600">
                <HiOutlineRefresh className="text-3xl" />
                <span className="text-sm mt-2">Activity</span>
              </button>
              <button className="text-yellow-500 flex flex-col items-center hover:text-yellow-600">
                <AiOutlineUser className="text-3xl" />
                <span className="text-sm mt-2">Settings</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
