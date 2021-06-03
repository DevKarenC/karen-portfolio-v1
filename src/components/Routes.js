import React from 'react';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import About from './Pages/About/';
import Tech from './Pages/Tech/';
import Journey from './Pages/Journey/';
import Projects from './Pages/Projects/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer } from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <Sidebar />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tech" component={Tech} />
          <Route path="/journey" component={Journey} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Routes;
