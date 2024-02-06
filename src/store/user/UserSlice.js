import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    state: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUser: (state, acticon) => {
            let res = acticon.payload
            state.name = res.name
            state.state = true
        },
        LogOut: state => {
            state.name = null
            state.state = false
        }
    }
})

export const { logUser, LogOut } = userSlice.actions;

export default userSlice.reducer;
