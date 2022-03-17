import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import ErrorBoundary from './components/ErrorBoundary';

import routes from "./routes"


function App() {

  function RouteWithSubRoutes(route: any) {
    return (
      <Route path={route.path} exact={route.exact}>
        <route.component routes={route.routes} />
      </Route>
    )
  }

  return (
    <BrowserRouter>
      <MainApp>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            hook
            {routes.map((route) => (
              <RouteWithSubRoutes {...route} key={route.path} />
            ))}
          </Suspense>
        </ErrorBoundary>
      </MainApp>
    </BrowserRouter>

  );
}

const MainApp = styled.div`
`

export default App;
