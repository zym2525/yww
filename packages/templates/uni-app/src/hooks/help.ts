import { pick } from 'lodash';
import { ToRefs } from 'vue';

export function usePick<T extends object>(object: T, props: string[]) {
  return computed(() => pick(object, props));
}

export function usePickProps<T extends object, P extends object>(props: T, restProps: P) {
  return usePick(props, Object.keys(restProps));
}

export function useVModel<P extends object, K extends keyof P>(
  props: P,
  key: K,
  emit: (name: string, ...args: any[]) => void
) {
  return computed({
    get() {
      return props[key];
    },
    set(v: any) {
      emit(`update:${key!.toString()}`, v);
    },
  });
}

export function useVModels<P extends object>(
  props: P,
  emit: (name: string, ...args: any[]) => void
): ToRefs<P> {
  const ret: any = {};

  for (const key in props) {
    ret[key] = useVModel(props, key, emit);
  }
  return ret;
}
