import React from 'react';

const ActivatedPopup = ({ data }) => {
  console.log('ActivatedPopup:', data);
  return <div style={{ position: 'fixed', top: 25, right: 25, backgroundColor: 'yellow', zIndex: 99999999 }}>ActivatedPopup</div>;
};

export default ActivatedPopup;
