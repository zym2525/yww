import { storageLocal } from './storage';
import { useUserStoreWithOut } from '@/stores/modules/user';

const StorageKey = {
  USER_INFO_KEY: 'USER__INFO__',
  USER_DETAIL_KEY: 'USER_DETAIL_KEY',
};

export function getToken() {
  return useUserStoreWithOut().token;
}

export function getRefreshToken() {
  return useUserStoreWithOut().refreshToken;
}

export function getUserInfo() {
  return storageLocal.getItem<API.IdentityModelTokenCacheItem>(StorageKey.USER_INFO_KEY);
}

export function setUserInfo(userInfo: API.IdentityModelTokenCacheItem) {
  return storageLocal.setItem(StorageKey.USER_INFO_KEY, userInfo);
}

export function removeUserInfo() {
  return storageLocal.removeItem(StorageKey.USER_INFO_KEY);
}

export function getUserDetail() {
  return storageLocal.getItem<API.UserDto>(StorageKey.USER_DETAIL_KEY);
}

export function setUserDetail(userDetail: API.UserDto) {
  return storageLocal.setItem(StorageKey.USER_DETAIL_KEY, userDetail);
}

export function removeUserDetail() {
  return storageLocal.removeItem(StorageKey.USER_DETAIL_KEY);
}
