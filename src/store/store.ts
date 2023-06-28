import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./features/userSlice.ts";



export const store = configureStore({
    reducer: {
        user: userReducer
    },
    devTools: true
})