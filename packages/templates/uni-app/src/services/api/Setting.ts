// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 广告价位下架 GET /api/Setting/AdvertisePriceOffShelf */
export async function advertisePriceOffShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertisePriceOffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Setting/AdvertisePriceOffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告价位上架 GET /api/Setting/AdvertisePriceOnShelf */
export async function advertisePriceOnShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertisePriceOnShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Setting/AdvertisePriceOnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建或修改平台对外联系电话 POST /api/Setting/CreateOrEditPlatformContact */
export async function createOrEditPlatformContact(
  body: API.CreateOrEditPlatformContactInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Setting/CreateOrEditPlatformContact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增/编辑广告价位 POST /api/Setting/CreateOrUpdateAdvertisePrice */
export async function createOrUpdateAdvertisePrice(
  body: API.CreateOrUpdateAdvertisePriceInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Setting/CreateOrUpdateAdvertisePrice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加/编辑类别 POST /api/Setting/CreateOrUpdateCategory */
export async function createOrUpdateCategory(
  body: API.CreateOrUpdateCategoryInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Setting/CreateOrUpdateCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增/编辑资讯打赏分成 POST /api/Setting/CreateOrUpdateRewardPercentage */
export async function createOrUpdateRewardPercentage(
  body: API.CreateOrUpdateRewardPercentageInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Setting/CreateOrUpdateRewardPercentage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品、资讯、自定义、快捷评论标签添加/编辑 POST /api/Setting/CreateOrUpdateTag */
export async function createOrUpdateTag(
  body: API.CreateOrUpdateTagInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Setting/CreateOrUpdateTag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 广告价位删除 GET /api/Setting/DeleteAdvertisePrice */
export async function deleteAdvertisePrice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteAdvertisePriceParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Setting/DeleteAdvertisePrice', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取广告位单价 GET /api/Setting/GetAdvertisePrice */
export async function getAdvertisePrice(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetAdvertisePriceParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Setting/GetAdvertisePrice', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告价位列表 POST /api/Setting/GetAdvertisePriceInfos */
export async function getAdvertisePriceInfos(
  body: API.GetAdvertisePriceInfosInput,
  options?: API.RequestConfig
) {
  return request<API.AdvertisePriceInfo[]>('/api/Setting/GetAdvertisePriceInfos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 产品资讯类别列表 POST /api/Setting/GetCategories */
export async function getCategories(body: API.GetCategoriesInput, options?: API.RequestConfig) {
  return request<API.CategoryDto[]>('/api/Setting/GetCategories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取类别详情 GET /api/Setting/GetCategory */
export async function getCategory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetCategoryParams,
  options?: API.RequestConfig
) {
  return request<API.CategoryInfo>('/api/Setting/GetCategory', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据catetoryType获取Menu  行业服务 = 0 行业配套 = 1  甲方需求 = 2 行业资讯 = 3; GET /api/Setting/GetCategoryMenu */
export async function getCategoryMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetCategoryMenuParams,
  options?: API.RequestConfig
) {
  return request<API.CategoryMenu[]>('/api/Setting/GetCategoryMenu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯类别目录 GET /api/Setting/GetInformationCategoryMenu */
export async function getInformationCategoryMenu(options?: API.RequestConfig) {
  return request<API.CategoryMenu[]>('/api/Setting/GetInformationCategoryMenu', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取初始配置 GET /api/Setting/GetInitSettings */
export async function getInitSettings(options?: API.RequestConfig) {
  return request<API.InitSettingInfo>('/api/Setting/GetInitSettings', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 行业服务类别：园区 人资公司 订单 GET /api/Setting/GetParkOrHRCategoryMenu */
export async function getParkOrHRCategoryMenu(options?: API.RequestConfig) {
  return request<API.CategoryMenu[]>('/api/Setting/GetParkOrHRCategoryMenu', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据catagory id 获取联系方式 GET /api/Setting/GetPlatformContactByCategoryId */
export async function getPlatformContactByCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetPlatformContactByCategoryIdParams,
  options?: API.RequestConfig
) {
  return request<API.PlatformContactList>('/api/Setting/GetPlatformContactByCategoryId', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取平台的联系方式列表 GET /api/Setting/GetPlatformContactList */
export async function getPlatformContactList(options?: API.RequestConfig) {
  return request<API.PlatformContactList[]>('/api/Setting/GetPlatformContactList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 行业配套类别目录 GET /api/Setting/GetProductCategoryMenu */
export async function getProductCategoryMenu(options?: API.RequestConfig) {
  return request<API.CategoryMenu[]>('/api/Setting/GetProductCategoryMenu', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 甲方资源 GET /api/Setting/GetResourceCategoryMenu */
export async function getResourceCategoryMenu(options?: API.RequestConfig) {
  return request<API.CategoryMenu[]>('/api/Setting/GetResourceCategoryMenu', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 资讯打赏分成列表 POST /api/Setting/GetRewardPercentages */
export async function getRewardPercentages(
  body: API.GetRewardPercentagesInput,
  options?: API.RequestConfig
) {
  return request<API.RewardPercentageInfo[]>('/api/Setting/GetRewardPercentages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 标签目录 GET /api/Setting/GetTagMenu */
export async function getTagMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetTagMenuParams,
  options?: API.RequestConfig
) {
  return request<API.TagMenu[]>('/api/Setting/GetTagMenu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 产品、资讯、快捷评论标签列表 POST /api/Setting/GetTags */
export async function getTags(body: API.GetTagsInput, options?: API.RequestConfig) {
  return request<API.TagDto[]>('/api/Setting/GetTags', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 显示/隐藏类别 POST /api/Setting/SetCategoryVis */
export async function setCategoryVis(body: API.SetCategoryVisInput, options?: API.RequestConfig) {
  return request<number>('/api/Setting/SetCategoryVis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 显示/隐藏标签 POST /api/Setting/SetTagVis */
export async function setTagVis(body: API.SetTagVisInput, options?: API.RequestConfig) {
  return request<number>('/api/Setting/SetTagVis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
