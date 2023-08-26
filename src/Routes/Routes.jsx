import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import DashBoardPage from '../Pages/DashBoardPage/DashBoardPage';
import Myjobs from '../Pages/JobsPage/Myjobs';
import MainPage from '../Pages/MainPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <MainPage></MainPage>,
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:'dashboardpage',
                        element:<DashBoardPage></DashBoardPage>
                    }
                ]
            }

        ]
    },
    {
        path: "/Myjobs",
        element: <Myjobs></Myjobs>,
    }
]);

export default router;
