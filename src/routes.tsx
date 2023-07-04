import AuthPage from "./pages/AuthPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute.tsx";
import PageNotFound from "./components/PageNotFound.tsx";


const privateRoutes = [
    {
        path: "/home",
        element: <HomePage />,
    },
];

const publicRoutes = [
    {
        path: "/",
        element: <AuthPage />,
    },
    {
        path: "/*",
        element: <PageNotFound/>
    }
];


const wrappedPrivateRoutes = privateRoutes.map((route) => ({
    ...route,
    element: <PrivateRoute>{route.element}</PrivateRoute>,
}));

export const router = createBrowserRouter([...wrappedPrivateRoutes, ...publicRoutes]);