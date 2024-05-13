<template>
  <div>
    <portal-item v-for="item in state.portals" :key="item.key" v-bind="item.children">
    </portal-item>
  </div>
</template>

<script lang="ts">
import { renderSlot } from 'vue';
import { State, PortalNode } from './portal';
import { isVNode } from 'vue';
import PortalItem from './portal-item.vue';

export default defineComponent({
  name: 'PortalManager',
  components: { PortalItem },
  setup(props, { expose }) {
    const state = reactive<State>({
      portals: [],
    });

    const mount = (key: number, children: PortalNode) => {
      state.portals.push({ key, children });
    };
    const update = (key: number, children: PortalNode) => {
      state.portals = state.portals.map((item) => {
        if (item.key === key) {
          return { ...item, children };
        }
        return item;
      });
    };

    const unmount = (key: number) => {
      state.portals = state.portals.filter((item) => item.key !== key);
    };

    expose({
      mount,
      update,
      unmount,
    });

    return {
      state,
    };

    // return () => {
    //   return h(
    //     'div',
    //     null,
    //     state.portals.map((item) => {
    //       return h('div', { key: item.key }, [item.children]);
    //     })
    //   );
    // };
  },
});
</script>
