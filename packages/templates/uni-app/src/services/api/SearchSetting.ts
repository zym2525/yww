// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 搜索管理--新建编辑 POST /api/SearchSetting/CreateOrEditSearchSetting */
export async function createOrEditSearchSetting(
  body: API.CreateOrEditSearchInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/SearchSetting/CreateOrEditSearchSetting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索管理--禁用启用 POST /api/SearchSetting/EnableSearchSetting */
export async function enableSearchSetting(
  body: API.EnableSearchSettingInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/SearchSetting/EnableSearchSetting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取查询条件列表 GET /api/SearchSetting/GetSearchConditionList */
export async function getSearchConditionList(options?: API.RequestConfig) {
  return request<API.SearchConditionList[]>('/api/SearchSetting/GetSearchConditionList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 搜索管理--列表 POST /api/SearchSetting/GetSearchSettingList */
export async function getSearchSettingList(
  body: API.GetSearchSettingListInput,
  options?: API.RequestConfig
) {
  return request<API.GetSearchSettingListPageOutput>('/api/SearchSetting/GetSearchSettingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据类型获得指定类型搜索条件 POST /api/SearchSetting/GetTypeSearchSettingList */
export async function getTypeSearchSettingList(
  body: API.GetTypeSearchSettingListInput,
  options?: API.RequestConfig
) {
  return request<API.GetTypeSearchSettingList[]>('/api/SearchSetting/GetTypeSearchSettingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
