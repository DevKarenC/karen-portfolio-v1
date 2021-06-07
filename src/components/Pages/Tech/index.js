import React from 'react';
import Badge from './Badge';
import techStackData from '../../Data/techStack';
import { Title, BadgeContainer } from '../../../styles/global';

const Tech = () => {
  return (
    <div id="tech">
      <Title>Languages & Tools</Title>
      <BadgeContainer>
        {techStackData.map((tech) => (
          <Badge key={tech.label} tech={tech} />
        ))}
      </BadgeContainer>
    </div>
  );
};

export default Tech;
