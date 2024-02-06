import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    img: null
}

export const AddUserSlice = createSlice({
    name: 'addUser',
    initialState,
    reducers: {
        AddUser: (state, acticon) => {
            let res = acticon.payload
            state.name = res.name
            state.img = res.name
        },
        DeleteUser: state => {
            state.name = null
            state.img = null
        }
    }
})

export const { AddUser, DeleteUser } = AddUserSlice.actions;

export default AddUserSlice.reducer;
