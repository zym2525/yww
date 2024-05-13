// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/Consult/CancelConsultAttention */
export async function cancelConsultAttention(
  body: API.ConsultViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Consult/CancelConsultAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 咨询信息收藏记录 POST /api/Consult/ConsultAttention */
export async function consultAttention(body: API.ConsultViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Consult/ConsultAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 咨询信息浏览记录 POST /api/Consult/ConsultBrowse */
export async function consultBrowse(body: API.ConsultViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Consult/ConsultBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建咨询 POST /api/Consult/CreateOrEditConsult */
export async function createOrEditConsult(
  body: API.CreateOrEditConsultInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Consult/CreateOrEditConsult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除咨询 GET /api/Consult/DeleteConsult */
export async function deleteConsult(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteConsultParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Consult/DeleteConsult', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取咨询详情 GET /api/Consult/GetConsultInfo */
export async function getConsultInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetConsultInfoParams,
  options?: API.RequestConfig
) {
  return request<API.ConsultDto>('/api/Consult/GetConsultInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 后端获取咨询列表 POST /api/Consult/GetConsultList */
export async function getConsultList(body: API.ConsultListInput, options?: API.RequestConfig) {
  return request<API.ConsultDtoPageOutput>('/api/Consult/GetConsultList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取推荐咨询 GET /api/Consult/GetConsultRecommend */
export async function getConsultRecommend(options?: API.RequestConfig) {
  return request<API.ConsultDto[]>('/api/Consult/GetConsultRecommend', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 前端获取咨询详情 GET /api/Consult/GetFronConsultInfo */
export async function getFronConsultInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetFronConsultInfoParams,
  options?: API.RequestConfig
) {
  return request<API.ConsultDto>('/api/Consult/GetFronConsultInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 前端获取咨询列表 POST /api/Consult/GetFrontConsultList */
export async function getFrontConsultList(
  body: API.GetFrontConsultListInput,
  options?: API.RequestConfig
) {
  return request<API.ConsultDtoPageOutput>('/api/Consult/GetFrontConsultList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取我的咨询列表 POST /api/Consult/GetMyConsultList */
export async function getMyConsultList(
  body: API.GetMyConsultListInput,
  options?: API.RequestConfig
) {
  return request<API.ConsultDtoPageOutput>('/api/Consult/GetMyConsultList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置咨询状态 POST /api/Consult/SetConsultStatus */
export async function setConsultStatus(body: API.OrderStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/Consult/SetConsultStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置推荐咨询 POST /api/Consult/SetResourceRecommend */
export async function setResourceRecommend(
  body: API.ConsultRecommendInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Consult/SetResourceRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
