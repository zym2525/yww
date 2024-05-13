<template>
  <div>authorization</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'authorization',
  options: {
    virtualHost: true,
  },
});

const router = useRouter();

console.log('getCurrentPages().pop().route', router.path, router.params);

function login() {}
</script>

<!-- <style lang="scss" scoped>
@use '@/style/common.scss' as *;
</style> -->
