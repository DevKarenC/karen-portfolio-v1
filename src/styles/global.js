import styled from 'styled-components';

const SidebarSection = styled.section`
  padding: 3rem;
  width: 250px;
  height: calc(100vh - 7rem);
  box-shadow: 2px 0 4px -1px #d8d8d8;
  clip-path: inset(0px -5px 0px 0px);
`;

const Button = styled.button``;

const Image = styled.img`
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  object-fit: cover;
`;

const Link = styled.a``;

const Text = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.5rem;
`;

const Title = styled(Text)`
  font-size: 2rem;
  letter-spacing: 0;
  line-height: 1rem;
`;

export { SidebarSection, Button, Image, Link, Text, Title };
