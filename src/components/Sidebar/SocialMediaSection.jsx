import React from 'react';
import { SocialMediaButton, Link } from '../../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SocialMediaSection = () => {
  return (
    <>
      <SocialMediaButton>
        <Link href="mailto:seungah.karen.choi@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </SocialMediaButton>
      <SocialMediaButton>
        <Link href="https://github.com/DevKarenC/" target="blank">
          <FontAwesomeIcon icon={faGithubAlt} />
        </Link>
      </SocialMediaButton>
      <SocialMediaButton>
        <Link href="https://www.linkedin.com/in/seungahchoi/" target="blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </SocialMediaButton>
    </>
  );
};

export default SocialMediaSection;
