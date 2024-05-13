// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 用户咨询信息记录 POST /api/TencentUser/AddTencentConsult */
export async function addTencentConsult(body: API.TencentConsultDto, options?: API.RequestConfig) {
  return request<number>('/api/TencentUser/AddTencentConsult', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增腾讯用户 POST /api/TencentUser/AddTencentUser */
export async function addTencentUser(body: API.TencentUserInput, options?: API.RequestConfig) {
  return request<API.TencentUserOutput>('/api/TencentUser/AddTencentUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除腾讯IM账号对应关系 DELETE /api/TencentUser/DeleteTencentUser */
export async function deleteTencentUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteTencentUserParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/TencentUser/DeleteTencentUser', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取腾讯签名 GET /api/TencentUser/GenTencentSig */
export async function genTencentSig(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgenTencentSigParams,
  options?: API.RequestConfig
) {
  return request<string>('/api/TencentUser/GenTencentSig', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取客服人员的user Id GET /api/TencentUser/GetServeUser */
export async function getServeUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetServeUserParams,
  options?: API.RequestConfig
) {
  return request<string>('/api/TencentUser/GetServeUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/TencentUser/GetTencentUserByUserId */
export async function getTencentUserByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetTencentUserByUserIdParams,
  options?: API.RequestConfig
) {
  return request<API.TencentUserDto>('/api/TencentUser/GetTencentUserByUserId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取腾讯IM账号对应关系 POST /api/TencentUser/GetTencentUserList */
export async function getTencentUserList(
  body: API.GetTencentUserInput,
  options?: API.RequestConfig
) {
  return request<API.TencentUserDtoPageOutput>('/api/TencentUser/GetTencentUserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置腾讯IM账号对应关系 POST /api/TencentUser/SetUserTencentUserId */
export async function setUserTencentUserId(
  body: API.SetUserTencentUserIdDto,
  options?: API.RequestConfig
) {
  return request<number>('/api/TencentUser/SetUserTencentUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 禁用腾讯IM账号对应关系 GET /api/TencentUser/TencentUserEnableOrForbid */
export async function tencentUserEnableOrForbid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APItencentUserEnableOrForbidParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/TencentUser/TencentUserEnableOrForbid', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
