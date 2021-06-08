import React from 'react';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer } from '../styles/global';

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Routes;
