import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        sidebarShow: false,
        sidebarUnfoldable: false,
        modifiers: {
            sortby: "relevance",
            rangestart: "10",
            rangeend: "50000",
            category: [] as string[],
            search:""
        }
    },
    reducers: {
        sidebarToggle: (state) => {
            state.sidebarShow = !state.sidebarShow
        },
        sidebarUnfoldableToggle: (state) => {
            state.sidebarUnfoldable = !state.sidebarUnfoldable
        },
        changeModifiers: (state, action: PayloadAction<any>) => {
            state.modifiers = { ...state.modifiers, ...action.payload }
        }
    }
})

export const { sidebarToggle, sidebarUnfoldableToggle, changeModifiers } = CommonSlice.actions
export default CommonSlice.reducer