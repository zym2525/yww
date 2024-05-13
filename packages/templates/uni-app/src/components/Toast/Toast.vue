<template>
  <u-overlay :show="visible" :z-index="zIndex" :custom-style="overlayStyle"> </u-overlay>
</template>

<script setup lang="ts">
import { toastProps } from './toast';
// import { useVModel } from '@/hooks';

defineOptions({
  name: 'Toast',
  options: {
    virtualHost: true,
  },
});

const props = defineProps(toastProps);

const emit = defineEmits<{
  (e: 'update:visible', val: boolean): void;
}>();

// const visible = useVModel(props, 'visible', emit);
// console.log('visible: ', visible.value);

const overlayStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  backgroundColor: 'rgba(0, 0, 0, 0)',
};
</script>

<style scoped lang="scss">
@import '@/styles/common.scss';
</style>
