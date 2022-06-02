import { api } from './apiService';

export const getUserDashboard = () => {
  return new Promise((resolve) => {
    chrome.storage.local.get((result) => {
      if (result.user_token) {
        api
          .get('/user/dashboard', {
            Authorization: `Bearer ${result.user_token}`,
          })
          .then((data) => {
            resolve(data);
          });
      } else {
        resolve(false);
      }
    });
  });
};
