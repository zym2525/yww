// @ts-ignore
/* eslint-disable */
import { request } from '@/utils/request';

/** 此处后端没有提供注释 POST /api/Account/GetOssSTS */
export async function getOssSTS(options?: API.RequestConfig) {
  return request<API.OssSTSReponse>('/api/Account/GetOssSTS', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取扫码登录二维码信息 GET /api/Account/GetQrCodeForLogin */
export async function getQrCodeForLogin(options?: API.RequestConfig) {
  return request<API.QrCodeLogin>('/api/Account/GetQrCodeForLogin', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取扫码登录结果 GET /api/Account/GetQrCodeLoginResult */
export async function getQrCodeLoginResult(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetQrCodeLoginResultParams,
  options?: API.RequestConfig
) {
  return request<API.WxMiniAppLoginInfo>('/api/Account/GetQrCodeLoginResult', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取微信小程序用户身份会话信息 GET /api/Account/GetWxIndentity */
export async function getWxIndentity(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIgetWxIndentityParams,
  options?: API.RequestConfig
) {
  return request<API.WxMiniAppIndentityInfo>('/api/Account/GetWxIndentity', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 验证码登录 POST /api/Account/PhoneMesssageCodeLogin */
export async function phoneMesssageCodeLogin(
  body: API.PhoneMesssageCodeLoginInput,
  options?: API.RequestConfig
) {
  return request<API.IdentityModelTokenCacheItem>('/api/Account/PhoneMesssageCodeLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置密码并发送手机通知新密码 POST /api/Account/ResetPasswordWithMicroNotify */
export async function resetPasswordWithMicroNotify(
  body: API.ResetPassWordInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Account/ResetPasswordWithMicroNotify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送登录注册短信验证码 POST /api/Account/SendPhoneMesssageCode */
export async function sendPhoneMesssageCode(
  body: API.SendPhoneMesssageCodeInput,
  options?: API.RequestConfig
) {
  return request<number>('/api/Account/SendPhoneMesssageCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 识别营业执照 GET /api/Account/VatLicense */
export async function vatLicense(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIvatLicenseParams,
  options?: API.RequestConfig
) {
  return request<API.LicenseOcrModel>('/api/Account/VatLicense', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 小程序手机授权注册登录 POST /api/Account/WxMiniAppPhoneAuthLogin */
export async function wxMiniAppPhoneAuthLogin(
  body: API.WxMiniAppPhoneLoginInput,
  options?: API.RequestConfig
) {
  return request<API.IdentityModelTokenCacheItem>('/api/Account/WxMiniAppPhoneAuthLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 小程序扫码手机授权注册登录 POST /api/Account/WxMiniAppPhoneAuthLoginFromScan */
export async function wxMiniAppPhoneAuthLoginFromScan(
  body: API.WxMiniAppPhoneAuthLoginFromScanInput,
  options?: API.RequestConfig
) {
  return request<API.IdentityModelTokenCacheItem>('/api/Account/WxMiniAppPhoneAuthLoginFromScan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 已有小程序用户确认登录 GET /api/Account/WxMiniAppUserLogin */
export async function wxMiniAppUserLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.APIwxMiniAppUserLoginParams,
  options?: API.RequestConfig
) {
  return request<any>('/api/Account/WxMiniAppUserLogin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 已有小程序用户扫码确认登录 POST /api/Account/WxMiniAppUserLoginFromScan */
export async function wxMiniAppUserLoginFromScan(
  body: API.WxMiniAppUserLoginFromScanInput,
  options?: API.RequestConfig
) {
  return request<API.IdentityModelTokenCacheItem>('/api/Account/WxMiniAppUserLoginFromScan', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/accountAuth/GetCode */
export async function getCode(options?: API.RequestConfig) {
  return request<any>('/api/accountAuth/GetCode', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/GetPhoneToken */
export async function getPhoneToken(body: API.PhoneToken, options?: API.RequestConfig) {
  return request<API.IdentityModelTokenCacheItem>('/api/accountAuth/GetPhoneToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/GetToken */
export async function getToken(body: API.AccessRequestDto, options?: API.RequestConfig) {
  return request<API.IdentityModelTokenCacheItem>('/api/accountAuth/GetToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/GetTokenByRefreshToken */
export async function getTokenByRefreshToken(
  body: API.AccessRefreshToken,
  options?: API.RequestConfig
) {
  return request<API.IdentityModelTokenCacheItem>('/api/accountAuth/GetTokenByRefreshToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/Register */
export async function register(body: API.RegisterDto, options?: API.RequestConfig) {
  return request<API.IdentityUserDto>('/api/accountAuth/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/ResetPassword */
export async function resetPassword(body: API.ResetPasswordDto, options?: API.RequestConfig) {
  return request<any>('/api/accountAuth/ResetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/accountAuth/SendPasswordResetCode */
export async function sendPasswordResetCode(
  body: API.SendPasswordResetCodeDto,
  options?: API.RequestConfig
) {
  return request<any>('/api/accountAuth/SendPasswordResetCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
