import React from 'react';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tech from './Pages/Tech/';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer } from '../styles/global';

const Routes = () => {
  return (
    <Router>
      <Sidebar />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </MainContainer>
    </Router>
  );
};

export default Routes;
