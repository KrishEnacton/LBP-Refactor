import React, { useState } from 'react';
import { translate } from '../../../../common/utils_global';
import { config } from '../../../../config';

const Home = () => {
  const [activeTab, setActiveTab] = useState(101);

  const RenderHomeTab = (id) => {
    switch (id) {
      case 101:
        return <TopStores />;
      case 102:
        return <TopOffers />;
      default:
        return <TopOffers />;
    }
  };

  const TopStores = () => {
    return <div>TopStoreComponent</div>;
  };

  const TopOffers = () => {
    return <div>TopOfferComponent</div>;
  };

  return (
    <div className="bg-white dark:bg-black transition-all">
      Home Screen
      {config.home_screen_tabs.map((item, index) => {
        return (
          <div key={index} onClick={() => setActiveTab(item.id)}>
            {translate(item.title)}
          </div>
        );
      })}
      {RenderHomeTab(activeTab)}
    </div>
  );
};

export default Home;
