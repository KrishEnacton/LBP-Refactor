import React, { useEffect, useState } from 'react';
import { getUserDashboard } from '../../../../common/dataProvider';
import { set_user_lang, translate } from '../../../../common/utils_global';
import { UserContext } from '../../context/UserContext';
import BottomTab from '../BottomTab';
import Home from './Home';
import Profile from './Profile';
import ReferNEarn from './ReferNEarn';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    set_user_lang();
    setLoading(true);
    getUserDashboard()
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch(() => {
        setUserData(false);
        setLoading(false);
      });
  }, []);

  const RenderActiveTab = (id) => {
    switch (id) {
      case 1:
        return <Home />;
      case 2:
        return <ReferNEarn />;
      case 3:
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <div>
        {loading ? translate('loading') : userData?.user?.first_name}
        {RenderActiveTab(activeTab)}

        <BottomTab setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
    </UserContext.Provider>
  );
};

export default Main;
