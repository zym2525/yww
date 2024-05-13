import { createSSRApp } from 'vue';
import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query';
import './app.scss';
import { createPinia } from 'pinia';

import uviewPlus from 'uview-plus';

import App from './App.vue';

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  },
};

const store = createPinia();

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.use(store);
  app.use(VueQueryPlugin, vueQueryPluginOptions);

  return {
    app,
  };
}
