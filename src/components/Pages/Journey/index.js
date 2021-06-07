import React from 'react';
import Event from '../Journey/Event';
import journeyDetails from '../../Data/journeyDetails';
import { PageDiv, JourneyContainer, Title, Text } from '../../../styles/global';

const Journey = () => {
  return (
    <PageDiv id="journey">
      <Title style={{ margin: '2.5rem 0 3.5rem 0' }}>My Coding Journey</Title>
      <Text
        style={{ textAlign: 'center', fontWeight: '400', marginBottom: '3rem' }}
      >
        Congratulations! You made it all the way to the end. Now you get to
        follow my coding journey... 🚗
      </Text>
      <JourneyContainer>
        <div>
          <ul>
            {journeyDetails.map((detail) => (
              <Event detail={detail} />
            ))}
          </ul>
        </div>
      </JourneyContainer>
    </PageDiv>
  );
};

export default Journey;
