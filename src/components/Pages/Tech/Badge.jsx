import React from 'react';
import { Container, JourneyTitle } from '../../../styles/global';

const Badge = ({ tech }) => {
  const { label, src } = tech;
  return (
    <Container
      style={{
        flexDirection: 'column',
        width: '150px',
        height: '150px',
        alignItems: 'center',
      }}
    >
      <img
        alt={label}
        src={src}
        style={{ objectFit: 'scale-down', flex: '1', width: '60px' }}
      />
      <JourneyTitle>{label}</JourneyTitle>
    </Container>
  );
};

export default Badge;
