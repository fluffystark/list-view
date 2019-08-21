import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './assets/App.scss';

const AsyncMain = lazy(() => import('./screens/Main'));

function App() {
  return (
    <div id="App">
      <Router>
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" component={AsyncMain} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
