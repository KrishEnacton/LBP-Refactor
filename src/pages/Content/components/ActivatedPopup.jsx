import React, { useEffect } from 'react';

const ActivatedPopup = ({ data }) => {
  console.log('ActivatedPopup:', data);
  useEffect(() => {
    setTimeout(() => {
      closeActivatedPopup();
    }, 5000);
  }, []);

  const closeActivatedPopup = () => {
    chrome.storage.local.set({
      hide_activated_popup: {
        domain_name: data.domain_name,
        tabId: data.tabId,
      },
    });
    document.querySelector('#cb_activated_popup').remove();
  };
  return (
    <div style={{ position: 'fixed', top: 25, right: 25, backgroundColor: 'yellow', zIndex: 99999999 }}>
      ActivatedPopup
      <div onClick={closeActivatedPopup}>Close</div>
    </div>
  );
};

export default ActivatedPopup;
