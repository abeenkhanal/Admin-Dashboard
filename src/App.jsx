import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Common/Navbar/nav'
import Sidebar from './Component/Common/Sidebar/side'
// import Side from './Component/Sidebar/side'
import { Route, Routes } from "react-router-dom";
import Analytics from './Component/Pages/MDashboard/analytics';
import Commerce from './Component/Pages/MDashboard/commerce';
import Sales from './Component/Pages/MDashboard/Sales';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen   '>
      <Nav />
      <div className='flex w-full bg-[#F1F4F6] '>
        <Sidebar />
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
