import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Common/Navbar/nav'
import Sidebar from './Component/Common/Sidebar/side'
// import Side from './Component/Sidebar/side'
import {  Route, Routes } from "react-router-dom";
import Analytics from './Component/Pages/MDashboard/analytics';
import Commerce from './Component/Pages/MDashboard/commerce';

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='h-screen'>
  <Nav />
<div className='flex'>
<Sidebar/>
<div>
<Routes>
              <Route path="/" element={<Analytics />} />
              <Route path="/commerce" element={<Commerce />} />
            </Routes>
</div>
</div>

</div>
  )
}

export default App
