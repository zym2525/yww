import type { VNode, ExtractPropTypes, PropType } from 'vue';

// export type PortalNode = VNode | VNode[];

export const portalNodeProps = {
  portalType: {
    type: String as PropType<'toast' | 'modal'>,
    default: 'toast',
  },
  message: {
    type: String,
  },
  onClose: {
    type: Function as PropType<() => any>,
  },
  icon: {
    type: String,
  },
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  iconUrl: {
    type: String,
  },
  duration: {
    type: Number,
    default: 2000,
  },
};

export type PortalNode = Partial<ExtractPropTypes<typeof portalNodeProps>>;

export type State = {
  portals: Array<{
    key: number;
    children: PortalNode;
  }>;
};
export type PortalManagerState = {
  portals: Array<{
    key: number;
    children: PortalNode;
  }>;
};

export type PortalMethods = {
  mount: (params: { children: PortalNode; key?: number }) => number;
  update: (key: number, children: PortalNode) => void;
  unmount: (key: number) => void;
};

export type Operation =
  | { type: 'mount'; key: number; children: PortalNode }
  | { type: 'update'; key: number; children: PortalNode }
  | { type: 'unmount'; key: number };

export const PortalContextKey: InjectionKey<PortalMethods> = Symbol('PortalContextKey');

export function usePortalContext() {
  return inject(PortalContextKey);
}

export function getUniqueKey(key: string) {
  const prefix = PageUtils.getPath();
  return `${prefix}_${key}`;
}

// events
export const addType = 'ADD_PORTAL';
export const removeType = 'REMOVE_PORTAL';

class PortalGuard {
  private nextKey = 10000;
  add = (render: (_key: number) => PortalNode) => {
    const key = this.nextKey++;
    const node = render(key);
    uni.$emit(getUniqueKey(addType), { children: node, key });
    return key;
  };
  remove = (key: number) => {
    uni.$emit(getUniqueKey(removeType), key);
  };
}
/**
 * portal
 */
export const portal = new PortalGuard();

export type PortalManagerInstance = {
  mount: (key: number, children: PortalNode) => void;
  update: (key: number, children: PortalNode) => void;
  unmount: (key: number) => {
    key: number;
    children: PortalNode;
  }[];
};
