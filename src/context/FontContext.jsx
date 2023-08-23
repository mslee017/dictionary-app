import React, { useState, useContext, createContext } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('sans');
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  return useContext(FontContext);
};
