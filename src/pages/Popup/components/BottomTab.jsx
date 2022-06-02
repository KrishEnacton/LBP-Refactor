import React from 'react';
import { config } from '../../../config';

const BottomTab = ({ setActiveTab, activeTab }) => {
  return (
    <div>
      {config.tabs.map((item, index) => {
        return (
          <div key={index} onClick={() => setActiveTab(item.id)} style={activeTab === item.id ? { backgroundColor: 'red' } : {}}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default BottomTab;
