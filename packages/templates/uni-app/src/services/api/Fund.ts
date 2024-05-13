// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 获取支付宝充值码信息 POST /api/Fund/GetAliRechargeCodeInfo */
export async function getAliRechargeCodeInfo(
  body: API.AliRechargeInput,
  options?: API.RequestConfig
) {
  return request<API.AliRechargeInfoAjaxResponse>('/api/Fund/GetAliRechargeCodeInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取支付宝充值状态 GET /api/Fund/GetAliRechargeStatus */
export async function getAliRechargeStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetAliRechargeStatusParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Fund/GetAliRechargeStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取微信充值码信息 POST /api/Fund/GetWxRechargeCodeInfo */
export async function getWxRechargeCodeInfo(
  body: API.WxRechargeInput,
  options?: API.RequestConfig
) {
  return request<API.WxRechargeInfoAjaxResponse>('/api/Fund/GetWxRechargeCodeInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信充值状态 GET /api/Fund/GetWxRechargeStatus */
export async function getWxRechargeStatus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetWxRechargeStatusParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Fund/GetWxRechargeStatus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
