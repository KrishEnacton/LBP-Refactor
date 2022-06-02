import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
  const userData = useContext(UserContext)[0];
  return <div>Profile</div>;
};

export default Profile;
