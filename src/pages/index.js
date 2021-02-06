import React from 'react';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import WorkSection from '../components/WorkSection';

export default function Home() {
  return (
    <Layout>
      <div className="initial-section" />
      <WorkSection />
      <AboutSection />
    </Layout>
  );
}
