import React from 'react';
import toEmoji from 'gemoji/name-to-emoji';

export default function Emoji({ id }) {
  return (
    <span aria-label={id} className="emoji" role="img">
      {toEmoji[id]}
    </span>
  );
}
