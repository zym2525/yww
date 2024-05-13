import { TabBarPageRouter } from '@/constants';
import { useSystemStoreWithOut } from '@/stores/modules/system';

export class AbstractRouterAdapter {
  static getPath(): string {
    throw new Error('Method not implemented.');
  }
}

export class PageUtils extends AbstractRouterAdapter {
  static getCurrentPage() {
    return getCurrentPages().pop();
  }

  static getPath() {
    return `/${this.getCurrentPage().route}`;
  }
}

export function goBack() {
  const pages = getCurrentPages();

  const systemStore = useSystemStoreWithOut();

  if (pages.length > 1) {
    uni.navigateBack({ delta: 1 });
  } else {
    uni.switchTab({
      url: Object.values(TabBarPageRouter)[systemStore.activeTab],
    });
  }
}

export function goHome() {
  const systemStore = useSystemStoreWithOut();
  systemStore.setTabIndex(0);
  uni.switchTab({
    url: '/pages/index/index',
  });
}
