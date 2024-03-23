import React, { useCallback } from 'react'
import { Handle, Position } from 'reactflow';

import { Tooltip } from 'react-tooltip';


const CustomNode1 = ({data,isConnectable}) => {

  return (
    <div data-tooltip-id={`id${data.id}`} data-tooltip-delay-hide={1000} className={`min-w-[150px] lg:min-w-[250px] h-[50px] flex justify-center items-center rounded-md text-white font-bold uppercase  text-xs lg:text-[16px] ${data.customColor}`}>

        <div className=''>
            {data.label}
        </div>

      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />

      <Tooltip id={`id${data.id}`} content={data.tip}/>

    </div>

    
    
  )
}

export default CustomNode1