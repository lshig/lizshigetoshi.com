import React from 'react';
import NameTag from './NameTag';
import SocialMediaBar from './SocialMediaBar';

export default function Header() {
  return (
    <header className="side-nav">
      <ul>
        <li>
          <NameTag />
        </li>
        <li>
          <SocialMediaBar />
        </li>
      </ul>
    </header>
  );
}
