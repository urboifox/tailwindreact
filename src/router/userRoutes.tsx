import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";

const userRoutes = [
    {
        path: '/',
        element: <Home />
    }
] satisfies RouteObject[]

export default userRoutes;
