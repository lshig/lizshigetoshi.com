import React from 'react';
import { nameToEmoji } from 'gemoji';

export default function Emoji({ id }) {
  return (
    <span aria-label={id} className="emoji" role="img">
      {nameToEmoji[id]}
    </span>
  );
}
