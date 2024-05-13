// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 新增合作的跟进 POST /api/CooperationApply/AddCooperationApplyFllow */
export async function addCooperationApplyFllow(
  body: API.CreateCooperationApplyFllowInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/CooperationApply/AddCooperationApplyFllow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增修改合作申请 POST /api/CooperationApply/CreateOrUpdateCooperationApply */
export async function createOrUpdateCooperationApply(
  body: API.CreateOrUpdateCooperationApplyInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/CooperationApply/CreateOrUpdateCooperationApply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取合作的详情 GET /api/CooperationApply/GetCooperationApplyById */
export async function getCooperationApplyById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetCooperationApplyByIdParams,
  options?: API.RequestConfig
) {
  return request<API.CooperationApplyDto>('/api/CooperationApply/GetCooperationApplyById', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取合作的列表 POST /api/CooperationApply/GetCooperationApplyList */
export async function getCooperationApplyList(
  body: API.GetCooperationApplyInput,
  options?: API.RequestConfig
) {
  return request<API.CooperationApplyDtoPageOutput>(
    '/api/CooperationApply/GetCooperationApplyList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 设置合作状态 POST /api/CooperationApply/SetStatus */
export async function setStatus(body: API.SetStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/CooperationApply/SetStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
