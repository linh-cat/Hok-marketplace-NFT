import React from 'react';
import MainContainer from '../pages/MainContainer'

const appRoutes = [
    {
        exact: false,
        path: "/",
        component: MainContainer,
        routes: [
            {
                exact: true,
                path: "/",
                component: React.lazy(() => import("../components/MainContent"))
            },
            {
                exact: true,
                path: "/new",
                component: React.lazy(() => import("../pages/MainContainer/New"))
            },
            {
                exact: true,
                path: "/mynft",
                component: React.lazy(() => import("../pages/MainContainer/MyNFT"))
            },

        ]
    },
]
export default appRoutes;