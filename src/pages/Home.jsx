import React, { useCallback, useState } from 'react'
import ReactFlow, { Background, Controls,applyNodeChanges,applyEdgeChanges , addEdge } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode1 from '../component/CustomNode1'
import CustomNode2 from '../component/CustomNode2'
import CustomNode3 from '../component/CustomNode3'
import initialEdges from "../data/EdgesData"
import BarModal from '../component/BarModal'
import { useSelector } from 'react-redux'
import initialNodes from '../data/NodesData'
const nodeTypes={
    CustomNode1 : CustomNode1,
    CustomNode2 : CustomNode2,
    CustomNode3: CustomNode3
}




const Home = () => {
    const [nodes,setNodes]=useState(initialNodes)
    const [edges,setEdges]=useState(initialEdges)
    const { modalVisibility } =useSelector(state=>state.app)

    const nodeChangeHandler=useCallback(
        (changes)=>setNodes((nds)=>applyNodeChanges(changes,nds))
    )

    const edgeChangeHandler=useCallback(
        (changes)=>setEdges((eds)=>applyEdgeChanges(changes,eds))
    )

    const edgeConnectionHandler=useCallback(
        (params)=>setEdges((eds)=>addEdge(params,eds))
    )


  return (
    <div className='w-full h-[100vh] '>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={nodeChangeHandler}
            onEdgesChange={edgeChangeHandler}
            onConnect={edgeConnectionHandler}
            nodeTypes={nodeTypes}
            fitView
            
        >
            <Controls/>
        </ReactFlow>

        {
            modalVisibility && <BarModal/>
        }
    </div>
    
  )
}

export default Home