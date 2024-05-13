<template>
  <PageLayout title="首页">
    <!-- <LoadingLayout :loading="false" :error="true"> -->
    <InfiniteLoading
      v-bind="infiniteLoadingProps"
      ref="infiniteLoadingRef"
      class="common-infinite-scroll-list"
    >
      <!-- <template #header>
        <div style="height: 200px; background-color: #000"></div>
      </template> -->
      <template v-for="(item, index) in flattenListData" :key="item.id" >
        <div :class="['item', `item-${index}`]">
          {{ item.id }}
        </div>
      </template>
    </InfiniteLoading>
    <!-- </LoadingLayout> -->
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/Layout/PageLayout.vue';
import InfiniteLoading from '@/components/InfiniteLoading/InfiniteLoading.vue';
import { Message } from '@/utils';
import * as parkOrHRServices from '@/services/api/ParkOrHR';
import { useInfiniteLoading } from '@/hooks';
// import LoadingLayout from '@/components/Layout/LoadingLayout.vue';

function delay() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const { infiniteLoadingProps, flattenListData, infiniteLoadingRef } = useInfiniteLoading(
  async ({ pageParam = 1, pageSize }) => {
    console.log('pageParam: ', pageParam);
    let params: API.ParkHRInput = {
      pageModel: {
        rows: pageSize,
        page: pageParam,
      },
      // status: 20,
    };
    await delay();

    // throw new Error('error');
    return parkOrHRServices.getParkOrHRList(params, { showLoading: false });
  },
  {
    queryKey: ['productServices/getProductsByCategory'],
    pageSize: 5,
  }
);
</script>

<style lang="scss">
@import '@/styles/common.scss';

.box {
  width: 375rpx;
  height: 100rpx;
  background-color: yellow;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.item {
  height: 200rpx;
  margin-bottom: 20rpx;
  background-color: yellow;

  &.item-3 {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}

.sticky-view {
  position: sticky;
  top: 0;
  height: 100rpx;
  background-color: red;
}
</style>
