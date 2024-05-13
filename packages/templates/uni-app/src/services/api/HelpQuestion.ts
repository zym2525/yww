// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 新增修改帮助 POST /api/HelpQuestion/CreateOrEditHelpQuestion */
export async function createOrEditHelpQuestion(
  body: API.CreateOrEditHelpQuestionInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/HelpQuestion/CreateOrEditHelpQuestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除帮助 DELETE /api/HelpQuestion/DeleteHelpQuestion */
export async function deleteHelpQuestion(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteHelpQuestionParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/HelpQuestion/DeleteHelpQuestion', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/HelpQuestion/GetHelpQuestionForFrontList */
export async function getHelpQuestionForFrontList(
  body: API.GetHelpQuestionListInput,
  options?: API.RequestConfig
) {
  return request<API.HelpQuestionDtoPageOutput>('/api/HelpQuestion/GetHelpQuestionForFrontList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取帮助详情 GET /api/HelpQuestion/GetHelpQuestionInfo */
export async function getHelpQuestionInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetHelpQuestionInfoParams,
  options?: API.RequestConfig
) {
  return request<API.HelpQuestionDto>('/api/HelpQuestion/GetHelpQuestionInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取帮助详情列表 POST /api/HelpQuestion/GetHelpQuestionList */
export async function getHelpQuestionList(
  body: API.GetHelpQuestionListInput,
  options?: API.RequestConfig
) {
  return request<API.HelpQuestionDtoPageOutput>('/api/HelpQuestion/GetHelpQuestionList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置帮助状态 POST /api/HelpQuestion/SetHelpQuestionStatus */
export async function setHelpQuestionStatus(
  body: API.OrderStatusInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/HelpQuestion/SetHelpQuestionStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
