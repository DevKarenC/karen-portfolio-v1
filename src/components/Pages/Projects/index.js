import React from 'react';
import ProjectCard from './ProjectCard';
import projectDetails from '../../Data/projectDetails';
import { Title, ProjectContainer } from '../../../styles/global';

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <ProjectContainer>
        {projectDetails.map((project) => (
          <ProjectCard project={project} />
        ))}
        <p>
          Check out the project readme's for additional features, learning
          outcomes, and demos!
        </p>
      </ProjectContainer>
    </>
  );
};

export default Projects;
