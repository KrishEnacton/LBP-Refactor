import React, { useContext } from 'react';
import { ThemeContext } from '../pages/Popup/context/UserContext';

const Styles = () => {
  const theme = useContext(ThemeContext)[0];
  if (theme === 'dark') {
    return <DarkTheme />;
  } else if (theme === 'light') {
    return <LightTheme />;
  } else {
    return <LightTheme />;
  }
};

const DarkTheme = () => {
  return <style>{``}</style>;
};

const LightTheme = () => {
  return <style>{``}</style>;
};

export default Styles;
