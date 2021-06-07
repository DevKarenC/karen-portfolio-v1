import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

const SidebarSection = styled.section`
  position: sticky;
  top: 0;
  padding: 3rem;
  min-width: 250px;
  width: 250px;
  height: calc(100vh - 6rem);
  background-color: #1d252d;
  color: #ffffff;
  box-shadow: 2px 0 4px -1px #d8d8d8;
  clip-path: inset(0px -5px 0px 0px);
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
`;

const NavContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-evenly;
  height: 160px;
  margin-bottom: 0.5rem;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecf0f3;
  width: calc(100vw - 250px);
  padding: 3rem;
`;

const BadgeContainer = styled(Container)`
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: center;
  height: 70vh;
  width: 750px;
`;

const ProjectsContainer = styled(Container)`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 40px 80px;
  width: 975px;
`;

const ProjectContainer = styled(Container)`
  position: relative;
  flex-direction: column;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  width: 450px;
  height: 770px;
  padding: 1rem;
  box-shadow: 0 4px 8px #e2dad5;
  background-color: #ffffff;
`;

const JourneyContainer = styled(Container)`
  align-items: center;
  justify-content: center;
  width: 100%;

  > div {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  @media only screen and (min-width: 768px) {
    > div:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 100%;
      background-color: #000;
    }

    li {
      width: 50%;
      position: relative;
      margin-bottom: 50px;
    }

    li:nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-90px);
      border-radius: 20px 0px 20px 20px;
    }

    li:nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(50px);
      border-radius: 0px 20px 20px 20px;
    }

    li::before {
      content: '';
      position: absolute;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #000;
      top: -10px;
    }

    li:nth-child(odd)::before {
      transform: translate(50%, -50%);
      right: -30px;
    }

    li:nth-child(even)::before {
      transform: translate(-50%, -50%);
      left: -30px;
    }

    li:hover::before {
      background-color: #ffb5c3;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  border: 1px solid #1d252d;
  border-radius: 5px;
  background-color: #ffffff;
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
  height: ${(props) => props.height};
  object-fit: ${(props) => props.objectFit}; ;
`;

const StyledLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #ffea99;
  }
`;

const StyledRouterLink = styled(NavHashLink)`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  text-decoration: none;
  color: #ffffff;

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
  margin: 0;
  padding: 0 0 1rem 0;
`;

const Name = styled(Text)`
  font-size: 2rem;
  line-height: normal;
  width: 100%;
  margin: 1.5rem 0;
  padding: 0;
`;

const Title = styled(Name)`
  font-weight: 700;
  margin: 2.5rem 0;
  text-align: center;
`;

const ProjectTitle = styled(Title)`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1rem 0;
`;

const BulletList = styled.li`
  margin-bottom: 5px;

  &:before {
    content: '🍀';
  }

  p {
    display: inline;
    margin-left: 5px;
  }
`;

const JourneyDate = styled(Text)`
  margin-bottom: 10px;
  letter-spacing: 1px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: -30px;
  }
`;
const JourneyTitle = styled(Text)`
  font-weight: 400;
  line-height: 30px;
  padding: 0 0 0.5rem 0;
`;
const JourneyContent = styled(Text)`
  line-height: 25px;
  padding: 0;
`;

export {
  SidebarSection,
  Container,
  NavContainer,
  MainContainer,
  BadgeContainer,
  ProjectsContainer,
  ProjectContainer,
  JourneyContainer,
  Button,
  SocialMediaButton,
  Image,
  StyledLink,
  StyledRouterLink,
  Text,
  Name,
  Title,
  ProjectTitle,
  BulletList,
  JourneyDate,
  JourneyTitle,
  JourneyContent,
};
