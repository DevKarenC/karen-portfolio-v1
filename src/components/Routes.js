import React from 'react';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer } from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <Sidebar />
      <MainContainer>
        <Switch>
          <Route exact path="/karen-portfolio-v1" component={Home} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Routes;
