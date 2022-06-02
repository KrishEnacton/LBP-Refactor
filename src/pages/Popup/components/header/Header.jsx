import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { LoginButton } from './LoginButton';

const Header = () => {
  const userData = useContext(UserContext)[0];
  const loading = useContext(UserContext)[2];
  return (
    <div>
      Header Component
      {!userData ? <LoginButton /> : 'User info'}
    </div>
  );
};

export default Header;
