import React from 'react';
import Profile from './Profile';
import Nav from './Nav';
import SocialMediaSection from './SocialMediaSection';
import { SidebarSection } from '../../styles/global';

const Sidebar = () => {
  return (
    <SidebarSection>
      <Profile />
      <Nav />
      <SocialMediaSection />
    </SidebarSection>
  );
};

export default Sidebar;
