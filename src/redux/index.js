import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice"

const rootReducer=combineReducers({
    app:appReducer
})

export default rootReducer