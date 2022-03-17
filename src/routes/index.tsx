import React from 'react';
import MainContainer from '../containers/MainContainer'

const appRoutes = [
    {
        exact: false,
        path: "/main",
        component: MainContainer,
        routes: [
            {
                exact: true,
                path: "/main/content",
                component: React.lazy(() => import("../containers/MainContainer"))
            }
        ]
    },
    {
        exact: false,
        path: "/authentication",
        component: MainContainer
    }
]
export default appRoutes;