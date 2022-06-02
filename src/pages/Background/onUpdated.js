export const onUpdated = (tab_info, change_info, tab) => {
  var matching_app_url = new RegExp(config.app_reg);
  if (matching_app_url.test(tab.url)) {
    chrome.cookies.getAll({ url: tab.url }, function (cookies) {
      let is_found = false;
      cookies.forEach((item, index) => {
        if (item.name === 'cry_user_token') {
          chrome.storage.local.set({ cry_user_token: item.value });
          is_found = true;
        }
        if (item.name === 'user_id') {
          chrome.storage.local.set({ user_id: item.value });
          is_found = true;
        }
      });
      if (!is_found) {
        chrome.storage.local.remove(['cry_user_token', 'user_id']);
      }
    });
  }
};
