import React from 'react'
import { setModalStatus } from '../redux/slice/appSlice';
import { useDispatch } from 'react-redux';
import { Handle, Position } from 'reactflow';

const CustomNode3 = ({data,isConnectable}) => {
    const dispatch=useDispatch()

  return (
    <div  onClick={()=>dispatch(setModalStatus(true))} className="min-w-[150px] lg:min-w-[200px] h-[50px] flex justify-center items-center rounded-md text-white font-bold uppercase  text-xs lg:text-[16px]  bg-[#2750ff]">

    
        <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
        <div>
            {data.label}
        </div>



    </div>
  )
}

export default CustomNode3