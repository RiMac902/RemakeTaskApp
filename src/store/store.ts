import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./features/authSlice.ts";
import {userReducer} from "./features/userSlice.ts";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;