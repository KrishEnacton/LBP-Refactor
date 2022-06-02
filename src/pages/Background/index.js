import { onInstalled } from './onInstalled';
import { onMessage } from './onMessage';
import { onUpdated } from './onUpdated';

chrome.runtime.onInstalled.addListener(onInstalled);

chrome.runtime.onMessage.addListener(onMessage);

chrome.tabs.onUpdated.addListener(onUpdated);
