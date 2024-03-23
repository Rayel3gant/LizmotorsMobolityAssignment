import React from 'react'
import BarGraph from './BarGraph';
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setModalStatus } from '../redux/slice/appSlice';
import graphData from '../data/GraphData';

const BarModal = () => {
  const dispatch=useDispatch()
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <button onClick={()=>dispatch(setModalStatus(false))} className='absolute top-20 right-20 min-w-[120px] min-h-[50px] flex gap-x-2 place-content-center bg-slate-50 border-black border-2 rounded-md items-center'>
        <div>
          Close
        </div>

        <MdClose/>
      </button>

      <div className='w-11/12 mx-auto max-w-[800px] flex flex-col gap-y-4 py-6 px-5 bg-richblack-5 rounded-md'>
        <BarGraph graphData={graphData[0]}/>
      </div>
    </div>
  )
}

export default BarModal