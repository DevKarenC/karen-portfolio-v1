import React from 'react';
import { StyledRouterLink, NavContainer } from '../../styles/global';

const Nav = () => {
  return (
    <NavContainer>
      <StyledRouterLink
        smooth
        to="/karen-portfolio-v1/#about"
        activeClassName="current"
      >
        About Me
      </StyledRouterLink>
      <StyledRouterLink
        smooth
        to="/karen-portfolio-v1/#tech"
        activeClassName="current"
      >
        Tech Stack
      </StyledRouterLink>
      <StyledRouterLink
        smooth
        to="/karen-portfolio-v1/#projects"
        activeClassName="current"
      >
        Projects
      </StyledRouterLink>
      <StyledRouterLink
        smooth
        to="/karen-portfolio-v1/#journey"
        activeClassName="current"
      >
        My Coding Journey
      </StyledRouterLink>
    </NavContainer>
  );
};

export default Nav;
