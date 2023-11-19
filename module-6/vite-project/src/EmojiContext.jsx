import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevState) => !prevState);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};
