import React from 'react';
import Event from '../Journey/Event';
import journeyDetails from '../../Data/journeyDetails';
import { JourneyContainer, Title } from '../../../styles/global';

const Journey = () => {
  return (
    <div id="journey">
      <Title>My Coding Journey</Title>
      <JourneyContainer>
        <div>
          <ul>
            {journeyDetails.map((detail) => (
              <Event detail={detail} />
            ))}
          </ul>
        </div>
      </JourneyContainer>
    </div>
  );
};

export default Journey;
