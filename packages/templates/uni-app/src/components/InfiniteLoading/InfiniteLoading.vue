<template>
  <z-paging
    ref="paging"
    v-model="innerDataList"
    @query="queryList"
    :default-page-size="pageSize"
    :fixed="false"
    height="100%"
    loading-more-no-more-text="没有更多内容了~"
  >
    <template #top>
      <slot name="top"></slot>
    </template>
    <slot name="header"></slot>

    <slot v-if="$slots.default" />
    <template v-else>
      <template v-for="(item, i) in innerDataList" :key="i">
        <slot name="renderItem" :item="item" :index="i" />
      </template>
    </template>

    <template #empty="{ isLoadFailed }">
      <ErrorView v-if="isLoadFailed" :loadError="() => refetch?.()"></ErrorView>
      <NoData v-else />
    </template>

    <template #loading>
      <LoadingView />
    </template>
  </z-paging>
</template>

<script setup lang="ts">
import { useVModel } from '@/hooks';
import NoData from '../NoData/NoData.vue';
import ErrorView from '../Layout/ErrorView.vue';
import LoadingView from '../Layout/LoadingView.vue';

defineOptions({
  name: 'InfiniteLoading',
  options: {
    virtualHost: true,
  },
});

const paging = ref(null);

type Props = {
  pageSize?: number;
  queryList(pageNo: number, pageSize: number): any;
  dataList: any[];
  refetch?: (options?: any) => Promise<any>;
};

const props = withDefaults(defineProps<Props>(), {
  pageSize: 20,
});

const emit = defineEmits<{
  (e: 'update:dataList', val: Props['dataList']): void;
}>();

const innerDataList = useVModel(props, 'dataList', emit);

defineExpose({
  paging: paging,
});
</script>
