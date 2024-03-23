import { createSlice } from "@reduxjs/toolkit"

const initialState={
    modalVisibility: false,
    backgroundMode: "light"
}



const appSlice=createSlice({
    name:"appStatus",
    initialState:initialState,
    reducers:{
        setModalStatus(state,value){
            state.modalVisibility=value.payload
        },
        setBackgroundMode(state,value){
            state.backgroundMode=value.payload
        }
    }
})

export const { setModalStatus , setBackgroundMode } = appSlice.actions

export default appSlice.reducer