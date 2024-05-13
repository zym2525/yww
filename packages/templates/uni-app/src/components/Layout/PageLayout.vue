<template>
  <PortalHost>
    <div :class="['page-layout-wrapper', className]">
      <slot v-if="showNavigationBar" name="navigationBar">
        <CommonNavigationBar v-bind="_commonNavigationBarProps" />
      </slot>

      <div class="page-layout-scroll-view-wrapper" :style="{ height: scrollViewHeight }">
        <slot></slot>
      </div>
      <div v-if="!pageHeightWithTabBar && needSafeAreaBottom" class="safe-area-bottom"></div>
    </div>
  </PortalHost>
</template>

<script setup lang="ts">
import PortalHost from '../Portal/portal-host.vue';
import { useSystemStore } from '@/stores/modules/system';
import CommonNavigationBar from '../NavigationBar/CommonNavigationBar.vue';
import { commonNavigationBarProps } from '../NavigationBar/commonNavigationBarProps';
import { usePickProps } from '@/hooks/help';
import { TabBarPageRouter } from '@/constants';

defineOptions({
  name: 'PageLayout',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
});

const props = defineProps({
  ...commonNavigationBarProps,
  needAuth: {
    type: Boolean,
    default: true,
  },
  needSafeAreaBottom: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
  },
});

const _commonNavigationBarProps = usePickProps(props, commonNavigationBarProps);

const systemStore = useSystemStore();
const router = useRouter();

const pageHeightWithTabBar = computed(() =>
  Object.values(TabBarPageRouter).some((x) => x.toLowerCase() === router.path.toLowerCase())
);

const navigationBarHeight = computed(
  () => systemStore.info.statusBarHeight + systemStore.navigationBarHeight
);

const scrollViewHeight = computed(() => {
  let pageHeight = pageHeightWithTabBar.value
    ? systemStore.pageHeightWithTab
    : systemStore.pageHeight;
  pageHeight = pageHeight + (props.showNavigationBar ? 0 : navigationBarHeight.value);
  return pageHeight + 'px';
});
</script>

<style lang="scss">
@import '@/styles/common.scss';

.page-layout-wrapper {
  background-color: #f2f2f2;

  .page-layout-scroll-view-wrapper {
    display: flex;
    flex-direction: column;

    .page-scrollview {
      box-sizing: border-box;
    }
  }
}
</style>
