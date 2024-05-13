import { getPlatform } from './universal-api/index';
declare const uni: any;

export class EnvUtils {
  static platform = getPlatform();

  static isPC = this.platform === 'pc';

  static isH5 = this.platform === 'h5';

  static isWeChat = this.platform === 'wechat';

  static isApp = this.platform === 'app';

  static isUniFrameWork = typeof uni !== 'undefined';

  // H5、小程序、app 均认为是手机端产品，如果需要统一手机端 UI 样式，可以直接用 isMobile 控制
  static isMobile = this.isH5 || this.isWeChat || this.isApp;

  static loadEnv() {
    return import.meta.env;
  }
}
