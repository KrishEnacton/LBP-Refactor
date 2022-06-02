import { api } from '../../common/apiService';
import { config } from '../../config';

export const onUpdated = (tab_info, change_info, tab) => {
  var matching_app_url = new RegExp(config.app_reg);
  if (matching_app_url.test(tab.url)) {
    chrome.cookies.getAll({ url: tab.url }, function (cookies) {
      let cry_user_token;
      let user_id;
      user_id = cookies.filter((a) => a.name === 'user_id')?.[0]?.value;
      cry_user_token = cookies.filter((a) => a.name === 'cry_user_token')?.[0]?.value;
      if (user_id && cry_user_token) {
        chrome.storage.local.get('user_token', (result) => {
          if (!result.user_token) {
            api
              .post('/auth/cookdLogin', {
                cry_user_token,
                user_id: Number(user_id),
              })
              .then((res) => {
                chrome.storage.local.set({ user_token: res.data });
              });
          }
        });
      } else {
        chrome.storage.local.remove(['user_token']);
      }
    });
  }
};
