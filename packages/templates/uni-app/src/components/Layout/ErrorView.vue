<template>
  <up-empty
    class="loading-layout-error-wrapper"
    text="加载失败"
    icon="https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png"
  >
    <up-button
      type="primary"
      text="重试"
      :customStyle="{ marginTop: '20rpx', width: '200rpx' }"
      shape="circle"
      @click="props.loadError"
    ></up-button>
  </up-empty>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineOptions({
  name: 'ErrorView',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
});

const props = defineProps({
  loadError: {
    type: Function as PropType<(...args: any[]) => any>,
  },
});
</script>

<style lang="scss">
@import '@/styles/common.scss';

.loading-layout-error-wrapper {
  height: 100%;

  .u-empty__text {
    margin-top: 4rpx !important;
  }
}
</style>
