import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logUser: (state, acticon) => {
            let res = acticon.payload
            state.name = res.name
        }
    }
})

export const { logUser } = userSlice.actions;

export default userSlice.reducer;