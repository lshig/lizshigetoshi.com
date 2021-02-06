import React, { Fragment } from 'react';
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
        <Fragment>
          UC Davis
          <br />
          Energy Conservation Office
        </Fragment>
      ),
      link: 'https://thermoostat.ucdavis.edu',
      title: 'TherMOOstat'
    },
    {
      emojis: ['mortar_board', 'bar_chart'],
      employer: (
        <Fragment>
          UC Davis
          <br />
          Energy Conservation Office
        </Fragment>
      ),
      link: 'https://ceed.ucdavis.edu',
      title: 'Campus Energy Education Dashboard'
    },
    {
      emojis: ['fist', 'sos'],
      employer: (
        <Fragment>
          UC Davis
          <br />
          Department of Design
        </Fragment>
      ),
      link:
        'https://www.davisenterprise.com/local-news/ucd-students-social-media-tool-garners-attention/',
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
