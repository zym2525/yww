// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 资讯广告下架 GET /api/Information/AdvertiseOffShelf */
export async function advertiseOffShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/AdvertiseOffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯广告上架 GET /api/Information/AdvertiseOnShelf */
export async function advertiseOnShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIadvertiseOnShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/AdvertiseOnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯关注/取消关注 GET /api/Information/AttentOrNot */
export async function attentOrNot(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIattentOrNotParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/AttentOrNot', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存/发布资讯 POST /api/Information/CreateInformation */
export async function createInformation(
  body: API.CreateInformationInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Information/CreateInformation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯广告新增上架 POST /api/Information/CreateInformationAdvertise */
export async function createInformationAdvertise(
  body: API.CreateInformationAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Information/CreateInformationAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除资讯 GET /api/Information/DeleteInformation */
export async function deleteInformation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIdeleteInformationParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/DeleteInformation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯头条 POST /api/Information/GetHeadlineInformation */
export async function getHeadlineInformation(
  body: API.GetHeadlineInformationInput,
  options?: API.RequestConfig
) {
  return request<API.HeadlineInformation[]>('/api/Information/GetHeadlineInformation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 首页--热门资讯榜 GET /api/Information/GetHotInformationAdvertise */
export async function getHotInformationAdvertise(options?: API.RequestConfig) {
  return request<API.HotInformationAdvertiseInfo[]>('/api/Information/GetHotInformationAdvertise', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 行业资讯--热门资讯 POST /api/Information/GetHotInformationAdvertiseByCategory */
export async function getHotInformationAdvertiseByCategory(
  body: API.GetInformationAdvertiseByCategoryInput,
  options?: API.RequestConfig
) {
  return request<API.HotInformationAdvertiseInfoPageOutput>(
    '/api/Information/GetHotInformationAdvertiseByCategory',
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

/** 获取资讯详情 GET /api/Information/GetInformation */
export async function getInformation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetInformationParams,
  options?: API.RequestConfig
) {
  return request<API.InformationDetail>('/api/Information/GetInformation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯广告详情 GET /api/Information/GetInformationAdvertise */
export async function getInformationAdvertise(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetInformationAdvertiseParams,
  options?: API.RequestConfig
) {
  return request<API.InformationAdvertiseDetail>('/api/Information/GetInformationAdvertise', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯广告列表 POST /api/Information/GetInformationAdvertisesForManage */
export async function getInformationAdvertisesForManage(
  body: API.GetInformationAdvertisesForManageInput,
  options?: API.RequestConfig
) {
  return request<API.InformationAdvertiseForManagePageOutput>(
    '/api/Information/GetInformationAdvertisesForManage',
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

/** 行业资讯---资讯 POST /api/Information/GetInformationByCategory */
export async function getInformationByCategory(
  body: API.GetInformationAdvertiseByCategoryInput,
  options?: API.RequestConfig
) {
  return request<API.InformationInfoPageOutput>('/api/Information/GetInformationByCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行业资讯--详情 GET /api/Information/GetInformationForDetail */
export async function getInformationForDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetInformationForDetailParams,
  options?: API.RequestConfig
) {
  return request<API.InformationDetailInfo>('/api/Information/GetInformationForDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首页--行业资讯 GET /api/Information/GetInformationForHomePage */
export async function getInformationForHomePage(options?: API.RequestConfig) {
  return request<API.InformationForHomePageDto[]>('/api/Information/GetInformationForHomePage', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 资讯管理列表 POST /api/Information/GetInformationForManage */
export async function getInformationForManage(
  body: API.GetInformationForManageInput,
  options?: API.RequestConfig
) {
  return request<API.InformationForManagePageOutput>('/api/Information/GetInformationForManage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行业资讯--相关推荐 POST /api/Information/GetInformationForRecommend */
export async function getInformationForRecommend(
  body: API.GetInformationAdvertiseByCategoryInput,
  options?: API.RequestConfig
) {
  return request<API.InformationInfo[]>('/api/Information/GetInformationForRecommend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯审核列表 POST /api/Information/GetInformationWaitForCheck */
export async function getInformationWaitForCheck(
  body: API.GetInformationWaitForCheckInput,
  options?: API.RequestConfig
) {
  return request<API.InformationWaitForCheckPageOutput>(
    '/api/Information/GetInformationWaitForCheck',
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

/** 获取资讯广告位最后排序 GET /api/Information/GetMaxAdvertiseSequence */
export async function getMaxAdvertiseSequence(options?: API.RequestConfig) {
  return request<number>('/api/Information/GetMaxAdvertiseSequence', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 我的关注（资讯） POST /api/Information/GetMyAttentions */
export async function getMyAttentions(
  body: API.GetMyInformationAttentionsInput,
  options?: API.RequestConfig
) {
  return request<API.MyInformationAttentionInfoPageOutput>('/api/Information/GetMyAttentions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 我的资讯 POST /api/Information/GetMyInformation */
export async function getMyInformation(
  body: API.GetMyInformationInput,
  options?: API.RequestConfig
) {
  return request<API.InformationInfoPageOutput>('/api/Information/GetMyInformation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 最近发布资讯 GET /api/Information/GetMyRecentInformation */
export async function getMyRecentInformation(options?: API.RequestConfig) {
  return request<API.MyRecentInformationDto[]>('/api/Information/GetMyRecentInformation', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 资讯--浏览 POST /api/Information/InformationBrowse */
export async function informationBrowse(
  body: API.InformationViewInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/InformationBrowse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯审核 POST /api/Information/InformationCheck */
export async function informationCheck(
  body: API.InformationCheckInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/InformationCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 行业资讯--打赏 POST /api/Information/InformationReward */
export async function informationReward(
  body: API.InformationRewardInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Information/InformationReward', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯--点赞 POST /api/Information/InformationThumbsUp */
export async function informationThumbsUp(
  body: API.InformationThumbsUpInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/InformationThumbsUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯置顶 GET /api/Information/MyInformationPlaceTop */
export async function myInformationPlaceTop(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APImyInformationPlaceTopParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/MyInformationPlaceTop', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯下架 GET /api/Information/OffShelf */
export async function offShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIoffShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/OffShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯上架 GET /api/Information/OnShelf */
export async function onShelf(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIonShelfParams,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/OnShelf', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 资讯编辑 POST /api/Information/UpdateInformation */
export async function updateInformation(
  body: API.UpdateInformationInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/UpdateInformation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 资讯广告编辑上架 POST /api/Information/UpdateInformationAdvertise */
export async function updateInformationAdvertise(
  body: API.UpdateInformationAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Information/UpdateInformationAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户资讯广告投放 POST /api/Information/UserCreateInformationAdvertise */
export async function userCreateInformationAdvertise(
  body: API.UserCreateInformationAdvertiseInput,
  options?: API.RequestConfig
) {
  return request<string>('/api/Information/UserCreateInformationAdvertise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
