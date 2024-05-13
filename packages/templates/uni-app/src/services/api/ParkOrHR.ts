// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 上架广告信息 GET /api/ParkOrHR/AdvertiseOffShelf */
export async function advertiseOffShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/ParkOrHR/AdvertiseOffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下架广告信息 GET /api/ParkOrHR/AdvertiseOnShelf */
export async function advertiseOnShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOnShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/ParkOrHR/AdvertiseOnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 关注园区或人资企业 GET /api/ParkOrHR/AttentOrNot */
export async function attentOrNot(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIattentOrNotParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/ParkOrHR/AttentOrNot', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建园区或人资企业 POST /api/ParkOrHR/CreateOrEditParkOrHR */
export async function createOrEditParkOrHR(
  body: API.CreateOrEditParkOrHRInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/ParkOrHR/CreateOrEditParkOrHR', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建广告信息 POST /api/ParkOrHR/CreateParkOrHRAdvertise */
export async function createParkOrHRAdvertise(
  body: API.CreateParkOrHRAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/ParkOrHR/CreateParkOrHRAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取最大广告序列 GET /api/ParkOrHR/GetMaxAdvertiseSequence */
export async function getMaxAdvertiseSequence(options?: API.RequestConfig) {
  return request<number>('/api/ParkOrHR/GetMaxAdvertiseSequence', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取园区客户 POST /api/ParkOrHR/GetParkCustomerList */
export async function getParkCustomerList(
  body: API.FrontHROfParkInput,
  options?: API.RequestConfig
) {
  return request<API.FrontHROfParkListPageOutput>('/api/ParkOrHR/GetParkCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取广告信息 GET /api/ParkOrHR/GetParkOrHRAdvertise */
export async function getParkOrHRAdvertise(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetParkOrHRAdvertiseParams,
  options?: API.RequestConfig
) {
  return request<API.ParkOrHRAdvertiseInfo>('/api/ParkOrHR/GetParkOrHRAdvertise', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取推荐园区信息 POST /api/ParkOrHR/GetParkOrHRAdvertiseForRecommend */
export async function getParkOrHRAdvertiseForRecommend(
  body: API.ParkHRForHomePageInput,
  options?: API.RequestConfig
) {
  return request<API.ParkOrHRDetailPageOutput>('/api/ParkOrHR/GetParkOrHRAdvertiseForRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取园区信息 POST /api/ParkOrHR/GetParkOrHRForFront */
export async function getParkOrHRForFront(
  body: API.ParkHRForHomePageInput,
  options?: API.RequestConfig
) {
  return request<API.ParkOrHRDetailPageOutput>('/api/ParkOrHR/GetParkOrHRForFront', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取园区或人资企业详情 GET /api/ParkOrHR/GetParkOrHRInfo */
export async function getParkOrHRInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetParkOrHRInfoParams,
  options?: API.RequestConfig
) {
  return request<API.ParkOrHRInfo>('/api/ParkOrHR/GetParkOrHRInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户ID获取园区或人资企业详情 POST /api/ParkOrHR/GetParkOrHRInfoByUserId */
export async function getParkOrHRInfoByUserId(
  body: API.GetParkOrHRInfoByUserInput,
  options?: API.RequestConfig
) {
  return request<API.ParkOrHRInfo>('/api/ParkOrHR/GetParkOrHRInfoByUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取园区的信息 POST /api/ParkOrHR/GetParkOrHRList */
export async function getParkOrHRList(body: API.ParkHRInput, options?: API.RequestConfig) {
  return request<API.ParkOrHRListPageOutput>('/api/ParkOrHR/GetParkOrHRList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取审核列表 POST /api/ParkOrHR/GetParkOrHRListForCheck */
export async function getParkOrHRListForCheck(body: API.ParkHRInput, options?: API.RequestConfig) {
  return request<API.ParkOrHRListPageOutput>('/api/ParkOrHR/GetParkOrHRListForCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 增加浏览记录 POST /api/ParkOrHR/ParkOrHRBrowse */
export async function parkOrHRBrowse(body: API.ProductViewInput, options?: API.RequestConfig) {
  return request<number>('/api/ParkOrHR/ParkOrHRBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更改状态 POST /api/ParkOrHR/SetStatus */
export async function setStatus(body: API.SetStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/ParkOrHR/SetStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新广告信息 POST /api/ParkOrHR/UpdatParkOrHRAdvertise */
export async function updatParkOrHRAdvertise(
  body: API.UpdateProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/ParkOrHR/UpdatParkOrHRAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户增加广告 POST /api/ParkOrHR/UserCreateParkOrHRAdvertise */
export async function userCreateParkOrHRAdvertise(
  body: API.UserCreateParkOrHRAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/ParkOrHR/UserCreateParkOrHRAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
