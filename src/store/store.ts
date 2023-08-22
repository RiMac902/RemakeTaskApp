import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./features/authSlice.ts";
import {userReducer} from "./features/userSlice.ts";
import {taskReducer} from "./features/taskSlice.ts";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        tasks: taskReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;