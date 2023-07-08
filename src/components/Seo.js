import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo({
  article,
  author,
  description,
  image,
  keywords,
  pathname,
  title
}) {
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
    url: `${siteUrl}${pathname || ``}`
  };

  return (
    <>
      <title>{seo.title}</title>
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
    </>
  );
}

Seo.propTypes = {
  article: PropTypes.bool,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  pathname: PropTypes.string,
  title: PropTypes.string
};

Seo.defaultProps = {
  article: false,
  author: null,
  description: null,
  image: null,
  keywords: null,
  pathname: null,
  title: null
};

const query = graphql`
  query Seo {
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
