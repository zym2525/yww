// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/Resource/CancelResourceAttention */
export async function cancelResourceAttention(
  body: API.ResourceViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Resource/CancelResourceAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增修改资源 POST /api/Resource/CreateOrEditResource */
export async function createOrEditResource(
  body: API.CreateOrEditResourceInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Resource/CreateOrEditResource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除资源 GET /api/Resource/DeleteResource */
export async function deleteResource(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteResourceParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Resource/DeleteResource', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取前端资源显示详情 GET /api/Resource/GetFrontResourceInfo */
export async function getFrontResourceInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetFrontResourceInfoParams,
  options?: API.RequestConfig
) {
  return request<API.ResourceFrontInfoDto>('/api/Resource/GetFrontResourceInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户ID获取前端资源显示详情 GET /api/Resource/GetFrontResourceInfoByUserId */
export async function getFrontResourceInfoByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetFrontResourceInfoByUserIdParams,
  options?: API.RequestConfig
) {
  return request<API.ResourceFrontInfoDto>('/api/Resource/GetFrontResourceInfoByUserId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取前端资源显示列表 POST /api/Resource/GetFrontResourceList */
export async function getFrontResourceList(
  body: API.GetFrontResourceListInput,
  options?: API.RequestConfig
) {
  return request<API.GetFrontResourceListPageOutput>('/api/Resource/GetFrontResourceList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取我的资源列表 POST /api/Resource/GetMyResourceList */
export async function getMyResourceList(
  body: API.GetMyResourceListInput,
  options?: API.RequestConfig
) {
  return request<API.GetFrontResourceListPageOutput>('/api/Resource/GetMyResourceList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取资源详情 GET /api/Resource/GetResourceInfo */
export async function getResourceInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetResourceInfoParams,
  options?: API.RequestConfig
) {
  return request<API.ResourceInfoDto>('/api/Resource/GetResourceInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取资源列表 POST /api/Resource/GetResourceList */
export async function getResourceList(body: API.ResourceListInput, options?: API.RequestConfig) {
  return request<API.ResourceListDtoPageOutput>('/api/Resource/GetResourceList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取资源推荐列表 GET /api/Resource/GetResourceListForRecommend */
export async function getResourceListForRecommend(options?: API.RequestConfig) {
  return request<API.ResourceListDto[]>('/api/Resource/GetResourceListForRecommend', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据用户获取user的资源订单 POST /api/Resource/GetUserResourceList */
export async function getUserResourceList(
  body: API.UserOrderListInput,
  options?: API.RequestConfig
) {
  return request<API.GetFrontResourceListPageOutput>('/api/Resource/GetUserResourceList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资源浏览 POST /api/Resource/ResourceAttention */
export async function resourceAttention(body: API.ResourceViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Resource/ResourceAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资源浏览 POST /api/Resource/ResourceBrowse */
export async function resourceBrowse(body: API.ResourceViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Resource/ResourceBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置资源推荐 POST /api/Resource/SetResourceRecommend */
export async function setResourceRecommend(
  body: API.ResourceRecommendInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Resource/SetResourceRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置资源状态 POST /api/Resource/SetResourceStatus */
export async function setResourceStatus(body: API.OrderStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/Resource/SetResourceStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置资源类型 GET /api/Resource/SetResourceType */
export async function setResourceType(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIsetResourceTypeParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Resource/SetResourceType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
