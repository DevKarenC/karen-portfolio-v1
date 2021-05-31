import React from 'react';
import ProjectCard from './ProjectCard';
import projectDetails from '../../Data/projectDetails';
import { Title, Text, ProjectsContainer } from '../../../styles/global';

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <Text style={{ fontWeight: '400', marginBottom: '1rem' }}>
        Check out the project readme's for additional features, learning
        outcomes, and demos!
      </Text>
      <ProjectsContainer>
        {projectDetails.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
