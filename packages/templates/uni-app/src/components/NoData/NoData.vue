<template>
  <div class="no-data-wrapper">
    <img class="no-data-img" :src="NoDataImage" alt="" />
    <span class="no-data-text">暂无数据</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { NoDataImage } from '@/constants';

export default defineComponent({
  name: 'NoData',

  setup() {
    return {
      NoDataImage,
    };
  },
});
</script>

<style lang="scss">
.no-data-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .no-data-img {
    width: 284rpx;
    height: 202rpx;
  }

  .no-data-text {
    font-size: 20rpx;
    line-height: 2.4;
    color: #333;
  }
}
</style>
