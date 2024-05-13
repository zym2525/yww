import { defineStore } from 'pinia';
import { store } from '@/stores';

export interface PageState {
  productPageCategoryId: string;
  productPageSearchValue: string;
  informationPageCategoryId: string;
  informationPageSearchValue: string;
}

export const usePageStore = defineStore({
  id: 'app-page',
  state: (): PageState => ({
    productPageCategoryId: '',
    productPageSearchValue: '',
    informationPageCategoryId: '',
    informationPageSearchValue: '',
  }),
  actions: {
    setProductPageCategoryId(id: string) {
      this.productPageCategoryId = id;
    },
    setProductPageSearchValue(value: string) {
      this.productPageSearchValue = value;
    },
    setInformationPageCategoryId(id: string) {
      this.informationPageCategoryId = id;
    },
    setInformationPageSearchValue(value: string) {
      this.informationPageSearchValue = value;
    },
  },
});

export function usePageStoreHook() {
  return usePageStore(store);
}
