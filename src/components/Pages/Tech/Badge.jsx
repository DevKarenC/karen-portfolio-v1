import React from 'react';

const Badge = ({ tech }) => {
  const { label, src } = tech;
  return <img alt={label} src={src} height="55" />;
};

export default Badge;
