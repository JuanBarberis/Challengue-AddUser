import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import addUserReducer  from './addUser/AddUserSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        addUser: addUserReducer    
    },
});