import React from 'react';

const ActivatePopup = ({ data }) => {
  console.log('ActivatePopup:', data);
  return <div style={{ position: 'fixed', top: 25, right: 25, backgroundColor: 'yellow', zIndex: 99999999 }}>ActivatePopup</div>;
};

export default ActivatePopup;
