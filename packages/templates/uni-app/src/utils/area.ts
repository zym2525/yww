import { AreaType } from '@/constants';

export interface AreaTreeNode extends API.AreaInfo {
  children?: AreaTreeNode[];
}

export function formatAreaListToTree(
  areaDataList: API.AreaInfo[],
  parentId: number,
  maxLayer = AreaType.Area
) {
  const treeNodeList: API.AreaTreeNode[] = [];
  if (areaDataList.length > 0) {
    areaDataList.forEach((areaData) => {
      const areaTreeNode: API.AreaTreeNode = { ...areaData };
      if (areaData.parentId === parentId && areaData.layer <= maxLayer) {
        const children = formatAreaListToTree(areaDataList, areaData.areaCode, maxLayer);
        areaTreeNode.children = children;
        treeNodeList.push(areaTreeNode);
      }
    });
  }
  return treeNodeList;
}

export function flattenAreaTree(tree: API.AreaInfo[]) {
  let result = [] as API.AreaInfo[];

  // 递归函数，用于遍历子节点
  function flatten(node: API.AreaInfo) {
    result.push(node);

    if (node.children && node.children.length > 0) {
      node.children.forEach(flatten);
    }
  }

  // 遍历树的根节点
  tree.forEach(flatten);

  return result;
}
