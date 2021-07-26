import React from 'react';
import { PageDiv, Title, Text, StyledLink } from '../../../styles/global';

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
        work. Now that I am graduated from the immersive software engineering program, I am excited to start working again in the tech
        industry! 🥳 Feel free to connect with me on{' '}
        <StyledLink
          href="https://www.linkedin.com/in/seungahchoi/"
          target="blank"
          style={{ fontWeight: '300px' }}
        >
          LinkedIn
        </StyledLink>{' '}
        and say hi, or send me an{' '}
        <StyledLink href="mailto:seungah.karen.choi@gmail.com">
          email
        </StyledLink>
        ! I look forward to chatting with you.
      </Text>
    </PageDiv>
  );
};

export default About;
