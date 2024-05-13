import { navigationBarProps } from './navBarProps';

export const commonNavigationBarProps = {
  title: {
    type: String,
    default: '',
  },
  showLeftArrow: {
    type: Boolean,
    default: true,
  },
  showNavigationBar: {
    type: Boolean,
    default: true,
  },
  navigationArrowWhite: {
    type: Boolean,
    default: false,
  },
  ...navigationBarProps,
};
