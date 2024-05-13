// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 客户线下充值 POST /api/Recharge/CreateOfflineRecharge */
export async function createOfflineRecharge(
  body: API.CreateRechargeInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Recharge/CreateOfflineRecharge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 账号余额--获取客户的充值记录 POST /api/Recharge/GetCustomerAmountList */
export async function getCustomerAmountList(
  body: API.CusmterAmountListInput,
  options?: API.RequestConfig
) {
  return request<API.CusmterAmountDtoPageOutput>('/api/Recharge/GetCustomerAmountList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 账户余额--充值记录 获取某个客户的充值记录 POST /api/Recharge/GetCustomerRechargeList */
export async function getCustomerRechargeList(
  body: API.CustomerRechargeListInput,
  options?: API.RequestConfig
) {
  return request<API.RechargeDtoPageOutput>('/api/Recharge/GetCustomerRechargeList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 账户余额--接受打赏  某个客户的打赏记录 POST /api/Recharge/GetCustomerRewardList */
export async function getCustomerRewardList(
  body: API.CustomerRechargeListInput,
  options?: API.RequestConfig
) {
  return request<API.CusmterRewardDtoPageOutput>('/api/Recharge/GetCustomerRewardList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户充值 POST /api/Recharge/GetRechargeList */
export async function getRechargeList(body: API.RechargeListInput, options?: API.RequestConfig) {
  return request<API.RechargeDtoPageOutput>('/api/Recharge/GetRechargeList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 平台打赏 POST /api/Recharge/GetRewardList */
export async function getRewardList(body: API.CusmterRewardListInput, options?: API.RequestConfig) {
  return request<API.CusmterRewardDtoPageOutput>('/api/Recharge/GetRewardList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
