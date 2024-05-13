<template>
  <slot></slot>
  <PortalManager ref="_manager" />
</template>

<script setup lang="ts">
import {
  PortalContextKey,
  Operation,
  getUniqueKey,
  addType,
  removeType,
  PortalNode,
  PortalManagerInstance,
} from './portal';
import PortalManager from './portal-manager.vue';

defineOptions({
  name: 'portal-host',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
});

const _nextKey = ref(0);
const _queue = ref<Operation[]>([]);
const _manager = ref<PortalManagerInstance>();

onMounted(() => {
  uni.$on(getUniqueKey(addType), _mount);
  uni.$on(getUniqueKey(removeType), _unmount);

  while (_queue.value.length && _manager.value) {
    const action = _queue.value.pop();
    if (!action) {
      continue;
    }

    switch (action.type) {
      case 'mount':
        _manager.value.mount(action.key, action.children);
        break;
      case 'update':
        _manager.value.update(action.key, action.children);
        break;
      case 'unmount':
        _manager.value.unmount(action.key);
        break;
    }
  }
});

onUnmounted(() => {
  uni.$off(getUniqueKey(addType), _mount);
  uni.$off(getUniqueKey(removeType), _unmount);
});

const _setManager = (manager?: any) => {
  _manager.value = manager;
};

const _mount = ({ children, key: _key }: { children: PortalNode; key?: number }) => {
  const key = _key || _nextKey.value++;
  if (_manager.value) {
    _manager.value.mount(key, children);
  } else {
    _queue.value.push({ type: 'mount', key, children });
  }

  return key;
};

const _update = (key: number, children: PortalNode) => {
  if (_manager.value) {
    _manager.value.update(key, children);
  } else {
    const op: Operation = { type: 'mount', key, children };
    const index = _queue.value.findIndex(
      (o) => o.type === 'mount' || (o.type === 'update' && o.key === key)
    );

    if (index > -1) {
      _queue.value[index] = op;
    } else {
      _queue.value.push(op);
    }
  }
};

const _unmount = (key: number) => {
  if (_manager.value) {
    _manager.value.unmount(key);
  } else {
    _queue.value.push({ type: 'unmount', key });
  }
};

provide(PortalContextKey, {
  mount: _mount,
  update: _update,
  unmount: _unmount,
});
</script>
