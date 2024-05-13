import { defineStore } from 'pinia';
import { store } from '@/stores';
import {
  getToken as getCacheToken,
  getUserInfo as getCacheUserInfo,
  setUserInfo,
  removeUserInfo,
  setUserDetail,
  getUserDetail,
  removeUserDetail,
} from '@/utils/storage/auth';
import * as accountServices from '@/services/api/Account';
import * as userServices from '@/services/api/User';
// import Taro, { useRouter } from '@tarojs/taro';
import { debounce } from 'lodash';
import { getAccountInfoFromAccessToken, AccountInfo } from '@/utils';

interface UserState {
  userInfo?: Nullable<API.IdentityModelTokenCacheItem>;
  token?: Nullable<string>;
  refreshToken?: Nullable<string>;
  userDetail?: Nullable<API.UserInfo>;
  firstGetUserDetail?: boolean;
}

const goAuthorization = debounce(
  () => {
    if (PageUtils.getPath() !== RouterPath.authorization) {
      uni.navigateTo({
        url: RouterPath.authorization,
      });
    }
  },
  300,
  {
    leading: true,
    trailing: false,
  }
);

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => {
    const userInfo = getCacheUserInfo();
    return {
      // user info
      userInfo: userInfo,
      // token
      token: userInfo?.accessToken ?? '',

      refreshToken: userInfo?.refreshToken ?? '',
      userDetail: getUserDetail(),
      firstGetUserDetail: true,
    };
  },
  getters: {
    cacheToken: (state) => {
      if (!state.token) {
        const storageToken = getCacheToken() as API.IdentityModelTokenCacheItem;

        state.token = storageToken.accessToken;
      }
      return state.token || null;
    },

    cacheRefreshToken: (state) => {
      return state.refreshToken;
    },

    accountInfo(): Partial<AccountInfo> {
      return getAccountInfoFromAccessToken(this.userInfo?.accessToken);
    },
  },
  actions: {
    // 手机号授权Code登录
    async getTokenByPhone(
      detail: UniNamespace.ButtonProps.onGetPhoneNumberEventDetail,
      wxMiniAppUserLoginRes: any
    ) {
      try {
        let res: API.IdentityModelTokenCacheItem;
        if (!wxMiniAppUserLoginRes.accessToken) {
          let params: API.WxMiniAppPhoneLoginInput = {
            openId: wxMiniAppUserLoginRes.openId,
            sessionKey: wxMiniAppUserLoginRes.sessionKey,
            encryptedData: detail.encryptedData,
            iv: detail.iv,
          };
          res = await accountServices.wxMiniAppPhoneAuthLogin(params);
          this.loginSuccess(res);
        }
        return res;
      } catch (error) {}
    },

    async loginSuccess(res: API.IdentityModelTokenCacheItem) {
      try {
        this.setUserInfoAction(res);
        this.setTokenAction(res);
        await this.getCurrentUserInfo();
      } catch (error) {}
    },

    async wxMiniAppUserLoginFromScan(wxIndentityRes: API.WxMiniAppIndentityInfo, uuid: string) {
      try {
        let res = await accountServices.wxMiniAppUserLoginFromScan({
          uId: uuid,
          userName: wxIndentityRes.userName,
          openId: wxIndentityRes.openId,
        });
        this.loginSuccess(res);
        return res;
      } catch (error) {}
    },

    async wxMiniAppPhoneAuthLoginFromScan(
      detail: UniNamespace.ButtonProps.onGetPhoneNumberEventDetail,
      wxIndentityRes: API.WxMiniAppIndentityInfo,
      uuid: string
    ) {
      try {
        let res = await accountServices.wxMiniAppPhoneAuthLoginFromScan({
          uId: uuid,
          openId: wxIndentityRes.openId,
          sessionKey: wxIndentityRes.sessionKey,
          encryptedData: detail.encryptedData,
          iv: detail.iv,
        });
        this.loginSuccess(res);
        return res;
      } catch (error) {}
    },

    async getCurrentUserInfo() {
      try {
        let res = await userServices.getUserInfo({ showLoading: false });
        if (res) {
          this.setUserDetail(res);
          this.firstGetUserDetail = false;
        }
      } catch (error) {}
    },

    setTokenAction(tokenInfo: API.IdentityModelTokenCacheItem) {
      this.token = tokenInfo?.accessToken;
      this.refreshToken = tokenInfo.refreshToken ?? '';
    },

    setUserInfoAction(info: API.IdentityModelTokenCacheItem) {
      this.userInfo = info;
      setUserInfo(info);
    },

    setUserDetail(detail: API.UserInfo) {
      this.userDetail = detail;
      setUserDetail(detail);
    },

    resetState() {
      this.userInfo = null;
      this.token = '';
      this.refreshToken = '';
      this.userDetail = null;
      removeUserInfo();
      removeUserDetail();
    },

    /**
     * @description: logout
     */
    logout() {
      this.resetState();
      goAuthorization();
    },

    async getTokenByRefreshToken(params: API.AccessRefreshToken) {
      try {
        const res = await accountServices.getTokenByRefreshToken(params, {
          showLoading: false,
        });
        if (res) {
          this.setTokenAction(res);
          this.setUserInfoAction(res);
          return res;
        } else {
          throw new Error('刷新token失败');
        }
      } catch (error) {
        throw new Error('error');
      }
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
