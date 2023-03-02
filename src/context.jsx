import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState([]);
  const [font, setFont] = useState('sans');
  const [theme, setTheme] = useState(true);

  // Theme Switcher Function
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

  // Setting up first render to use Keyboard Word
  const onLoad = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`
      );
      const data = await response.json();
      setWordData(data);
    } catch (error) {
      console.log('error', error);
    }
    setWord('keyboard');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setWordData(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleChange = event => {
    event.preventDefault();
    setWord(event.target.value);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <AppContext.Provider
      value={{
        wordData,
        handleSubmit,
        word,
        handleChange,
        font,
        setFont,
        toggleDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
