import React, { useState } from 'react';
import { useEmojiContext } from './EmojiContext';


const EmojiComponent = () => {
  const { isHappy, toggleMood } = useEmojiContext();

  return (
    <div>
      <span>{isHappy ? '😄' : '😞'}</span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default EmojiComponent;

