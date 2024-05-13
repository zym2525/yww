<script lang="ts">
import { VNode } from 'vue';
import { portal } from './portal';

export default defineComponent({
  name: 'portal-container',
  props: {
    render: {
      type: Function as PropType<(open: Ref<boolean>, onClose?: () => any) => VNode>,
    },
    keyNumber: {
      type: Number,
    },
    /**
     * 是否延迟设置open为true
     */
    delayOpen: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    console.log('2222', 2222);
    const open = ref(!props.delayOpen);

    function onClose() {
      open.value = false;
    }

    onMounted(() => {
      if (props.delayOpen) {
        setTimeout(() => {
          open.value = true;
        }, 30);
      }
    });

    watch(open, (open, preOpen) => {
      if (preOpen && !open) {
        setTimeout(() => {
          portal.remove(props.keyNumber);
        }, 300);
      }
    });

    return () => {
      //   const childrenNode = props.render(open, onClose);
      return slots.default?.({ open, onClose });
    };
  },
});
</script>
