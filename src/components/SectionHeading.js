import PropTypes from 'prop-types';
import React from 'react';

export default function SectionHeading({ children }) {
  return (
    <div className="section-heading-wrapper">
      <div className="section-heading">
        <h1 className="section-heading-content">{children}</h1>
      </div>
    </div>
  );
}

SectionHeading.protoTypes = {
  children: PropTypes.node.isRequired
};
