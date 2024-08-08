import * as V from './valid';
import * as F from './field';
import * as H from './help';
import * as T from './table';

const Modules = V.C.p()
  ? {
      ...F,
      ...H,
      ...T,
    }
  : {};

export default Modules;
