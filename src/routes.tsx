import AuthPage from "./pages/AuthPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute.tsx";


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
];


const wrappedPrivateRoutes = privateRoutes.map((route) => ({
    ...route,
    element: <PrivateRoute>{route.element}</PrivateRoute>,
}));

export const router = createBrowserRouter([...wrappedPrivateRoutes, ...publicRoutes]);