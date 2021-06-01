import React from 'react';
import Journey from '../Journey';
import journeyDetails from '../../Data/journeyDetails';
import { JourneyContainer, Title, Text } from '../../../styles/global';

const About = () => {
  return (
    <>
      <Title>About Me</Title>
      <Text>
        Hi there! My name is Karen Choi and I'm a former auditor turned software
        engineer. Before attending the Grace Hopper Program at Fullstack
        Academy, I spent 8 months self-studying and building various projects
        (thanks to The Odin Project and teachers on YouTube!) everyday after
        work. Now as part of the immersive software engineering program, I am
        learning more than ever and excited to start working again in the tech
        industry! 🥳
      </Text>
    </>
  );
};

export default About;
