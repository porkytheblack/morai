import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import reducers from "./slices";


const store = configureStore({
    reducer: reducers
})


export type AppDispatch = typeof store.dispatch 

export const useAppDispatch = useDispatch<AppDispatch>

export const useAppSelector: TypedUseSelectorHook<any> = useSelector


export default store