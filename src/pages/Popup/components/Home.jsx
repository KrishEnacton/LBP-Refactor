import React, { useEffect, useState } from 'react';
import { getUserDashboard } from '../../../common/dataProvider';
import { translate } from '../../../common/utils_global';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [lang, setLang] = useState();

  useEffect(() => {
    setLoading(true);
    getUserDashboard().then((data) => {
      chrome.storage.local.get('lang', (res) => {
        setLang(res.lang);
      });
      setUserData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? translate('loading') : translate('data')}: {lang}
    </div>
  );
};

export default Home;
