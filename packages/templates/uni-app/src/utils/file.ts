import _ from 'lodash';
import { setOSSLink } from './link';

/**
 * 获取文件扩展名
 */
export function getFileExtension(url: string): string {
  return _.last(url.split('.'));
}

export function getFileNameInfo(fileUrl: string) {
  const fileNameList = fileUrl.split('/').pop().split('.');
  const extension = fileNameList.pop();
  const newFileNameList = fileNameList.join('.').split('_');
  if (newFileNameList.length > 1) {
    newFileNameList.pop();
  }
  return {
    fileName: decodeURI(newFileNameList.join('_')),
    extension,
  };
}

export function extractFileNameFromUrl(fileUrl: string) {
  const { fileName, extension } = getFileNameInfo(fileUrl);
  return `${fileName}.${extension}`;
}

export function urlOmitDomain(url: string) {
  return url.replace(/^https?:\/\/[^/]+/, '');
}

const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i;

/**
 * 把api返回的路径转换为upload的路径
 */
export function convertApiPath2Url(path: string) {
  return {
    name: extractFileNameFromUrl(path),
    path: urlOmitDomain(path),
    url: setOSSLink(path),
    status: 'success',
    type: imgReg.test(path) ? 'image' : '',
    uid: _.uniqueId(),
  };
}

/**
 * 把upload的路径转换为上传到api的路径
 */
export function convertFormUrl2Api<T extends { path?: string }>(urls: T[]) {
  return urls.filter((x) => x.path).map((x) => urlOmitDomain(x.path));
}

type Base64ListItem = {
  base64: string;
  fileName: string;
};

export function base64SaveTolocal(base64List: Base64ListItem[]) {
  const fsm = uni.getFileSystemManager();

  return base64List.map((base64ListItem) => {
    const arrayBuffer = uni.base64ToArrayBuffer(
      base64ListItem.base64.replace('data:image/png;base64,', '')
    );
    //@ts-ignore
    const fileName = `${wx.env.USER_DATA_PATH}/${base64ListItem.fileName}.png`;
    fsm.writeFileSync(fileName, arrayBuffer, 'binary');
    return fileName;
  });
}
