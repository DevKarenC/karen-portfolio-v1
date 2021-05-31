import React from 'react';
import { ProjectTitle, Image } from '../../../styles/global';

const ProjectCard = ({ project }) => {
  const { name, src, techStack, features, githubLink, demoLink } = project;
  return (
    <div>
      <ProjectTitle>{name}</ProjectTitle>
      <Image
        borderRadius="10px"
        width="800px"
        height="auto"
        objectFit="contain"
        src={src}
      />
      <p>Tech Stack</p>
      <p>{techStack}</p>
      <p>Features</p>
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <a href={githubLink}>Github</a>
      <a href={demoLink}>Demo</a>
    </div>
  );
};

export default ProjectCard;
