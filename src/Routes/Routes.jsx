import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Dashboard from '../Layout/Dashboard';
import DashBoardPage from '../Pages/DashBoardPage/DashBoardPage';
import Myjobs from '../Pages/Myjobs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "dashboardpage",
                        element: <DashBoardPage></DashBoardPage>,
                    },
                    {
                        path: "Myjobs",
                        element: <Myjobs></Myjobs>,
                    }
                ]
            },

        ]
    },
]);

export default router;
