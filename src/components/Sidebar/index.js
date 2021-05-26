import React from 'react';
import profilePic from '../../images/profilePic.png';
import { SidebarSection, Image, Text, Title } from '../../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
      <button>Resume</button>
      {/* social media icons */}
      <FontAwesomeIcon icon={faPaperPlane} />
      <FontAwesomeIcon icon={faGithubAlt} />
      <FontAwesomeIcon icon={faLinkedinIn} />
    </SidebarSection>
  );
};

export default Sidebar;
