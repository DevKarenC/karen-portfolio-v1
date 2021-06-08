import React from 'react';
import Badge from './Badge';
import techStackData from '../../Data/techStack';
import {
  Title,
  TechStackTitle,
  PageDiv,
  BadgeContainer,
} from '../../../styles/global';

const Tech = () => {
  const badgeByTypes = techStackData.reduce(
    (obj, badge) => {
      obj[badge.type].push(badge);
      return obj;
    },
    { language: [], library: [], database: [], tool: [] }
  );

  return (
    <PageDiv id="tech">
      <Title style={{ margin: '2.5rem 0 1.5rem 0' }}>Tech Stack</Title>
      <TechStackTitle>Languages</TechStackTitle>
      <BadgeContainer>
        {badgeByTypes.language.map((tech) => (
          <Badge key={tech.label} tech={tech} />
        ))}
      </BadgeContainer>
      <TechStackTitle>Frameworks/Libraries</TechStackTitle>
      <BadgeContainer>
        {badgeByTypes.library.map((tech) => (
          <Badge key={tech.label} tech={tech} />
        ))}
      </BadgeContainer>
      <TechStackTitle>Database</TechStackTitle>
      <BadgeContainer>
        {badgeByTypes.database.map((tech) => (
          <Badge key={tech.label} tech={tech} />
        ))}
      </BadgeContainer>
      <TechStackTitle>Tools</TechStackTitle>
      <BadgeContainer>
        {badgeByTypes.tool.map((tech) => (
          <Badge key={tech.label} tech={tech} />
        ))}
      </BadgeContainer>
    </PageDiv>
  );
};

export default Tech;
