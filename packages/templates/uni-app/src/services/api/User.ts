// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 提交企业认证 POST /api/User/CompanyAttestationSubmit */
export async function companyAttestationSubmit(
  body: API.CompanyAttestationSubmitInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/User/CompanyAttestationSubmit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新建企业用户 POST /api/User/CreateCompanyUser */
export async function createCompanyUser(
  body: API.CreateCompanyUserInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/User/CreateCompanyUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企业用户列表 POST /api/User/GetAllCompanyUsers */
export async function getAllCompanyUsers(
  body: API.GeAlltCompanyUsersInput,
  options?: API.RequestConfig
) {
  return request<API.CompanyUserDto[]>('/api/User/GetAllCompanyUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取企业提交认证信息 GET /api/User/GetCompanyAttestation */
export async function getCompanyAttestation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetCompanyAttestationParams,
  options?: API.RequestConfig
) {
  return request<API.CompanyAttestationDto>('/api/User/GetCompanyAttestation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企业用户详情 GET /api/User/GetCompanyUser */
export async function getCompanyUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetCompanyUserParams,
  options?: API.RequestConfig
) {
  return request<API.CompanyUserDetail>('/api/User/GetCompanyUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 企业用户列表 POST /api/User/GetCompanyUsers */
export async function getCompanyUsers(body: API.GetCompanyUsersInput, options?: API.RequestConfig) {
  return request<API.CompanyUserDtoPageOutput>('/api/User/GetCompanyUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 自营客户目录 GET /api/User/GetCustomers */
export async function getCustomers(options?: API.RequestConfig) {
  return request<API.CustomerMenu[]>('/api/User/GetCustomers', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取个人提交认证信息 GET /api/User/GetPersonalAttestation */
export async function getPersonalAttestation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetPersonalAttestationParams,
  options?: API.RequestConfig
) {
  return request<API.PersonalAttestationDto>('/api/User/GetPersonalAttestation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 个人用户详情 GET /api/User/GetPersonalUser */
export async function getPersonalUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetPersonalUserParams,
  options?: API.RequestConfig
) {
  return request<API.PersonalUserDetail>('/api/User/GetPersonalUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 个人用户列表 POST /api/User/GetPersonalUsers */
export async function getPersonalUsers(
  body: API.GetPersonalUsersInput,
  options?: API.RequestConfig
) {
  return request<API.PersonalUserDtoPageOutput>('/api/User/GetPersonalUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 认证审核列表 POST /api/User/GetUserAttestations */
export async function getUserAttestations(
  body: API.GetUserAttestationsInput,
  options?: API.RequestConfig
) {
  return request<API.UserAttestationDtoPageOutput>('/api/User/GetUserAttestations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户名片 GET /api/User/GetUserCardById */
export async function getUserCardById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetUserCardByIdParams,
  options?: API.RequestConfig
) {
  return request<API.UserCardDto>('/api/User/GetUserCardById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取登录用户信息 GET /api/User/GetUserInfo */
export async function getUserInfo(options?: API.RequestConfig) {
  return request<API.UserInfo>('/api/User/GetUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 提交个人认证 POST /api/User/PersonalAttestationSubmit */
export async function personalAttestationSubmit(
  body: API.PersonalAttestationSubmitInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/User/PersonalAttestationSubmit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置用户AuthType POST /api/User/SetUserAuthType */
export async function setUserAuthType(body: API.SetUserTypeInput, options?: API.RequestConfig) {
  return request<number>('/api/User/SetUserAuthType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 企业用户编辑 POST /api/User/UpdateCompanyUser */
export async function updateCompanyUser(
  body: API.UpdateCompanyUserInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/User/UpdateCompanyUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户名片 POST /api/User/UpdateUserCard */
export async function updateUserCard(body: API.UpdateUserCardInput, options?: API.RequestConfig) {
  return request<number>('/api/User/UpdateUserCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 认证审核 POST /api/User/UserAttestationCheck */
export async function userAttestationCheck(
  body: API.UserAttestationCheckInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/User/UserAttestationCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户启用/禁用 GET /api/User/UserEnableOrForbid */
export async function userEnableOrForbid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIuserEnableOrForbidParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/User/UserEnableOrForbid', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
