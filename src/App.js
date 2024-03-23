import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import { MdOutlineLightMode ,MdDarkMode  } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setBackgroundMode } from './redux/slice/appSlice';

function App() {
  const { backgroundMode}=useSelector((state)=>state.app)
  const dispatch=useDispatch()


  const handleBackgroundMode=()=>{
    console.log("button clicked")
    if(backgroundMode==="light"){
      dispatch(setBackgroundMode("dark"))
    } else {
      dispatch(setBackgroundMode("light"))
    }
  }
  return (
    <div className={`App text  w-full  h-[100vh] ${ (backgroundMode==="light") ?"bg-gradient-to-r from-[#070709] from-0% to-[#191562] to-100%" :"bg-gradient-to-r from-[#7ac2f4] from-0%  to-[#ffb4ef]"} to-100%`}>

      <div className='relative'>

        <button onClick={handleBackgroundMode} 
          className={` uppercase z-10 absolute top-5 left-5 px-5 py-3 rounded-md flex gap-x-2 items-center hover:scale-110 transition-all duration-1000 text-lg ${(backgroundMode==="dark") ? "bg-black text-white" : "bg-white text-black"}`}>
          <div> 
            {
              backgroundMode === "dark"  ?  <MdDarkMode/> :<MdOutlineLightMode/>
            }
          </div>
          <div>{backgroundMode}</div>
        </button>

        <Home/>
        
        
        
      </div>
      
    </div>
  );
}

export default App;
