import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Add_Course from "../Components/Add_Course";
import Display_Course from "../Components/Display_Course";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/",
                element: <Register></Register>
            },
            {
                path: "/add_course",
                element: <Add_Course></Add_Course>

            },
            {
                path: "/display_course",
                element: <Display_Course></Display_Course>
            },
        
           


        ],

    },
]);