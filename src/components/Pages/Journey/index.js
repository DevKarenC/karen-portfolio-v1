import React from 'react';
import Event from '../Journey/Event';
import journeyDetails from '../../Data/journeyDetails';
import { JourneyContainer, Title } from '../../../styles/global';

const Journey = () => {
  return (
    <>
      <Title style={{ fontSize: '1.5rem' }}>My Coding Journey</Title>
      <JourneyContainer>
        <div>
          <ul>
            {journeyDetails.map((detail) => (
              <Event detail={detail} />
            ))}
          </ul>
        </div>
      </JourneyContainer>

      {/* Milestones */}
    </>
  );
};

export default Journey;
