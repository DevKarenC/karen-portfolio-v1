import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarSection = styled.section`
  padding: 3rem;
  width: 250px;
  height: calc(100vh - 7rem);
  box-shadow: 2px 0 4px -1px #d8d8d8;
  clip-path: inset(0px -5px 0px 0px);
`;

const Container = styled.div`
  display: flex;
`;

const NavContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 125px;
  margin-bottom: 0.5rem;
`;

const MainContainer = styled(Container)`
  width: calc(100vw - 250px);
`;

const Button = styled.button`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: transparent;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 1rem;
`;

const SocialMediaButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-top: 0.75rem;

  &:hover {
    background-color: #ffea99;
    border: 1px solid #ffea99;
  }
`;

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  object-fit: cover;
`;

const StyledLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  color: #000;
`;

const StyledRouterLink = styled(NavLink)`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  text-decoration: none;
  color: #000;

  &:hover {
    font-weight: 400;
  }

  &.${(props) => props.activeClassName} {
    font-weight: 400;
  }
`;

const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5rem;
`;

const Title = styled(Text)`
  font-size: 2rem;
  line-height: 1rem;
`;

export {
  SidebarSection,
  Container,
  NavContainer,
  MainContainer,
  Button,
  SocialMediaButton,
  Image,
  StyledLink,
  StyledRouterLink,
  Text,
  Title,
};
