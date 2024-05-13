<template>
  <div>
    mine
    <up-button type="primary" text="login" @click="goLogin"></up-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'mine',
  options: {
    virtualHost: true,
  },
});

function goLogin() {
  uni.navigateTo({
    url: `${RouterPath.authorization}?id=${123}`,
  });
}
</script>

<!-- <style lang="scss" scoped>
@use '@/style/common.scss' as *;
</style> -->
