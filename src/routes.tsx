import AuthPage from "./pages/AuthPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./components/PrivateRoute.tsx";
import PageNotFound from "./components/PageNotFound.tsx";
import Profile from "./pages/Profile.tsx";
import AuthPageForm from "./pages/AuthPageForm.tsx";


const privateRoutes = [
    {
        path: "/home",
        element: <HomePage/>,
    },
    {
        path: "/profile",
        element: <Profile/>
    }
];

const publicRoutes = [
    {
        path: "/",
        element: <AuthPage/>,
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