<template>
  <div class="loading-layout-loading-content-wrapper">
    <up-loading-icon
      size="16"
      class="nut-icon"
      :customStyle="{ marginRight: '8rpx' }"
    ></up-loading-icon>
    <div class="list-empty-hint-text">数据加载中......</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoadingView',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
});

// type Props = {};

// const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss">
@import '@/styles/common.scss';

.loading-layout-loading-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40rpx;

  .nut-icon,
  .u-loading-icon {
    margin-right: 8rpx;
    color: boleGetCssVar('text-color', 'primary');
  }

  .list-empty-hint-text {
    font-size: 30rpx;
    line-height: 1;
    color: boleGetCssVar('text-color', 'primary');
  }
}
</style>
