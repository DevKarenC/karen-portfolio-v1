import React from 'react';
import SocialMediaSection from './SocialMediaSection';
import profilePic from '../../images/profilePic.png';
import {
  SidebarSection,
  Image,
  Text,
  Title,
  Button,
} from '../../styles/global';

const Sidebar = () => {
  return (
    <SidebarSection>
      <Image
        src={profilePic}
        alt="Karen Choi Profile"
        borderRadius={'50%'}
        width={'150px'}
      />
      <Title>Karen Choi</Title>
      <Text>
        Welcome to my portfolio site! Take a minute to learn about me and my
        journey to software engineering ☀️
      </Text>
      {/* About Me, Languages & Tools, Projects, Contact Me sections */}
      <Button>Resume</Button>
      <SocialMediaSection />
    </SidebarSection>
  );
};

export default Sidebar;
