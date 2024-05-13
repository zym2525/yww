// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 评论审核 POST /api/Purchase/CommentCheck */
export async function commentCheck(body: API.CommentCheckInput, options?: API.RequestConfig) {
  return request<number>('/api/Purchase/CommentCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退款处理 POST /api/Purchase/DealWithRefund */
export async function dealWithRefund(body: API.DealWithRefundInput, options?: API.RequestConfig) {
  return request<number>('/api/Purchase/DealWithRefund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品购买信息删除 GET /api/Purchase/DeleteMyPurchase */
export async function deleteMyPurchase(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteMyPurchaseParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Purchase/DeleteMyPurchase', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 评论审核列表 POST /api/Purchase/GetCommentsForManage */
export async function getCommentsForManage(
  body: API.GetCommentsForManageInput,
  options?: API.RequestConfig
) {
  return request<API.CommentForManagePageOutput>('/api/Purchase/GetCommentsForManage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 详情页---商品评论 POST /api/Purchase/GetCommentsForProduct */
export async function getCommentsForProduct(
  body: API.GetCommentsForProductInput,
  options?: API.RequestConfig
) {
  return request<API.CommentForProductPageOutput>('/api/Purchase/GetCommentsForProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的买入 POST /api/Purchase/GetMyPurchases */
export async function getMyPurchases(body: API.GetMyPurchasesInput, options?: API.RequestConfig) {
  return request<API.MyPurchaseDtoPageOutput>('/api/Purchase/GetMyPurchases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 最近购买产品 GET /api/Purchase/GetMyRecentPurchases */
export async function getMyRecentPurchases(options?: API.RequestConfig) {
  return request<API.MyRecentPurchaseDto[]>('/api/Purchase/GetMyRecentPurchases', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 我的卖出 POST /api/Purchase/GetMySells */
export async function getMySells(body: API.GetMySellsInput, options?: API.RequestConfig) {
  return request<API.MySellDtoPageOutput>('/api/Purchase/GetMySells', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 平台交易列表 POST /api/Purchase/GetPlatFormPurchases */
export async function getPlatFormPurchases(
  body: API.GetPlatFormPurchasesInput,
  options?: API.RequestConfig
) {
  return request<API.PlatFormPurchasePageOutput>('/api/Purchase/GetPlatFormPurchases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 买入产品确认验收 GET /api/Purchase/MyPurchaseCheck */
export async function myPurchaseCheck(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APImyPurchaseCheckParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Purchase/MyPurchaseCheck', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 购买产品评论 POST /api/Purchase/PurchasedProductComment */
export async function purchasedProductComment(
  body: API.PurchasedProductCommentInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Purchase/PurchasedProductComment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品评论---点赞 POST /api/Purchase/PurchasedProductCommentThumbsUp */
export async function purchasedProductCommentThumbsUp(
  body: API.PurchasedProductCommentThumbsUpInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Purchase/PurchasedProductCommentThumbsUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 购买 POST /api/Purchase/PurchaseProduct */
export async function purchaseProduct(
  body: API.CreatePurchasedProductInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Purchase/PurchaseProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退款申请 POST /api/Purchase/RefundApply */
export async function refundApply(body: API.RefundApplyInput, options?: API.RequestConfig) {
  return request<number>('/api/Purchase/RefundApply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
