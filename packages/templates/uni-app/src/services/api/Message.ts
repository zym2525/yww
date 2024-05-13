// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 获取个人中心的消息列表 POST /api/Message/GetMessageListForPersonal */
export async function getMessageListForPersonal(
  body: API.GetMessageInput,
  options?: API.RequestConfig
) {
  return request<API.MessageInfoPageOutput>('/api/Message/GetMessageListForPersonal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取未读消息数 GET /api/Message/GetMyMessageTotal */
export async function getMyMessageTotal(options?: API.RequestConfig) {
  return request<number>('/api/Message/GetMyMessageTotal', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新消息全部已读 GET /api/Message/SetAllMessageIsRead */
export async function setAllMessageIsRead(options?: API.RequestConfig) {
  return request<number>('/api/Message/SetAllMessageIsRead', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新消息的阅读状态 GET /api/Message/SetMessageIsRead */
export async function setMessageIsRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIsetMessageIsReadParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Message/SetMessageIsRead', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
