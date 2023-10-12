import { combineReducers } from "@reduxjs/toolkit";
import sheetController from "./sheetController";

const reducers = combineReducers({
    sheetController
})

export type RootState = ReturnType<typeof reducers>

export default reducers