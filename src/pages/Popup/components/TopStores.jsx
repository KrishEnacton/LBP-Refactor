import React, { useEffect, useState } from 'react';
import { getTopStoresFromStorage } from '../../../common/dataProvider';
import StoreCard from './StoreCard';

const TopStores = () => {
  const [topStores, setTopStores] = useState([]);

  useEffect(() => {
    getTopStoresFromStorage().then((data) => {
      setTopStores(data);
    });
    return () => {};
  }, []);

  return (
    <div>
      {topStores.map((item, index) => {
        return <StoreCard item={item} key={index} />;
      })}
    </div>
  );
};

export default TopStores;
