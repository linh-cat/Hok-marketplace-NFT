import React from 'react';
import MainContainer from '../containers/MainContainer'

const appRoutes = [
    {
        exact: false,
        path: "/",
        component: MainContainer,
        routes: [
            {
                exact: true,
                path: "/main/content",
                // component: React.lazy(() => import("../../containers/Main"))
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