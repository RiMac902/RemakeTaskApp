import AuthPage from "./pages/AuthPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {PrivateRoute} from "./layout/PrivateRoute.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import CreateTaskPage from "./pages/CreateTaskPage.tsx";
import CreateProjectPage from "./pages/CreateProjectPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";


const privateRoutes = [
    {
        path: "/home",
        element: <HomePage/>,
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    },
    {
        path: "/createTask",
        element: <CreateTaskPage/>
    },
    {
        path: "/createProject",
        element: <CreateProjectPage/>
    },
    {
        path: "/project/:id",
        element: <ProjectPage/>
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