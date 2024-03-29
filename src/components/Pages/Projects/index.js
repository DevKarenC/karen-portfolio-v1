import React from 'react';
import ProjectCard from './ProjectCard';
import projectDetails from '../../Data/projectDetails';
import {
  ProjectPageDiv,
  Title,
  Text,
  ProjectsContainer,
} from '../../../styles/global';

const Projects = () => {
  return (
    <ProjectPageDiv id="projects">
      <Title style={{ margin: '2.5rem 0 1.5rem 0' }}>Technical Projects</Title>
      <Text
        style={{ textAlign: 'center', fontWeight: '400', marginBottom: '1rem' }}
      >
        Check out the project readme's for additional features, learning
        outcomes, and demos!
      </Text>
      <ProjectsContainer>
        {projectDetails.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ProjectsContainer>
    </ProjectPageDiv>
  );
};

export default Projects;
