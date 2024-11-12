import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Common/Navbar/nav'
import Sidebar from './Common/Sidebar/side'
// import Side from './Component/Sidebar/side'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='h-screen'>
  <Nav />
<div className='flex'>
<Sidebar/>
<div>
  rtrtrr
</div>
</div>
<div className="">
            <Routes>
              <Route path="/" element={<SalesP />} />
              <Route path="/defaultp" element={<DefaultP />} />
              <Route path="/darkmenup" element={<DarkMenuP />} />
              <Route path="/editorp" element={<EditorP />} />
              <Route path="/mailboxp" element={<MailBoxP />} />
              <Route path="/chatp" element={<ChatP />} />
              <Route path="/faqp" element={<FaqP />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/datepicker" element={<DatePicker />} />
              <Route path="/loadingindicators" element={<LOadingIndicators />} />
              <Route path="/modal" element={<Modal />} />
              <Route path="/statecolor" element={<StateColor />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/dropdowns" element={<Dropdowns />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/invoicep" element={<InvoiceP />} />
              <Route path="/productsp" element={<ProductsP />} />
              <Route path="/productsdetailsp" element={<ProductsDetailsP />} />
              <Route path="/cartp" element={<CartP />} />
              <Route path="/checkoutp" element={<CheckoutP />} />
              <Route path="/chartjs" element={<ChartJs />} />

              

            </Routes>
          </div>
</div>
  )
}

export default App
