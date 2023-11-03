import { combineReducers } from "@reduxjs/toolkit";
import sheetController from "./sheetController";
import notionReducer from "./notion"

const reducers = combineReducers({
    sheetController,
    notionReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers