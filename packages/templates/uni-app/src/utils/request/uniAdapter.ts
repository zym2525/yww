import { type AxiosRequestConfig } from 'axios';

const getResponse = (res: UniApp.RequestSuccessCallbackResult, config: AxiosRequestConfig) => {
  const { statusCode, errMsg } = res;
  const response = {
    ...res,
    status: statusCode,
    statusText: errMsg,
    config,
    request: null,
  };

  return response;
};

export const UniAdapter = (config: AxiosRequestConfig) => {
  if (!uni) {
    throw new Error('not uni-app project!');
  }
  return new Promise((resolve, reject) => {
    const { baseURL, url, headers = {}, data, params } = config;
    //@ts-ignore
    const uniConfig: UniNamespace.RequestOptions = {
      ...config,
      url: `${baseURL || ''}${url}`,
      header: { ...headers },
    };

    if (data || params) {
      try {
        uniConfig.data = JSON.parse(data || params);
      } catch (e) {
        uniConfig.data = data || params;
      }
    }
    uni.request({
      ...uniConfig,
      success(res) {
        const response = getResponse(res, config);
        resolve(response);
      },
      fail(res) {
        //@ts-ignore
        const response = getResponse(res, config);
        reject(response);
      },
    });
  });
};
