<template>
  <PortalConsumer :manager="portalContext">
    <template #default>
      <slot />
    </template>
  </PortalConsumer>
</template>

<script setup lang="ts">
import PortalConsumer from './portal-consumer.vue';
// import PortalContainer from './portal-container';
import { portal, usePortalContext } from './portal';

defineOptions({
  name: 'Portal',
  options: {
    virtualHost: true,
  },
});

const portalContext = usePortalContext();
</script>
