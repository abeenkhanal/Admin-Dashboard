import React from 'react'
import { FaComputer } from "react-icons/fa6";
const data = [
    { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { name: 'Angelica Ramos', position: 'CEO', office: 'London', age: 47, startDate: '2009/10/09', salary: '$1,200,000' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, startDate: '2012/10/13', salary: '$132,000' },
    { name: 'Brenden Wagner', position: 'Software Engineer', office: 'San Francisco', age: 28, startDate: '2011/06/07', salary: '$206,850' },
    { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/28', salary: '$162,700' },
    { name: 'Angelica Ramos', position: 'CEO', office: 'London', age: 47, startDate: '2009/10/09', salary: '$1,200,000' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/12', salary: '$86,000' },
    { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, startDate: '2012/10/13', salary: '$132,000' },
    { name: 'Brenden Wagner', position: 'Software Engineer', office: 'San Francisco', age: 28, startDate: '2011/06/07', salary: '$206,850' },
    
  ];

const Table = () => {
    const totalEntries = 57; // Total number of entries
    const entriesPerPage = 10; // Number of entries per page
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
  
  return (
    <div className="p-4  mt-6">
        <div className='bg-slate-200'>
    <h2 className="text-2xl  mb-4 flex items-center gap-4"><FaComputer />Easy Dynamic Tables</h2>
    <table className="min-w-full border rounded shadow bg-slate-200">
      <thead>
        <tr className=''>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Position</th>
          <th className="py-2 px-4 border-b">Office</th>
          <th className="py-2 px-4 border-b">Age</th>
          <th className="py-2 px-4 border-b">Start Date</th>
          <th className="py-2 px-4 border-b">Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{item.name}</td>
            <td className="py-2 px-4 border-b">{item.position}</td>
            <td className="py-2 px-4 border-b">{item.office}</td>
            <td className="py-2 px-4 border-b">{item.age}</td>
            <td className="py-2 px-4 border-b">{item.startDate}</td>
            <td className="py-2 px-4 border-b">{item.salary}</td>
          </tr>
        ))}
      </tbody>
      
    </table>

    <div className="flex items-center justify-between mt-4 bg-slate-200  p-3 h-14">
      <p>
        Showing 1 to {entriesPerPage} of {totalEntries} entries
      </p>
      <div className="flex items-center space-x-2">
        {/* Previous button (not interactive) */}
        <button className="px-3 py-1 rounded text-gray-400">
          Previous
        </button>
        
        {/* Render page numbers (not interactive) */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-2 py-1 rounded ${index === 0 ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
          >
            {index + 1}
          </button>
        ))}
        
        {/* Next button (not interactive) */}
        <button className="px-3 py-1 rounded text-blue-500">
          Next
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Table
