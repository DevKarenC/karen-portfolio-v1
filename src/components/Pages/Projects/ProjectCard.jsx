import React from 'react';
import {
  ProjectContainer,
  ProjectLinksContainer,
  ProjectTitle,
  ProjectImage,
  Text,
  StyledLink,
  BulletList,
  Features,
} from '../../../styles/global';

const ProjectCard = ({ project }) => {
  const { name, src, techStack, features, githubLink, demoLink } = project;
  return (
    <ProjectContainer>
      <ProjectTitle>
        <StyledLink href={githubLink} target="blank">
          {name}
        </StyledLink>
      </ProjectTitle>
      <ProjectImage
        borderRadius="10px"
        width="400px"
        height="250px"
        objectFit="fill"
        src={src}
      />
      <p>Tech Stack</p>
      <Text>{techStack}</Text>
      <p>Features</p>
      <Features>
        {features.map((feature) => (
          <BulletList>
            <Text>{feature}</Text>
          </BulletList>
        ))}
      </Features>
      <ProjectLinksContainer>
        <StyledLink href={githubLink} target="blank">
          Github
        </StyledLink>
        <span style={{ margin: '0 1rem' }}>|</span>
        <StyledLink href={demoLink} target="blank">
          Demo
        </StyledLink>
      </ProjectLinksContainer>
    </ProjectContainer>
  );
};

export default ProjectCard;
