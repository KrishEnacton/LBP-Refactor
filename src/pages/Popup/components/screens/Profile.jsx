import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const userData = useContext(UserContext)[0];
  console.log('user_info:', userData);
  return <div></div>;
};

export default Profile;
