<template>
  <NavBar>
    <div
      :class="['common-navigation-bar-wrapper', { dark: props.mode == 'dark' }]"
      :style="barStyle"
    >
      <div
        class="menu-btn-wrapper"
        v-if="(!isLastPage || !isTabbarPage) && showLeftArrow"
        @click="goBack"
      >
        <img class="menu-btn" :src="IconArrow" />
      </div>
      <span class="common-navigation-bar-title">{{ title }}</span>
    </div>
  </NavBar>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue';
import { commonNavigationBarProps } from './commonNavigationBarProps';
import { useSystemStore } from '@/stores/modules/system';
import { CSSProperties } from 'vue';
import IconArrow from '@/static/common/icon-navi-arrow.png';
import { goBack } from '@/utils';
import { TabBarPageRouter } from '@/constants';

defineOptions({
  name: 'CommonNavigationBar',
  options: {
    virtualHost: true,
  },
});

const systemStore = useSystemStore();

const props = defineProps(commonNavigationBarProps);

const router = useRouter();

const isLastPage = computed(() => {
  const pages = getCurrentPages();
  return pages.length <= 1;
});

const isTabbarPage = computed(() =>
  Object.values(TabBarPageRouter).some((x) => x.toLowerCase() === router.path.toLowerCase())
);

const barStyle = computed(() => {
  const distance = systemStore.menuButtonWidth + systemStore.menuButtonRightDistance + 4;
  return {
    paddingLeft: `${distance}px`,
    paddingRight: `${distance}px`,

    height: systemStore.navigationBarHeight + 'px',
  } as CSSProperties;
});
</script>

<style lang="scss">
@import '@/styles/common.scss';

.common-navigation-bar-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  font-size: 30rpx;
  line-height: 1;
  color: boleGetCssVar('color', 'title-color');

  .common-navigation-bar-title {
    @include ellipsis;
  }

  &.dark {
    color: #fff;
  }

  .menu-btn-wrapper {
    position: absolute;
    left: boleGetCssVar('size', 'body-padding-h');
    padding: 20rpx;
    padding-left: 0;
    // top: -20px;
  }

  .menu-btn {
    width: 20rpx;
    height: 30rpx;
  }
}
</style>
