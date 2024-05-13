// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/HeadHunter/CancelHeadHunterAttention */
export async function cancelHeadHunterAttention(
  body: API.HeadHunterViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/HeadHunter/CancelHeadHunterAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建猎头 POST /api/HeadHunter/CreateOrEditHunter */
export async function createOrEditHunter(
  body: API.CreateOrEditHeadHunterInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/HeadHunter/CreateOrEditHunter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除猎头 GET /api/HeadHunter/DeleteHeadHunter */
export async function deleteHeadHunter(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteHeadHunterParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/HeadHunter/DeleteHeadHunter', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 前端获取猎头详情 GET /api/HeadHunter/GetFronHeadHunterInfo */
export async function getFronHeadHunterInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetFronHeadHunterInfoParams,
  options?: API.RequestConfig
) {
  return request<API.HeadHunterDto>('/api/HeadHunter/GetFronHeadHunterInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 前端获取猎头列表 POST /api/HeadHunter/GetFrontHeadHunterList */
export async function getFrontHeadHunterList(
  body: API.GetFrontHeadHunterListInput,
  options?: API.RequestConfig
) {
  return request<API.HeadHunterDtoPageOutput>('/api/HeadHunter/GetFrontHeadHunterList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取猎头详情 GET /api/HeadHunter/GetHeadHunterInfo */
export async function getHeadHunterInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetHeadHunterInfoParams,
  options?: API.RequestConfig
) {
  return request<API.HeadHunterDto>('/api/HeadHunter/GetHeadHunterInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 后端获取猎头列表 POST /api/HeadHunter/GetHeadHunterList */
export async function getHeadHunterList(
  body: API.HeadHunterListInput,
  options?: API.RequestConfig
) {
  return request<API.HeadHunterDtoPageOutput>('/api/HeadHunter/GetHeadHunterList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取推荐猎头 GET /api/HeadHunter/GetHeadHunterRecommend */
export async function getHeadHunterRecommend(options?: API.RequestConfig) {
  return request<API.HeadHunterDto[]>('/api/HeadHunter/GetHeadHunterRecommend', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取我的猎头列表 POST /api/HeadHunter/GetMyHeadHunterList */
export async function getMyHeadHunterList(
  body: API.GetMyHeadHunterListInput,
  options?: API.RequestConfig
) {
  return request<API.HeadHunterDtoPageOutput>('/api/HeadHunter/GetMyHeadHunterList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 猎头信息收藏记录 POST /api/HeadHunter/HeadHunterAttention */
export async function headHunterAttention(
  body: API.HeadHunterViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/HeadHunter/HeadHunterAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 猎头信息浏览记录 POST /api/HeadHunter/HeadHunterBrowse */
export async function headHunterBrowse(body: API.HeadHunterViewInput, options?: API.RequestConfig) {
  return request<number>('/api/HeadHunter/HeadHunterBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置猎头状态 POST /api/HeadHunter/SetHeadHunterStatus */
export async function setHeadHunterStatus(body: API.OrderStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/HeadHunter/SetHeadHunterStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置推荐猎头 POST /api/HeadHunter/SetResourceRecommend */
export async function setResourceRecommend(
  body: API.HeadHunterRecommendInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/HeadHunter/SetResourceRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
