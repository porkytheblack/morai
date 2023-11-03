import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Notion from "../../libs/notion";
import { DatabaseObjectResponse, PageObjectResponse, PartialPageObjectResponse } from "../../types/api";
import { RootState } from ".";


export const searchPages = createAsyncThunk("/search-pages", async (args: string | null | undefined = null, thunkAPI)=>{
    const notion = new Notion()

    const response = await notion.searchPages(args ?? "")

    return response
})

export const searchDatabases = createAsyncThunk("/search-databases", async (args: string | null | undefined = null, thunkAPI)=>{
    const notion = new Notion()

    const response = await notion.searchDatabases(args ?? "")

    return response
})





interface NotionState {
    pages: Array<PageObjectResponse>
    pages_loading: boolean
    pages_error: string | null
    current_page: PageObjectResponse | null
    databases: Array<DatabaseObjectResponse>
    databases_loading: boolean
    databases_error: string | null,
    current_database: DatabaseObjectResponse | null
}

const initialState: NotionState = {
    pages: [],
    pages_loading: false,
    pages_error: null,
    current_page: null,
    databases: [],
    databases_loading: false,
    databases_error: null,
    current_database: null
}

const notionSlice = createSlice({
    name: "notion",
    initialState,
    reducers: {
        setCurrentPage: (state, { payload })=>{
            state.current_page = payload ?? null
        },
        setCurrentDatabase: (state, {payload})=>{
            state.current_database = payload ?? null
        }
    },
    extraReducers: (builder)=>{

        // Pages
        builder.addCase(searchPages.pending, (state, action)=>{
            state.pages_loading = true
            state.pages_error = null
        })
        builder.addCase(searchPages.fulfilled, (state,action)=>{
            state.pages = action.payload as Array<PageObjectResponse>
            state.pages_loading = false
        })
        builder.addCase(searchPages.rejected, (state,action)=>{
            state.pages_loading  = false;
            state.pages_error = action.payload as any

        })

        // Databases
        builder.addCase(searchDatabases.pending, (state,action)=> {

            state.databases_loading = true;
            state.databases_error = null;

        })
        builder.addCase(searchDatabases.fulfilled, (state,action)=> {

            state.databases_loading = false;
            state.databases_error = null;
            state.databases = action.payload ?? []

        })
        builder.addCase(searchDatabases.rejected, (state,action)=> {

            state.databases_loading = false;
            state.databases_error = action.payload as any;

        })


    
    }
})

export const { setCurrentPage, setCurrentDatabase } = notionSlice.actions

export default notionSlice.reducer;


export const selectPagesSearchFeedback = (state: RootState) => {
    const data = state.notionReducer
    return {
        data: data.pages ?? [],
        loading: data.pages_loading ?? false,
        error: data.pages_error ?? null
    }
}

export const selectDatabasesSearchFeedback = (state: RootState) => {
    const data = state.notionReducer

    return {
        data: data.databases ?? [],
        loading: data.databases_loading,
        error: data.databases_error ?? null
    }
}


export const selectCurrentPage = (state: RootState) => {
    const data = state.notionReducer;
    return data.current_page
}


export const selectCurrentDatabase = (state: RootState) => {
    const data = state.notionReducer;
    return data?.current_database
}