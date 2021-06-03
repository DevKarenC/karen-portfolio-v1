import React from 'react';
import { SocialMediaButton, StyledLink } from '../../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons';

const SocialMediaSection = () => {
  return (
    <>
      <SocialMediaButton>
        <StyledLink
          href="https://www.linkedin.com/in/seungahchoi/"
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </StyledLink>
      </SocialMediaButton>
      <SocialMediaButton>
        <StyledLink href="https://github.com/DevKarenC/" target="blank">
          <FontAwesomeIcon icon={faGithubAlt} />
        </StyledLink>
      </SocialMediaButton>
      <SocialMediaButton>
        <StyledLink
          href="https://drive.google.com/file/d/1WbT-pRv3BDcf9I09Dwdl31FWdmhfHfFu/view?usp=sharing"
          target="blank"
        >
          <FontAwesomeIcon icon={faFileAlt} style={{ paddingBottom: '1px' }} />
        </StyledLink>
      </SocialMediaButton>
      <SocialMediaButton>
        <StyledLink href="mailto:seungah.karen.choi@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledLink>
      </SocialMediaButton>
    </>
  );
};

export default SocialMediaSection;
