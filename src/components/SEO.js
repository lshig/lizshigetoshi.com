import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({
  article,
  author,
  description,
  image,
  keywords,
  title
}) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultArticle,
    defaultAuthor,
    defaultDescription,
    defaultImage,
    defaultKeywords,
    defaultTitle,
    siteUrl,
    twitterUsername
  } = site.siteMetadata;
  const seo = {
    article: article || defaultArticle,
    author: author || defaultAuthor,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    keywords: keywords || defaultKeywords,
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`
  };

  return (
    <Helmet title={seo.title}>
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(seo.article ? true : null) && (
        <meta property="og:type" content="article" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

SEO.propTypes = {
  article: PropTypes.bool,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  title: PropTypes.string
};

SEO.defaultProps = {
  article: false,
  author: null,
  description: null,
  image: null,
  keywords: null,
  title: null
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultArticle: article
        defaultAuthor: author
        defaultDescription: description
        defaultImage: image
        defaultKeywords: keywords
        defaultTitle: title
        siteUrl: url
        twitterUsername
      }
    }
  }
`;
