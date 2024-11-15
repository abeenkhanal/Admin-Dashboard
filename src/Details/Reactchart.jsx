import React from 'react'
import { Chart } from 'react-google-charts';
const data1 = [
    ["x", "Sales"],
    [1, 200], [2, 500], [3, 300], [4, 700], [5, 600], [6, 400], [7, 800], [8, 500], [9, 600], [10, 700]
  ];
  
  const data2 = [
    ["x", "Income"],
    [1, 1000], [2, 1200], [3, 900], [4, 1100], [5, 1300], [6, 1000], [7, 1400], [8, 900], [9, 1200], [10, 1500]
  ];
  
  const data3 = [
    ["x", "Sales"],
    [1, 300], [2, 600], [3, 400], [4, 800], [5, 700], [6, 500], [7, 900], [8, 600], [9, 750], [10, 1000]
  ];
  
  const data4 = [
    ["x", "Revenue"],
    [1, 400], [2, 300], [3, 500], [4, 700], [5, 650], [6, 600], [7, 800], [8, 700], [9, 750], [10, 900]
  ];

  const options = (color) => ({
    legend: "none",
    hAxis: { textPosition: 'none' },
    vAxis: {
      textPosition: 'none',
      viewWindow: { min: 200, max: 900 }, // Adjust viewWindow for a focused range
    },
    colors: [color],
    lineWidth: 4, // Increased line width for a bolder line
  });

  
const Reactchart = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-6 mt-44 ">

      <div className="p-4 bg-white shadow  ">
        <h2 className="text-gray-700 text-lg font-medium mb-2">$874</h2>
        <p className="text-gray-500 text-sm mb-4">sales last month</p>
        <Chart
          chartType="LineChart"
          data={data1}
          options={options("#4CAF50")}
          width="100%"
          height="50px"
          
        />
      </div>
      
      <div className="p-4 bg-white shadow  ">
        <h2 className="text-gray-700 text-lg font-medium mb-2">$1283</h2>
        <p className="text-gray-500 text-sm mb-4">sales income</p>
        <Chart
          chartType="LineChart"
          data={data2}
          options={options("#2196F3")}
          width="100%"
          height="50px"
          
        />
      </div>

      <div className="p-4 bg-white shadow ">
        <h2 className="text-gray-700 text-lg font-medium mb-2">$1286</h2>
        <p className="text-gray-500 text-sm mb-4">last month sales</p>
        <Chart
          chartType="LineChart"
          data={data3}
          options={options("#FFC107")}
          width="100%"
          height="50px"
         
        />
      </div>

      <div className="p-4 bg-white shadow ">
        <h2 className="text-gray-700 text-lg font-medium mb-2">$564</h2>
        <p className="text-gray-500 text-sm mb-4">total revenue</p>
        <Chart
          chartType="LineChart"
          data={data4}
          options={options("#F44336")}
          width="100%"
          height="50px"
         
        />
      </div>
    </div>

  )
}

export default Reactchart
