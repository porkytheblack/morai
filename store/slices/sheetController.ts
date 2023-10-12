import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "."

interface SheetState {
    isOpen: boolean
    position: number
}


interface State {
    conversationSheetState: SheetState
    taskSheetState: SheetState
    tagsSheetState: SheetState
    settingsSheetState: SheetState
    updateTagSheetState: SheetState
}

const initialState: State = {
    conversationSheetState: {
        isOpen: false,
        position: 0
    },
    taskSheetState: {
        isOpen: false,
        position: 0
    },
    tagsSheetState: {
        isOpen: false,
        position: 0
    },
    settingsSheetState: {
        isOpen: false,
        position: 0
    },
    updateTagSheetState: {
        isOpen: false,
        position: 0
    }
}


const slice = createSlice({
    name: "sheetControllerState",
    initialState,
    reducers: {
        modifyConversationSheetState(state, data){
            state.conversationSheetState = {
                ...state.conversationSheetState,
                ...data.payload
            }
        },
        modifyTaskSheetState(state, data){
            state.taskSheetState = {
                ...state.taskSheetState,
                ...data.payload
            }
        },
        modifyTagsSheetState(state, data){
            state.tagsSheetState = {
                ...state.tagsSheetState,
                ...data.payload
            }
        },
        modifySettingsSheetState(state, data){
            state.settingsSheetState = {
                ...state.settingsSheetState,
                ...data.payload
            }
        },
        modifyUpdateTagSheetState(state, data){
            state.updateTagSheetState = {
                ...state.updateTagSheetState,
                ...data.payload
            }
        },
        
    }
})


export const { modifyConversationSheetState, modifyTaskSheetState, modifyTagsSheetState, modifySettingsSheetState, modifyUpdateTagSheetState } = slice.actions


export default slice.reducer


export const selectConversationSheetState = (state: RootState) => {
    return state.sheetController.conversationSheetState
}
export const selectTaskSheetState = (state: RootState) => {
    return state.sheetController.taskSheetState
}
export const selectTagsSheetState = (state: RootState) => {
    return state.sheetController.tagsSheetState
}
export const selectSettingsSheetState = (state: RootState)=>{
    return state.sheetController.settingsSheetState
}
export const selectUpdateTagSheetState = (state: RootState)=>{
    return state.sheetController.updateTagSheetState
}