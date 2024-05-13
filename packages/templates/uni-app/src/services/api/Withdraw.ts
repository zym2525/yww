// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 获取用户是否添加银行账户 GET /api/Withdraw/CheckUserAccountIsSet */
export async function checkUserAccountIsSet(options?: API.RequestConfig) {
  return request<boolean>('/api/Withdraw/CheckUserAccountIsSet', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建或修改用户的账户信息 POST /api/Withdraw/CreateOrEditWithDrawAccount */
export async function createOrEditWithDrawAccount(
  body: API.CreateWithdrawAccountInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Withdraw/CreateOrEditWithDrawAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建用户的提款申请 POST /api/Withdraw/CreateUserWithdrawAccount */
export async function createUserWithdrawAccount(
  body: API.CreateUserWithdrawInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Withdraw/CreateUserWithdrawAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户的银行账号 GET /api/Withdraw/GetUserAccount */
export async function getUserAccount(options?: API.RequestConfig) {
  return request<API.GetUserAccountDto>('/api/Withdraw/GetUserAccount', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户的 POST /api/Withdraw/GetUserWithdrawList */
export async function getUserWithdrawList(
  body: API.GetUserWithdrawInput,
  options?: API.RequestConfig
) {
  return request<API.UserWithdrawDtoPageOutput>('/api/Withdraw/GetUserWithdrawList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 驳回提现申请 POST /api/Withdraw/RejectUserWithdraw */
export async function rejectUserWithdraw(
  body: API.SetUserWithdrawStatusInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Withdraw/RejectUserWithdraw', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 提现完成 POST /api/Withdraw/SetUserWithdrawComplete */
export async function setUserWithdrawComplete(
  body: API.SetUserWithdrawComplete,
  options?: API.RequestConfig
) {
  return request<number>('/api/Withdraw/SetUserWithdrawComplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
