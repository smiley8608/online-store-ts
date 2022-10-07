import { createSlice } from "@reduxjs/toolkit"

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        sidebarShow: false,
        sidebarUnfoldable: false
    },
    reducers: {
        sidebarToggle: (state) => {
            state.sidebarShow = !state.sidebarShow
        },
        sidebarUnfoldableToggle: (state) => {
            state.sidebarUnfoldable = !state.sidebarUnfoldable
        },
    }
})

export const { sidebarToggle, sidebarUnfoldableToggle } = CommonSlice.actions
export default CommonSlice.reducer