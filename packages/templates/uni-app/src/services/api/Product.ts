// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 产品广告下架 GET /api/Product/AdvertiseOffShelf */
export async function advertiseOffShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/AdvertiseOffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品广告上架 GET /api/Product/AdvertiseOnShelf */
export async function advertiseOnShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOnShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/AdvertiseOnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品关注/取消关注 GET /api/Product/AttentOrNot */
export async function attentOrNot(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIattentOrNotParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/AttentOrNot', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存/发布产品 POST /api/Product/CreateProduct */
export async function createProduct(body: API.CreateProductInput, options?: API.RequestConfig) {
  return request<string>('/api/Product/CreateProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品广告新增上架 POST /api/Product/CreateProductAdvertise */
export async function createProductAdvertise(
  body: API.CreateProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Product/CreateProductAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除产品 GET /api/Product/DeleteProduct */
export async function deleteProduct(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteProductParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/DeleteProduct', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首页产品热销榜 POST /api/Product/GetHotProductAdvertise */
export async function getHotProductAdvertise(
  body: API.GetHotProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<API.HotProductAdvertiseInfo[]>('/api/Product/GetHotProductAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品服务--产品热销榜 POST /api/Product/GetHotProductAdvertiseByCategory */
export async function getHotProductAdvertiseByCategory(
  body: API.GetProductAdvertiseByCategoryInput,
  options?: API.RequestConfig
) {
  return request<API.HotProductAdvertiseInfoPageOutput>(
    '/api/Product/GetHotProductAdvertiseByCategory',
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

/** 获取产品广告位最后排序 GET /api/Product/GetMaxAdvertiseSequence */
export async function getMaxAdvertiseSequence(options?: API.RequestConfig) {
  return request<number>('/api/Product/GetMaxAdvertiseSequence', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 我的关注（产品） POST /api/Product/GetMyAttentions */
export async function getMyAttentions(
  body: API.GetMyProductAttentionsInput,
  options?: API.RequestConfig
) {
  return request<API.MyProductAttentionInfoPageOutput>('/api/Product/GetMyAttentions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的产品 POST /api/Product/GetMyProducts */
export async function getMyProducts(body: API.GetMyProductsInput, options?: API.RequestConfig) {
  return request<API.MyProductInfoPageOutput>('/api/Product/GetMyProducts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 最近发布产品 GET /api/Product/GetMyRecentProducts */
export async function getMyRecentProducts(options?: API.RequestConfig) {
  return request<API.MyRecentProductDto[]>('/api/Product/GetMyRecentProducts', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取产品详情 GET /api/Product/GetProduct */
export async function getProduct(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetProductParams,
  options?: API.RequestConfig
) {
  return request<API.ProductDetail>('/api/Product/GetProduct', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品广告详情 GET /api/Product/GetProductAdvertise */
export async function getProductAdvertise(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetProductAdvertiseParams,
  options?: API.RequestConfig
) {
  return request<API.ProductAdvertiseDetail>('/api/Product/GetProductAdvertise', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品服务--推荐产品 POST /api/Product/GetProductAdvertiseForRecommend */
export async function getProductAdvertiseForRecommend(
  body: API.GetHotProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<API.HotProductAdvertiseInfo[]>('/api/Product/GetProductAdvertiseForRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品广告列表 POST /api/Product/GetProductAdvertisesForManage */
export async function getProductAdvertisesForManage(
  body: API.GetProductAdvertisesForManageInput,
  options?: API.RequestConfig
) {
  return request<API.ProductAdvertiseForManagePageOutput>(
    '/api/Product/GetProductAdvertisesForManage',
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

/** 产品详情 GET /api/Product/GetProductForDetail */
export async function getProductForDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetProductForDetailParams,
  options?: API.RequestConfig
) {
  return request<API.ProductDetailInfo>('/api/Product/GetProductForDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品服务--产品服务商 POST /api/Product/GetProductsByCategory */
export async function getProductsByCategory(
  body: API.GetProductByCategoryInput,
  options?: API.RequestConfig
) {
  return request<API.ProductDetailForHomePagePageOutput>('/api/Product/GetProductsByCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 首页产品列表 POST /api/Product/GetProductsForHomePage */
export async function getProductsForHomePage(
  body: API.GetProductForHomePageInput,
  options?: API.RequestConfig
) {
  return request<API.ProductDetailForHomePagePageOutput>('/api/Product/GetProductsForHomePage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品管理列表 POST /api/Product/GetProductsForManage */
export async function getProductsForManage(
  body: API.GetProductsForManageInput,
  options?: API.RequestConfig
) {
  return request<API.ProductForManagePageOutput>('/api/Product/GetProductsForManage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品审核列表 POST /api/Product/GetProductsWaitForCheck */
export async function getProductsWaitForCheck(
  body: API.GetProductsWaitForCheckInput,
  options?: API.RequestConfig
) {
  return request<API.ProductWaitForCheckPageOutput>('/api/Product/GetProductsWaitForCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小程序---我的统计信息 GET /api/Product/GetUserAttentions */
export async function getUserAttentions(options?: API.RequestConfig) {
  return request<API.UserAttentionsDto>('/api/Product/GetUserAttentions', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 产品下架 GET /api/Product/OffShelf */
export async function offShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIoffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/OffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品上架 GET /api/Product/OnShelf */
export async function onShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIonShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/OnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品浏览 POST /api/Product/ProductBrowse */
export async function productBrowse(body: API.ProductViewInput, options?: API.RequestConfig) {
  return request<number>('/api/Product/ProductBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品审核 POST /api/Product/ProductCheck */
export async function productCheck(body: API.ProductCheckInput, options?: API.RequestConfig) {
  return request<number>('/api/Product/ProductCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品点赞 POST /api/Product/ProductThumbsUp */
export async function productThumbsUp(body: API.ProductThumbsUpInput, options?: API.RequestConfig) {
  return request<number>('/api/Product/ProductThumbsUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品编辑 POST /api/Product/UpdateProduct */
export async function updateProduct(body: API.UpdateProductInput, options?: API.RequestConfig) {
  return request<number>('/api/Product/UpdateProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品广告编辑上架 POST /api/Product/UpdateProductAdvertise */
export async function updateProductAdvertise(
  body: API.UpdateProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Product/UpdateProductAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户产品广告投放 POST /api/Product/UserCreateProductAdvertise */
export async function userCreateProductAdvertise(
  body: API.UserCreateProductAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Product/UserCreateProductAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
