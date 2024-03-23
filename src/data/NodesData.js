import { useDispatch } from "react-redux"
import CustomeNode3 from "../component/CustomNode3"

const initialNodes=[
    {
        id:'1',
        data:{label:'Project', id:'1', tip:'This is where the work begins!!!',customColor:'bg-[#727581]'},
        position:{x:-200,y:200},
        type:'CustomNode1'
    },
    {
        id:'2',
        data:{label:'Research',id:'2',tip:'Get to research guys,come on',customColor:"bg-[#2750ff]"},
        position:{x:300,y:-200},
        type:'CustomNode2'

    },
    {
        id:'3',
        data:{label:'Planning',id:'3',tip:'Every Project needs planning, so here we are',customColor:"bg-[#ff1010]"},
        position:{x:300,y:0},
        type:'CustomNode2'
    },
    {
        id:'4',
        data:{label:'Designing',id:'4',tip:'',customColor:"bg-[#00ffeb]"},
        position:{x:300,y:200},
        type:'CustomNode2'

    },
    {
        id:'5',
        data:{label:'Manufacturing',id:'5',tip:'',customColor:"bg-[#ff8527]"},
        position:{x:300,y:400},
        type:'CustomNode2'
    },
    {
        id:'6',
        data:{label:'Sales / Marketing',id:'6',tip:'',customColor:"bg-[#ff34ed]"},
        position:{x:300,y:600},
        type:'CustomNode2'

    },
    {
        id:'7',
        data:{label:'Internal',id:'7',tip:'',customColor:"bg-[#2750ff]"},
        position:{x:700,y:-250},
        type:'CustomNode2'
    },
    {
        id:'8',
        data:{label:'External',id:'8',tip:'',customColor:"bg-[#2750ff]"},
        position:{x:700,y:-150},
        type:'CustomNode2'
    },
    {
        id:'9',
        data:{label:'PRD',id:'9',tip:'',customColor:"bg-[#ff1010]"},
        position:{x:700,y:-50},
        type:'CustomNode2'
    },
    {
        id:'10',
        data:{label:'Specs',id:'10',tip:'',customColor:"bg-[#ff1010]"},
        position:{x:700,y:50},
        type:'CustomNode2'
    },
    {
        id:'11',
        data:{label:'Hardware',id:'11',tip:'hardware requirements',customColor:"bg-[#00ffeb]"},
        position:{x:700,y:150},
        type:'CustomNode2'
    },
    {
        id:'12',
        data:{label:'Software',id:'12',tip:'Technologies needed',customColor:"bg-[#00ffeb]"},
        position:{x:700,y:250},
        type:'CustomNode2'

    },
    {
        id:'13',
        data:{label:'Material',id:'13',tip:'',customColor:"bg-[#ff8527]"},
        position:{x:700,y:350},
        type:'CustomNode2'
    },
    {
        id:'14',
        data:{label:'Production',id:'14',tip:'',customColor:"bg-[#ff8527]"},
        position:{x:700,y:450},
        type:'CustomNode2'
    },
    {
        id:'15',
        data:{label:'Online',id:'15',tip:'',customColor:"bg-[#ff34ed]"},
        position:{x:700,y:550},
        type:'CustomNode2'
    },
    {
        id:'16',
        data:{label:'Dealership',id:'16',tip:'',customColor:"bg-[#ff34ed]"},
        position:{x:700,y:650},
        type:'CustomNode2'
    },
    {
        id:'17',
        data:{label:'B2C',customColor:"bg-[#2750ff]"},
        position:{x:1100,y:-300},
        type:'CustomNode2'
    },
    {
        id:'18',
        data:{label:'B2C',customColor:"bg-[#2750ff]"},
        position:{x:1100,y:-200},
        type:'CustomNode2'
    },
    {
        id:'19',
        data:{label:"Online",clickable:true,customColor:""},
        position:{x:1600,y:-390},
        type:"CustomNode3"


    },
    {
        id:'20',
        data:{label:"Interview",clickable:true,customColor:""},
        position:{x:1600,y:-330},
        type:"CustomNode3"

    },
    {
        id:'21',
        data:{label:"Public Data",clickable:true,customColor:""},
        position:{x:1600,y:-270},
        type:"CustomNode3"

    },
    {
        id:'22',
        data:{label:"Health", clickable:true,customColor:""},
        position:{x:1600,y:-210},
        type:"CustomNode3"
    }
    
]


export default initialNodes