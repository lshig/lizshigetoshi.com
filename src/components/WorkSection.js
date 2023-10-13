import React from 'react';
import SectionHeading from './SectionHeading';
import WorkCard from './WorkCard';

export default function WorkSection() {
  const projects = [
    {
      emojis: ['moneybag', 'passport_control'],
      employer: 'Mapbox',
      link: 'https://account.mapbox.com',
      title: 'Account Dashboard'
    },
    {
      emojis: ['cow', 'speech_balloon'],
      employer: (
        <>
          UC Davis
          <br />
          Energy Conservation Office
        </>
      ),
      link: 'https://thermoostat.ucdavis.edu',
      title: 'TherMOOstat'
    },
    {
      emojis: ['mortar_board', 'bar_chart'],
      employer: (
        <>
          UC Davis
          <br />
          Energy Conservation Office
        </>
      ),
      link: 'https://ceed.ucdavis.edu',
      title: 'Campus Energy Education Dashboard'
    },
    {
      emojis: ['fist', 'sos'],
      employer: (
        <>
          UC Davis
          <br />
          Department of Design
        </>
      ),
      link: 'https://www.davisenterprise.com/news/ucd-students-social-media-tool-garners-attention/article_1a5b0689-0279-5ab6-89f9-2a09ab962995.html',
      title: 'Stories of Solidarity'
    }
  ];
  const work = projects.map((project) => {
    return (
      <WorkCard
        emojis={project.emojis}
        employer={project.employer}
        key={project.title}
        link={project.link}
        title={project.title}
      />
    );
  });

  return (
    <div className="section initial-wrapper">
      <SectionHeading>Work</SectionHeading>
      <div className="card-content">
        <div className="row section-spacing">{work}</div>
      </div>
    </div>
  );
}
