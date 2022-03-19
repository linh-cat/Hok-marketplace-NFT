import React, { Suspense } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import ErrorBoundary from './components/ErrorBoundary';
import "./App.scss"
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
      <div className="app">
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            {routes.map((route) => (
              <RouteWithSubRoutes {...route} key={route.path} />
            ))}
          </Suspense>
        </ErrorBoundary>
      </div>
    </BrowserRouter>

  );
}


export default App;
