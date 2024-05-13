import PortalContainer from './portal-container.vue';
import PortalHost from './portal-host.vue';
import { portal } from './portal';
import Portal from './Portal.vue';

export default {
  Host: PortalHost,
  add: portal.add,
  remove: portal.remove,
  Portal: Portal,
  Container: PortalContainer,
};
