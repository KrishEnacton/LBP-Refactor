import React, { useEffect, useState } from 'react';
import { getUserDashboard } from '../../../../common/dataProvider';
import { set_user_lang, translate } from '../../../../common/utils_global';
import { UserContext } from '../../context/UserContext';
import Home from './Home';
import Profile from './Profile';
import ReferNEarn from './ReferNEarn';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    set_user_lang();
    setLoading(true);
    getUserDashboard().then((data) => {
      setUserData(data);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <div>
        {loading ? translate('loading') : translate('data')}
        <Home />
        <Profile />
        <ReferNEarn />
      </div>
    </UserContext.Provider>
  );
};

export default Main;
