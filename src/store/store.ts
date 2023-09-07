import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./features/authSlice.ts";
import {userReducer} from "./features/userSlice.ts";
import {taskReducer} from "./features/taskSlice.ts";
import {projectReducer} from "./features/projectSlice.ts";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        tasks: taskReducer,
        project: projectReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;