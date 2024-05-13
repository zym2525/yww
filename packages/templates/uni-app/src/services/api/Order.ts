// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/Order/CancelOrderAttention */
export async function cancelOrderAttention(body: API.OrderViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/CancelOrderAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Order/CreateOrUpdateOrder */
export async function createOrUpdateOrder(
  body: API.CreateOrUpdateOrderinput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Order/CreateOrUpdateOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/Order/DeleteOrder */
export async function deleteOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteOrderParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Order/DeleteOrder', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/Order/GetFrontOrderList */
export async function getFrontOrderList(
  body: API.FrontOrderListInput,
  options?: API.RequestConfig
) {
  return request<API.FrontOrderListPageOutput>('/api/Order/GetFrontOrderList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询我的订单 POST /api/Order/GetMyOrderList */
export async function getMyOrderList(body: API.MyOrderListInput, options?: API.RequestConfig) {
  return request<API.FrontOrderListPageOutput>('/api/Order/GetMyOrderList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单详情 GET /api/Order/GetOrdeForDetail */
export async function getOrdeForDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetOrdeForDetailParams,
  options?: API.RequestConfig
) {
  return request<API.OrderInfoDto>('/api/Order/GetOrdeForDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据UserID获取订单详情 GET /api/Order/GetOrdeForDetailByUserId */
export async function getOrdeForDetailByUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetOrdeForDetailByUserIdParams,
  options?: API.RequestConfig
) {
  return request<API.OrderInfoDto>('/api/Order/GetOrdeForDetailByUserId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取订单列表 POST /api/Order/GetOrderList */
export async function getOrderList(body: API.OrderListInput, options?: API.RequestConfig) {
  return request<API.OrderListDtoPageOutput>('/api/Order/GetOrderList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单推荐列表 GET /api/Order/GetOrderListForRecommend */
export async function getOrderListForRecommend(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetOrderListForRecommendParams,
  options?: API.RequestConfig
) {
  return request<API.OrderListDto[]>('/api/Order/GetOrderListForRecommend', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取他人用户订单列表 POST /api/Order/GetUserOrderList */
export async function getUserOrderList(body: API.UserOrderListInput, options?: API.RequestConfig) {
  return request<API.FrontOrderListPageOutput>('/api/Order/GetUserOrderList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单收藏 POST /api/Order/OrderAttention */
export async function orderAttention(body: API.OrderViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/OrderAttention', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单浏览 POST /api/Order/OrderBrowse */
export async function orderBrowse(body: API.OrderViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/OrderBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 接单未读数 GET /api/Order/OrderTakenNotReadCount */
export async function orderTakenNotReadCount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIorderTakenNotReadCountParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Order/OrderTakenNotReadCount', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 阅读接单信息 POST /api/Order/ReadOrderTaken */
export async function readOrderTaken(body: API.ReadOrderTakenInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/ReadOrderTaken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量设置order状态 POST /api/Order/SetListOrderStatus */
export async function setListOrderStatus(body: API.ListOrderStatus, options?: API.RequestConfig) {
  return request<number>('/api/Order/SetListOrderStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单招聘 上架/下架/修改状态/删除 POST /api/Order/SetOrder */
export async function setOrder(body: API.PutOrOffOrderInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/SetOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设置Order状态 POST /api/Order/SetOrderStatus */
export async function setOrderStatus(body: API.OrderStatusInput, options?: API.RequestConfig) {
  return request<number>('/api/Order/SetOrderStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我要接单 GET /api/Order/TakeOrder */
export async function takeOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APItakeOrderParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Order/TakeOrder', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
