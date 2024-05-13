import { PropType, ExtractPropTypes } from 'vue';

export const toastProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'default' | 'success' | 'warning' | 'error' | 'loading' | 'primary'>,
    default: 'default',
  },
  message: {
    type: String,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  zIndex: {
    type: Number,
    default: 20022221,
  },
  icon: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
  },
  isTab: {
    type: Boolean,
  },
};

export type IToastProps = ExtractPropTypes<typeof toastProps>;
