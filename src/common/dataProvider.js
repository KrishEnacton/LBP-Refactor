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
