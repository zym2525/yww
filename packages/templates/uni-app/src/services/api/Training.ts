// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/Training/CancelTrainingAttention */
export async function cancelTrainingAttention(
  body: API.TrainingViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Training/CancelTrainingAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建编辑培训 POST /api/Training/CreateOrEditTraining */
export async function createOrEditTraining(
  body: API.CreateOrEditTrainingInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Training/CreateOrEditTraining', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除培训 GET /api/Training/DeleteTraining */
export async function deleteTraining(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteTrainingParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Training/DeleteTraining', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取前端培训详情 GET /api/Training/GetFronTrainingInfo */
export async function getFronTrainingInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetFronTrainingInfoParams,
  options?: API.RequestConfig
) {
  return request<API.TrainingDto>('/api/Training/GetFronTrainingInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取前端培训列表 POST /api/Training/GetFrontTrainingList */
export async function getFrontTrainingList(
  body: API.GetFrontTrainingListInput,
  options?: API.RequestConfig
) {
  return request<API.TrainingDtoPageOutput>('/api/Training/GetFrontTrainingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取我的培训列表 POST /api/Training/GetMyTrainingList */
export async function getMyTrainingList(
  body: API.GetMyTrainingListInput,
  options?: API.RequestConfig
) {
  return request<API.TrainingDtoPageOutput>('/api/Training/GetMyTrainingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取后端培训详情 GET /api/Training/GetTrainingInfo */
export async function getTrainingInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetTrainingInfoParams,
  options?: API.RequestConfig
) {
  return request<API.TrainingDto>('/api/Training/GetTrainingInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取后端培训列表 POST /api/Training/GetTrainingList */
export async function getTrainingList(body: API.TrainingListInput, options?: API.RequestConfig) {
  return request<API.TrainingDtoPageOutput>('/api/Training/GetTrainingList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取推荐培训信息 GET /api/Training/GetTrainingRecommend */
export async function getTrainingRecommend(options?: API.RequestConfig) {
  return request<API.TrainingDto[]>('/api/Training/GetTrainingRecommend', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 设置培训推荐 POST /api/Training/SetTrainingRecommend */
export async function setTrainingRecommend(
  body: API.TrainingRecommendInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Training/SetTrainingRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置培训状态 POST /api/Training/SetTrainingStatus */
export async function setTrainingStatus(body: API.OrderStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/Training/SetTrainingStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 培训收藏浏览 POST /api/Training/TrainingAttention */
export async function trainingAttention(body: API.TrainingViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Training/TrainingAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 培训记录浏览 POST /api/Training/TrainingBrowse */
export async function trainingBrowse(body: API.TrainingViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Training/TrainingBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
