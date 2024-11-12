import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { BsGift } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { RiBaseStationLine } from "react-icons/ri";
import { FaGift } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className="sticky top-0 w-full bg-white shadow-md  shadow-gray-300  h-fit grid grid-cols-6 gap-10 px-4">
    <div className="flex justify-between items-center ">
      <img
        src="https://demo.dashboardpack.com/architectui-html-pro/assets/images/logo-inverse.png"
        alt="Logo"
        className="h-14 object-contain aspect-video"
      />
      <div>
        <IoMenu className="text-blue-700 flex justify-center items-center text-3xl" />
      </div>
    </div>

    <div className="col-span-3 flex justify-between">
      <div className="flex justify-center gap-8  items-center">
        <div className="text-2xl text-blue-700 bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center">
          <IoSearchOutline />
        </div>
        <div className=" flex gap-2 justify-center items-center">
          <div>
            <BsGift />
          </div>
          <div>Mega menu</div>
          <div>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex  gap-2 justify-center items-center">
          <div>Setting</div>
          <div>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex  gap-2  justify-center items-center">
          <div>Project</div>
          <div>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="flex text-xl justify-center items-center gap-4">
        <div className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center text-blue-700">
          <RxDashboard />
        </div>
        <div className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center  text-blue-700">
          <IoIosNotifications />
        </div>
        <div className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center  text-blue-700">
          <GrLanguage />
        </div>
        <div className="bg-gray-300 h-10 w-10 rounded-full flex justify-center items-center  text-blue-700">
          <RiBaseStationLine />
        </div>
      </div>
    </div>
    
    <div className=" col-span-2 items-center flex justify-between">
      <div className=" flex justify-start items-center gap-5   h-full px-2">
    <div className="flex gap-2 items-center">
    <div className="h-10 w-10 overflow-clip bg-slate-500 rounded-full flex justify-center items-center">
          <div>
            <img
              className="h-full w-full"
              src="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
              alt=""
            />
          </div>
         
        </div>
        <div>
          <FaAngleDown />
        </div>
  
    </div>
        
        <div className="flex flex-col items-center h-full justify-start ">
          <div className=" font-medium ">Alin Mclourd</div>
          <div className="text-sm">VP   People Manager</div>
        </div>
      </div>
      <div className="h-10 w-10 bg-blue-700 rounded-md text-white items-center justify-center flex">
      <FaGift />

      </div>
      <div className="flex justify-center items-center"> <IoMenu className="text-blue-700 flex justify-center items-center text-3xl" /></div>
    </div>
  </div>
  )
}

export default Nav
