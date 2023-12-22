import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../assets/Layouts/DashboardLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <LogIn />,
        path: "/logIn",
      },
      {
        element: <SignUp />,
        path: "/signup"
      },
    ],
  },
]);

export default router;
