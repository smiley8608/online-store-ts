import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialState } from "../../types"


// const initialState: InitialState = {
//     user: {
//         _id: "8xuf94nck33ldo90s",
//         fname: "Alan",
//         lname: "Walker",
//         username: "iamalanwalker",
//         password: "",
//         email: "iamrealbhuvi@gmail.com",
//         cart: [],
//         phone: "9876543210",
//         address: [{
//             buildingNo: "123",
//             street: "hells lane",
//             locality: "Bay Area",
//             city:"San Francisco",
//             state:"California",
//             country:"USA."
//         }]
//     },
//     auth: false
// }

const initialState: InitialState = {
    user: null,
    auth: false
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        initialize: (state: InitialState, action: PayloadAction<InitialState>) => {
            state.user = action.payload.user
            state.auth = action.payload.auth
        }
    }
})

export const { initialize } = userSlice.actions
export default userSlice.reducer