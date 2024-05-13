<template>
  <div
    :class="['navigation-bar-wrapper', { active: props.mode === 'dark', plain: props.plain }]"
    :style="barStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';
import { useSystemStore } from '@/stores/modules/system';
import { navigationBarProps } from './navBarProps';

defineOptions({
  name: 'NavBar',
  options: {
    virtualHost: true,
  },
});

const props = defineProps(navigationBarProps);

const systemStore = useSystemStore();

const barStyle = computed(
  () =>
    ({
      paddingTop: systemStore.info.statusBarHeight + 'px',
      // height: systemStore.navigationBarHeight + 'px',
    }) as CSSProperties
);
</script>

<style lang="scss">
@import '@/styles/common.scss';

.navigation-bar-wrapper {
  /* position: fixed;
  top: 0;
  left: 0; */
  // box-shadow: 0px 1px 7px 0px rgb(237, 238, 241);

  /* z-index: 10; */
  display: flex;
  width: 100%;
  background-color: #fff;

  &.plain {
    border-bottom-right-radius: 20rpx;
    border-bottom-left-radius: 20rpx;
  }

  &.active {
    background-color: boleGetCssVar('color', 'primary');
  }
}
</style>
