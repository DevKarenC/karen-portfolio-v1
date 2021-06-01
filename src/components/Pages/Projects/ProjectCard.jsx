import React from 'react';
import {
  Container,
  ProjectContainer,
  ProjectTitle,
  Image,
  Text,
  StyledLink,
  BulletList,
} from '../../../styles/global';

const ProjectCard = ({ project }) => {
  const { name, src, techStack, features, githubLink, demoLink } = project;
  return (
    <ProjectContainer>
      <ProjectTitle>{name}</ProjectTitle>
      <Image
        borderRadius="10px"
        width="400px"
        height="250px"
        objectFit="fill"
        src={src}
      />
      <p>Tech Stack</p>
      <Text>{techStack}</Text>
      <p>Features</p>
      <ul style={{ paddingLeft: '1rem', listStyleType: 'none' }}>
        {features.map((feature) => (
          <BulletList>
            <Text>{feature}</Text>
          </BulletList>
        ))}
      </ul>
      <Container
        style={{ position: 'absolute', bottom: 0, marginBottom: '2rem' }}
      >
        <StyledLink href={githubLink} target="blank">
          Github
        </StyledLink>
        <span style={{ margin: '0 1rem' }}>|</span>
        <StyledLink href={demoLink} target="blank">
          Demo
        </StyledLink>
      </Container>
    </ProjectContainer>
  );
};

export default ProjectCard;
