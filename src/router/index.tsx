import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import userRoutes from "./userRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: userRoutes,
  }
])

export default router;
