// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 测试方法 到时候记得删除 GET /api/Test/Detail */
export async function detail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdetailParams,
  options?: API.RequestConfig
) {
  return request<API.TestOutput>('/api/Test/Detail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Test/Update */
export async function update(options?: API.RequestConfig) {
  return request<number>('/api/Test/Update', {
    method: 'POST',
    ...(options || {}),
  });
}
