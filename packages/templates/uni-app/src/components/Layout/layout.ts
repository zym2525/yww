import { PropType } from 'vue';

export const loadingLayoutProps = {
  loading: {
    type: Boolean,
  },
  error: {
    type: Boolean,
  },
  showNoData: {
    type: Boolean,
  },
  loadError: {
    type: Function as PropType<(...args: any[]) => any>,
  },
  id: {
    type: String,
  },
};
