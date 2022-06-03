import { config } from '../config';
import { api } from './apiService';
import { returnLangParam } from './utils_global';

export const refreshExtensionData = () => {
  addExtensionSettingsToStorage();
  addAllStoresToStorage();
  addTopOffersToStorage();
  addTopStoresToStorage();
  addBonusesToStorage();
};

export const getUserDashboard = (token) => {
  return new Promise((resolve) => {
    if (token) {
      api
        .get('/user/dashboard', {
          Authorization: `Bearer ${token}`,
        })
        .then((data) => {
          chrome.storage.local.set({ user_info: data });
          resolve(data);
        });
    } else {
      resolve(false);
    }
  });
};

export const addAllStoresToStorage = () => {
  try {
    api.get('/public/exStores').then((res) => {
      if (res.success && !res.error) {
        let stores = res.data;
        for (const key in stores) {
          if (stores.hasOwnProperty(key)) {
            stores[key].domain_name = key;
          }
        }
        chrome.storage.local.set({
          all_stores: res.data,
          all_stores_timestamp: new Date().valueOf(),
        });
      } else {
        throw 'all_stores_api_error' + res.msg;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTopOffersToStorage = () => {
  try {
    api.get('/public/topCoupons').then((res) => {
      if (res.success && !res.error) {
        chrome.storage.local.set({
          top_offers: res.data,
        });
      } else {
        throw 'top_stores_api_error' + res.msg;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTopStoresToStorage = () => {
  try {
    api.get('/public/topStores').then((res) => {
      if (res.success && !res.error) {
        chrome.storage.local.set({
          top_stores: res.data,
        });
      } else {
        throw 'top_stores_api_error' + res.msg;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addExtensionSettingsToStorage = () => {
  try {
    api.get('/public/exSettings').then((res) => {
      if (res.success && !res.error) {
        chrome.storage.local.set({
          settings: res.data,
        });
      } else {
        throw 'settings_api_error' + res.msg;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const addBonusesToStorage = () => {
  try {
    api.get('/public/bonusTypes').then((res) => {
      if (res.success && !res.error) {
        chrome.storage.local.set({
          bonus_types: res.data,
        });
      } else {
        throw 'bonus_api_error' + res.msg;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopStoresFromStorage = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(['top_stores', 'lang'], function (result) {
      let lang = returnLangParam(result.lang);
      if (result.top_stores) {
        let stores = result.top_stores;
        stores.forEach((e) => {
          e.href = `${config.app_url}${lang}out/store/${e.id}`;
        });
        resolve(stores);
      } else {
        refreshExtensionData();
        reject();
      }
    });
  });
};

export function getTopOffersFromStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(['top_offers', 'lang'], function (result) {
      if (result.top_offers) {
        let offers = result.top_offers;
        let lang = returnLangParam(result.lang);
        offers.forEach((e) => {
          e.href = `${config.app_url}${lang}out/coupon/${e.id}`;
          if (e.store.cashback_enabled) {
            e.cashback_string = e.store.cashback_string;
          } else {
            e.cashback_string = '';
          }
        });
        resolve(offers);
      } else {
        refreshExtensionData();
        reject();
      }
    });
  });
}

export function getUserInfoFromStorage() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['user_info', 'settings', 'lang', 'bonus_types'], function (result) {
      if (result.user_info) {
        let member_info = result.user_info;
        let earning = result.user_info.data.earning;
        let settings = result.settings;
        let lang = returnLangParam(result.lang);
        let referral_url = `${config.app_url}${lang}signup?referral=${member_info ? member_info.referral_code : ''}`;
        let currency_info = {
          currency_prefix: settings.currencies.default.display_as === 'prefix' ? settings.currencies.default.symbol : '',
          currency_suffix: settings.currencies.default.display_as === 'suffix' ? settings.currencies.default.symbol : '',
        };
        let urls = {
          site_url: config.app_url,
          referral_url,
          referral_percent: settings.referral_percent,
          cashback_payment: config.app_url + lang + config.user_prefix + '/' + config.user_cashback_payment,
          refer_n_earn_activity: config.app_url + lang + config.user_prefix + '/' + config.refer_earn,
          missing_payment: config.app_url + lang + config.user_prefix + '/' + config.user_missing_cashback,
          cashback_activity: config.app_url + lang + config.user_prefix + config.activities_prefix + config.cashback_prefix,
          log_out: config.app_url + lang + config.logout_url,
          log_in: config.app_url + lang + config.login_url,
          facebook_share_url: 'https://www.facebook.com/sharer.php?u=' + referral_url,
          twitter_share_url: 'https://twitter.com/intent/tweet?url=' + referral_url,
          whats_app_url: 'https://api.whatsapp.com/send?text=' + referral_url,
          how_it_works: config.app_url + lang + settings.page_urls['refer_earn'],
        };
        resolve({
          member_info,
          urls,
          currency_info,
          earning,
          bonus_types: result.bonus_types,
        });
      } else {
        let lang = returnLangParam(result.lang);
        resolve({
          urls: {
            log_in: config.app_url + lang + config.login_url,
          },
        });
      }
    });
  });
}
