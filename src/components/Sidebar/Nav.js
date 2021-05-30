import React from 'react';
import { StyledRouterLink, NavContainer } from '../../styles/global';

const Nav = () => {
  return (
    <NavContainer>
      <StyledRouterLink exact to="/about" activeClassName="current">
        About Me
      </StyledRouterLink>
      <StyledRouterLink exact to="/tech" activeClassName="current">
        Languages & Tools
      </StyledRouterLink>
      <StyledRouterLink exact to="/projects" activeClassName="current">
        Projects
      </StyledRouterLink>
      <StyledRouterLink exact to="/contacts" activeClassName="current">
        Get In Touch
      </StyledRouterLink>
    </NavContainer>
  );
};

export default Nav;
