import { store } from '@/stores';
import { defineStore } from 'pinia';
import { flattenAreaTree } from '@/utils';
import * as areaServices from '@/services/api/Area';

export interface AreaState {
  /**
   * 完整的地区数据树
   */
  completeAreaTree: API.AreaTreeNode[];
  /**
   * 打平的完整的地区
   */
  completeAreaList: API.AreaInfo[];
  completeAreaTreeDone: boolean;
  /**
   * 多个select分步获取地区数据
   */
  provinceList: API.AreaInfo[];
  /**
   * 储存areaCode下面的子集
   */
  areaMap: Record<API.AreaInfo['areaCode'], API.AreaInfo[]>;
  /**
   * 根据areaCode储存单个area数据
   */
  areaItemMap: Record<API.AreaInfo['areaCode'], API.AreaInfo>;
}

export const useAreaStore = defineStore({
  id: 'area',
  state: (): AreaState => ({
    completeAreaTree: [],
    completeAreaTreeDone: false,
    completeAreaList: [],
    //----------------------------------
    provinceList: [],
    areaMap: {},
    areaItemMap: {},
  }),
  getters: {
    getAreaFromCompleteAreaList(state) {
      return (areaCode: number) => state.completeAreaList.find((x) => x.areaCode === areaCode);
    },
    getAreaByAreaCode(state) {
      return (areaCode: number) => state.areaItemMap[areaCode];
    },
  },

  actions: {
    async getCompleteAreaTree() {
      try {
        if (!this.completeAreaList.length) {
          const res = await areaServices.getRegionalManagementList({
            showLoading: false,
          });
          this.completeAreaTreeDone = true;
          const completeAreaList = flattenAreaTree(res);
          this.completeAreaList = completeAreaList;
          this.completeAreaTree = res;
          this.provinceList = this.completeAreaTree;
          this.setAreaMap(res);
        }
        return this.completeAreaTree;
      } catch (error) {
        throw error;
      }
    },

    setAreaMap(areaList: API.AreaInfo[]) {
      areaList.forEach((item) => {
        this.areaItemMap[item.areaCode] = item;
      });
    },
  },
});

export function useAreaStoreHook() {
  return useAreaStore(store);
}
