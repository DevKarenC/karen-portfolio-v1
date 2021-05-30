import React from 'react';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/tech" />
          <Route exact path="/projects" />
          <Route exact path="/contacts" />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
