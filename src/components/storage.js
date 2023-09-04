/* global chrome */

export const getUserData = (callback) => {
    chrome.storage.local.get(["userData"], (result) => {
      const userData = result.userData;
      callback(userData);
    });
  };
  