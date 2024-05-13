import { TabBarPageRouter } from '@/constants';
import { useSystemStore } from '@/stores/modules/system';

export function useSwitchTab() {
  const systemStore = useSystemStore();

  const switchTab = (option: UniNamespace.SwitchTabOptions) => {
    const index = Object.values(TabBarPageRouter).findIndex((x) => option.url.includes(x));
    systemStore.setTabIndex(index);
    uni.switchTab(option);
  };
  return switchTab;
}

export function useRouter() {
  const params = ref({});

  onLoad((options) => {
    params.value = options;
  });

  return {
    params,
    path: PageUtils.getPath(),
  };
}
