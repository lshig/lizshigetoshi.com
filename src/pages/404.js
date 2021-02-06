import React from 'react';
import EmojiBar from '../components/EmojiBar';
import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';

export default function NotFound() {
  return (
    <Layout>
      <div className="initial-section" />
      <div className="section end-wrapper">
        <SectionHeading>Uh oh</SectionHeading>
        <article className="section-content">
          <EmojiBar emojis={['mag_right', 'question', 'weary']} />
          <p>
            This page doesn't exist.{' '}
            <a href="https://lizshigetoshi.com">Let's go back home.</a>
          </p>
        </article>
      </div>
    </Layout>
  );
}
