import React from 'react';
import profilePic from '../../images/profilePic.png';
import { Image, Text, Name } from '../../styles/global';

const Profile = () => {
  return (
    <>
      <Image
        src={profilePic}
        alt="Karen Choi Profile"
        borderRadius={'50%'}
        width={'150px'}
      />
      <Name>Karen Choi</Name>
      <Text>
        Welcome to my portfolio site! Take a minute to learn about me and my
        journey to software engineering ☀️
      </Text>
    </>
  );
};

export default Profile;
