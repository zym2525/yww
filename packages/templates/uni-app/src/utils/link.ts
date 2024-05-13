import { OSSBaseURL } from '@/constants';

export const combineURLs = (baseURL: string, relativeURL: string) => {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

export const isAbsoluteURL = (url: string) => {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

export function setOSSLink(url: string) {
  if (!url) {
    return '';
  }
  if (!isAbsoluteURL(url)) {
    return combineURLs(OSSBaseURL, url);
  }
  return url;
}
