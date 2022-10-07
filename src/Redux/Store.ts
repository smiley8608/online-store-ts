import { configureStore } from "@reduxjs/toolkit"
import CommonReducer from "./Slices/CommonSlice"
import userReducer from "./Slices/userSlice"

const Store = configureStore({
    reducer: {
        user: userReducer,
        common: CommonReducer
    }
})


export default Store
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch