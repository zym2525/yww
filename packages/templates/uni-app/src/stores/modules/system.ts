import { defineStore } from 'pinia';
import { store } from '@/stores';

export interface Options {
  path: string;
  scene: number;
  query: object;
  shareTicket: string;
  referrerInfo: object;
  tabIndex: number;
  IPhoneXPadding: number;
  navHeight: number;
  safeAreaTop: number;
  buttonBottom: number;

  redirectPath: string;
  isTabSwitch: boolean;
}

export const useSystemStore = defineStore({
  id: 'app-system',
  /** 状态 */
  state: () => ({
    options: {} as App.LaunchShowOption,

    activeTab: 0,

    info: {} as UniNamespace.GetSystemInfoResult,

    designWidth: 750,

    screenHeight: 0,
    screenWidth: 0,
    pageHeightWithTab: 0,
    pageHeight: 0,

    IPhoneXPadding: 0,

    navHeight: 0,
    bottomNavHeight: 0,

    safeAreaTop: 0,

    navigationBarHeight: 0,
    //右上角胶囊按钮高度
    menuButtonHeight: 0,
    menuButtonWidth: 0,
    menuButtonRightDistance: 0,
    menuButtonTop: 0,
  }),

  actions: {
    init(options: App.LaunchShowOption) {
      this.options = options; // 放一下页面相关的数据例如scene等 页面高度之类的不存！
    },

    setInfo(info: UniNamespace.GetSystemInfoResult) {
      this.info = info;
      console.log('info: ', info);

      this.setNavigationBarHeight(info);

      this.screenHeight = info.screenHeight;
      this.screenWidth = info.screenWidth;

      this.IPhoneXPadding = info.safeAreaInsets.bottom;
      this.navHeight = info.statusBarHeight + this.navigationBarHeight;

      this.safeAreaTop = info.safeArea.top;

      const scale = info.screenWidth / this.designWidth;

      /**
       * 100为底部tabber的高度
       */
      this.bottomNavHeight = 100 * scale;

      this.pageHeight = info.screenHeight - this.navHeight - this.IPhoneXPadding; // 无底部tabber
      this.pageHeightWithTab = this.pageHeight - this.bottomNavHeight; // 有底部tabber
    },

    setNavigationBarHeight(systemInfo: UniNamespace.GetSystemInfoResult) {
      const { right, height, width, top } = uni.getMenuButtonBoundingClientRect();

      let navigationBarHeight = 0;

      if (systemInfo.platform === 'android') {
        navigationBarHeight = 48;
      } else {
        navigationBarHeight = 44;
      }
      this.menuButtonHeight = height;
      this.menuButtonWidth = width;
      this.menuButtonTop = top;
      this.menuButtonRightDistance = systemInfo.screenWidth - right;
      this.navigationBarHeight = navigationBarHeight;
    },

    setTabIndex(tabIndex: number) {
      this.activeTab = tabIndex;
    },
  },
});

// Need to be used outside the setup
export function useSystemStoreWithOut() {
  return useSystemStore(store);
}
