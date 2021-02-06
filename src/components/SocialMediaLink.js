import PropTypes from 'prop-types';
import React from 'react';
import NewTabLink from './NewTabLink';

export default function SociaMediaLink({ icon, isNewTab, link }) {
  if (isNewTab) {
    return (
      <NewTabLink link={link}>
        <i className={`fa fa-${icon}`}></i>
      </NewTabLink>
    );
  }

  return (
    <a href={link}>
      <i className={`fa fa-${icon}`}></i>
    </a>
  );
}

SociaMediaLink.propTypes = {
  icon: PropTypes.string.isRequired,
  isNewTab: PropTypes.bool,
  link: PropTypes.string.isRequired
};
