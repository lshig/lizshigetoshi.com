import PropTypes from 'prop-types';
import React from 'react';
import EmojiBar from './EmojiBar';
import NewTabLink from './NewTabLink';

export default function WorkCard({ emojis, employer, link, title }) {
  return (
    <div className="col s12 m6 l6">
      <NewTabLink link={link}>
        <div className="card">
          <div className="card-title__center">{title}</div>
          <div className="card-emojis">
            <EmojiBar emojis={emojis} />
          </div>
          <div className="card-action__center">
            <span className="card-footnote">{employer}</span>
          </div>
        </div>
      </NewTabLink>
    </div>
  );
}

WorkCard.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
  employer: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
