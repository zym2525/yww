// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 支付宝充值回调通知 POST /api/AliPayNotify/AliRechargeNotify */
export async function aliRechargeNotify(options?: API.RequestConfig) {
  return request<any>('/api/AliPayNotify/AliRechargeNotify', {
    method: 'POST',
    ...(options || {}),
  });
}
