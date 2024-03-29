import React from 'react';
import { StyledRouterLink, NavContainer } from '../../styles/global';

const Nav = () => {
  return (
    <NavContainer>
      <StyledRouterLink smooth to="/#about" activeClassName="current">
        About Me
      </StyledRouterLink>
      <StyledRouterLink smooth to="/#tech" activeClassName="current">
        Tech Stack
      </StyledRouterLink>
      <StyledRouterLink smooth to="/#projects" activeClassName="current">
        Projects
      </StyledRouterLink>
      <StyledRouterLink smooth to="/#journey" activeClassName="current">
        My Coding Journey
      </StyledRouterLink>
    </NavContainer>
  );
};

export default Nav;
