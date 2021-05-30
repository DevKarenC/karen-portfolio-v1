import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledRouterLink, NavContainer } from '../../styles/global';

const Nav = () => {
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
    </Router>
  );
};

export default Nav;
