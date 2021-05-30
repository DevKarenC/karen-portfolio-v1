import React from 'react';
import Badge from './Badge';
import techStackData from '../../Data/techStack';
import { Title, BadgeContainer } from '../../../styles/global';

const Tech = () => {
  return (
    <>
      <Title>Languages & Tools</Title>
      <BadgeContainer>
        {techStackData.map((tech) => (
          <Badge key={tech.label} alt={tech.label} src={tech.src} />
        ))}
      </BadgeContainer>
    </>
  );
};

export default Tech;
