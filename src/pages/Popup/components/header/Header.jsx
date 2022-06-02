import React, { useContext } from 'react';
import { ThemeContext, UserContext } from '../../context/UserContext';
import { LoginButton } from './LoginButton';

const Header = () => {
  const userData = useContext(UserContext)[0];
  const loading = useContext(UserContext)[2];
  const [theme, setThemeToStateNStorage] = useContext(ThemeContext);

  const setTheme = (theme) => {
    setThemeToStateNStorage(theme);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: 'red' }}
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        {theme}
      </div>
      Header Component
      {!userData ? <LoginButton /> : 'User info'}
      <br />
    </div>
  );
};

export default Header;
