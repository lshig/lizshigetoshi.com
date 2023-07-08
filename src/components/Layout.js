import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Seo from './Seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
