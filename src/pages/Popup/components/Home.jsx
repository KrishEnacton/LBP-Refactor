import React, { useEffect, useState } from 'react';
import { getUserDashboard } from '../../../common/dataProvider';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserDashboard().then((data) => {
      console.log('data:', data);
      setUserData(data);
      setLoading(false);
    });
  }, []);

  return <div>{loading ? 'loading...' : 'data'}</div>;
};

export default Home;
