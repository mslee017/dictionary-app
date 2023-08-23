import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleDark = () => {
    if (theme) {
      document.documentElement.classList.add('dark');
      setTheme(prevTheme => !prevTheme);
    }

    if (!theme) {
      document.documentElement.classList.remove('dark');
      setTheme(prevTheme => !prevTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
