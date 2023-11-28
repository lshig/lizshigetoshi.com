import React from 'react';
import EmojiBar from './EmojiBar';
import NewTabLink from './NewTabLink';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <div className="section end-wrapper">
      <SectionHeading>About me</SectionHeading>
      <article className="section-content">
        <EmojiBar
          emojis={[
            'basketball',
            'coffee',
            'weight_lifting_woman',
            'airplane',
            'computer'
          ]}
        />
        <ul>
          <li>
            <NewTabLink link="https://lizshigetoshi.com/sacramento-music/">
              916
            </NewTabLink>{' '}
            born-and-raised and loyal{' '}
            <NewTabLink link="https://github.com/lshig/sacramento-kings-cli/">
              Sacramento Kings
            </NewTabLink>{' '}
            fan
          </li>
          <li>Likely found squatting at a coffee shop or a power rack</li>
          <li>
            Wanderlusted to{' '}
            <NewTabLink link="https://lizshigetoshi.com/wander-map/">
              16 U.S. states and 13 countries
            </NewTabLink>{' '}
            since 2013
          </li>
          <li>
            Graduated from the{' '}
            <NewTabLink link="https://en.wikipedia.org/wiki/UC_Davis_pepper_spray_incident">
              University of California, Davis
            </NewTabLink>{' '}
            in computer science and computational biology
          </li>
        </ul>
      </article>
    </div>
  );
}
