import React  from 'react'
import { Tooltip } from 'react-tooltip';
import { Handle, Position } from 'reactflow';



const CustomNode2 = ({data,isConnectable}) => {


  return (
    <div data-tooltip-id={`id${data.id}`} data-tooltip-delay-hide={1000} className={`min-w-[150px] lg:min-w-[250px] h-[50px] flex justify-center items-center rounded-md text-white font-bold uppercase  text-xs lg:text-[16px] ${data.customColor}`}>

        <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
        <div>
            {data.label}
        </div>

      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />

  
      {
        (data.tip?.length>=0) ?(
          <Tooltip id={`id${data.id}`} content={data.tip}  place='top-end'/>
        ):(<></>)
      }
    </div>
  )
}

export default CustomNode2