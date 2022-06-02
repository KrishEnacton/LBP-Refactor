import { refreshExtensionData } from '../../common/dataProvider';
import { config } from '../../config';

export const onInstalled = () => {
  chrome.storage.local.set({ theme: config.themeMode });
  refreshExtensionData();
};
