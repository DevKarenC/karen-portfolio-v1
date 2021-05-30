import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledRouterLink, NavContainer } from '../../styles/global';

const Routes = () => {
  return (
    <Router>
      <NavContainer>
        <StyledRouterLink to="/about" activeClassName="clicked">
          About Me
        </StyledRouterLink>
        <StyledRouterLink to="/tech" activeClassName="clicked">
          Languages & Tools
        </StyledRouterLink>
        <StyledRouterLink to="/projects" activeClassName="clicked">
          Projects
        </StyledRouterLink>
        <StyledRouterLink to="/contacts" activeClassName="clicked">
          Get In Touch
        </StyledRouterLink>
      </NavContainer>
      <Switch>
        <Route exact path="/about" />
        <Route exact path="/tech" />
        <Route exact path="/projects" />
        <Route exact path="/contacts" />
      </Switch>
    </Router>
  );
  /* About Me, Languages & Tools, Projects, Contact Me sections */
};

export default Routes;
