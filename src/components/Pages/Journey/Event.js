import React from 'react';
import {
  JourneyDate,
  JourneyTitle,
  JourneyContent,
} from '../../../styles/global';

const Journey = ({ detail }) => {
  const { title, content, dates } = detail;
  return (
    <li>
      <div>
        <JourneyDate>{dates}</JourneyDate>
        <JourneyTitle>{title}</JourneyTitle>
        <JourneyContent>{content}</JourneyContent>
      </div>
    </li>
  );
};

export default Journey;
