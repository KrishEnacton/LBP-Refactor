import React, { useEffect, useState } from 'react';
import { getUserDashboard } from '../../../../common/dataProvider';
import { translate } from '../../../../common/utils_global';
import { UserContext } from '../../context/UserContext';
import Home from './Home';
import Profile from './Profile';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [lang, setLang] = useState();

  useEffect(() => {
    setLoading(true);
    getUserDashboard().then((data) => {
      chrome.storage.local.get((res) => {
        setLang(res.lang);
      });
      setUserData(data);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <div>
        {loading ? translate('loading') : translate('data')}: {lang}
        <Home />
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

export default Main;
