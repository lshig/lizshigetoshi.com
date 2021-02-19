import PropTypes from 'prop-types';
import React from 'react';

export default function NewTabLink({ children, link }) {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
}

NewTabLink.prototype = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};
