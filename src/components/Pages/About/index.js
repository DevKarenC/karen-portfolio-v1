import React from 'react';
import { PageDiv, Title, Text } from '../../../styles/global';

const About = () => {
  return (
    <PageDiv id="about">
      <Title style={{ margin: '2.5rem 0 1rem 0' }}>About Me</Title>
      <Text
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '2rem',
        }}
      >
        Hi there! My name is Karen Choi and I'm a former auditor turned software
        engineer. Before attending the Grace Hopper Program at Fullstack
        Academy, I spent 8 months self-studying and building various projects
        (thanks to The Odin Project and teachers on YouTube!) everyday after
        work. Now as part of the immersive software engineering program, I am
        learning more than ever and excited to start working again in the tech
        industry! 🥳 Feel free to connect with me on LinkedIn and say hi, or
        send me an email! I look forward to chatting with you.
      </Text>
    </PageDiv>
  );
};

export default About;
