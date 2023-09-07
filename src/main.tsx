import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {CssBaseline} from "@mui/material";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router}/>
    </Provider>,
)
