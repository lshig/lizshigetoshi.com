import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Emoji from './Emoji';

export default function EmojiBar({ emojis }) {
  const formattedEmojis = emojis.map((emoji, index) => {
    const addSpace = emojis.length - 1 !== index ? ' ' : null;

    return (
      <Fragment key={emoji}>
        <Emoji id={emoji} />
        {addSpace}
      </Fragment>
    );
  });

  return <p>{formattedEmojis}</p>;
}

EmojiBar.prototype = {
  emojis: PropTypes.arrayOf(PropTypes.stringisRequired).isRequired
};
