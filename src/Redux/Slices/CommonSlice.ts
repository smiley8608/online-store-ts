import { createSlice } from "@reduxjs/toolkit"

const CommonSlice = createSlice({
    name: "common",
    initialState: {
        sidebarShow: true,
    },
    reducers: {
        sidebarToogle: (state) => {
            state.sidebarShow = !state.sidebarShow
        }
    }
})

export const { sidebarToogle } = CommonSlice.actions
export default CommonSlice.reducer