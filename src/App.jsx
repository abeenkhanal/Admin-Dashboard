import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Navbar/nav'
import Sidebar from './Component/Sidebar/side'
// import Side from './Component/Sidebar/side'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Nav/>
<Sidebar/>
</>
  )
}

export default App
