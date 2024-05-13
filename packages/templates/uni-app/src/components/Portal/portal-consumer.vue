<script lang="ts">
import { PortalMethods } from './portal';

export default defineComponent({
  name: 'PortalConsumer',
  props: {
    manager: {
      type: Object as PropType<PortalMethods>,
    },
  },
  setup(props) {
    const _key = ref<number>();

    const slots = useSlots();

    onMounted(() => {
      if (!props.manager) {
        throw new Error('forgot');
      }
      const defaultSlot = slots.default();
      //@ts-ignore
      props.manager.update(_key.value, defaultSlot);
      //@ts-ignore
      _key.value = props.manager.mount(defaultSlot);
    });

    onUpdated(() => {
      const defaultSlot = slots.default();
      //@ts-ignore
      props.manager.update(_key.value, defaultSlot);
    });

    onUnmounted(() => {
      props.manager.unmount(_key.value);
    });

    return () => null;
  },
});
</script>
