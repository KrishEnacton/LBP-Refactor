import React, { useEffect, useMemo, useState } from 'react';
import { getUserInfoFromStorage } from '../../../../common/dataProvider';
import { getThemeFromStorage, setThemeToStorage, set_user_lang, translate } from '../../../../common/utils_global';
import Styles, { rawSetTheme } from '../../../../style/Styles';
import { ThemeContext, UserContext } from '../../context/UserContext';
import BottomTab from '../BottomTab';
import Header from '../header/Header';
import Home from './Home';
import Profile from './Profile';
import ReferNEarn from './ReferNEarn';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [theme, setTheme] = useState();

  useEffect(() => {
    set_user_lang();
    getThemeFromStorage().then((data) => {
      setTheme(data);
      rawSetTheme(data);
    });
    setLoading(true);
    getUserInfoFromStorage()
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => {
        setUserData('');
        setLoading(false);
      });
  }, []);

  const setThemeToStateNStorage = (theme) => {
    setTheme(theme);
    setThemeToStorage(theme);
    rawSetTheme(theme);
  };

  const RenderActiveTab = useMemo(() => {
    switch (activeTab) {
      case 1:
        return <Home />;
      case 2:
        return <ReferNEarn />;
      case 3:
        return <Profile />;
      default:
        return <Home />;
    }
  }, [activeTab]);

  return (
    <ThemeContext.Provider value={[theme, setThemeToStateNStorage]}>
      <UserContext.Provider value={[userData, setUserData, loading]}>
        <Styles />
        <div>
          <Header />

          {RenderActiveTab}

          <BottomTab setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Main;
