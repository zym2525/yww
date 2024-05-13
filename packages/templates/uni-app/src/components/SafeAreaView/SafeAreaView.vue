<template>
  <div>
    <u-status-bar></u-status-bar>
    <slot></slot>
    <u-safe-bottom></u-safe-bottom>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SafeAreaView',
  options: {
    virtualHost: true,
  },
});

// type Props = {};

// const props = withDefaults(defineProps<Props>(), {});
</script>

<!-- <style lang="scss" scoped>
@use '@/style/common.scss' as *;
</style> -->
