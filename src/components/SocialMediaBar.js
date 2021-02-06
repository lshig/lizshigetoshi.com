import React from 'react';
import SocialMediaLink from './SocialMediaLink';

export default function SocialMediaBar() {
  const socialMedia = [
    {
      icon: 'envelope-o',
      id: 'email',
      isNewTab: false,
      link: 'mailto:lizshigetoshi@gmail.com'
    },
    {
      icon: 'github-alt',
      id: 'github',
      isNewTab: true,
      link: 'https://github.com/lshig'
    },
    {
      icon: 'linkedin',
      id: 'linkedin',
      isNewTab: true,
      link: 'https://www.linkedin.com/in/elizabethshigetoshi'
    },
    {
      icon: 'facebook-square',
      id: 'facebook',
      isNewTab: true,
      link: 'https://facebook.com/shigetoshi'
    },
    {
      icon: 'instagram',
      id: 'instagram',
      isNewTab: true,
      link: 'https://instagram.com/lizshig'
    }
  ];
  const socialMediaLinks = socialMedia.map((link) => {
    return (
      <SocialMediaLink
        icon={link.icon}
        isNewTab={link.isNewTab}
        key={link.id}
        link={link.link}
      />
    );
  });

  return <div className="media-content">{socialMediaLinks}</div>;
}
