import React from 'react';
import Profile from './Profile';
import Nav from './Nav';
import SocialMediaSection from './SocialMediaSection';
import { SidebarSection } from '../../styles/global';

const Sidebar = () => {
  return (
    <SidebarSection>
      <div>
        <Profile />
        <Nav />
        <SocialMediaSection />
      </div>
    </SidebarSection>
  );
};

export default Sidebar;
