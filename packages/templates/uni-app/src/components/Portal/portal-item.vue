<template>
  <up-toast v-if="props.portalType === 'toast'" ref="uToastRef"></up-toast>
</template>

<script setup lang="ts">
import { portalNodeProps } from './portal';

defineOptions({
  name: 'portal-item',
  options: {
    virtualHost: true,
  },
});

const props = defineProps(portalNodeProps);

const uToastRef = ref(null);

onMounted(() => {
  if (uToastRef.value) {
    uToastRef.value.show({
      type: props.type || 'default',
      title: props.title,
      message: props.message,
      iconUrl: props.iconUrl,
      duration: props.duration,
      complete() {
        props.onClose?.();
      },
    });
  }
});
</script>
