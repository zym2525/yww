<template>
  <LoadingView v-if="loading"> </LoadingView>
  <ErrorView v-else-if="error" :loadError="loadError"> </ErrorView>
  <template v-else>
    <NoData v-if="showNoData" />
    <slot v-else></slot>
  </template>
</template>

<script setup lang="ts">
import { loadingLayoutProps } from './layout';
import NoData from '../NoData/NoData.vue';
import ErrorView from './ErrorView.vue';
import LoadingView from './LoadingView.vue';

defineOptions({
  name: 'LoadingLayout',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
});

const props = defineProps(loadingLayoutProps);
</script>
