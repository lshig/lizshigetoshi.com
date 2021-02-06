import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';

export default function Layout({ children }) {
  return (
    <Fragment>
      <SEO />
      <Header />
      <main>{children}</main>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
