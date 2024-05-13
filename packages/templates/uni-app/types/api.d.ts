declare namespace API {
  interface RequestConfig extends GlobalType.RequestConfig {
    showNavigationBarLoading?: boolean;
    showLoading?: boolean;
    mock?: boolean;
  }

  interface AreaTreeNode extends AreaInfo {
    children?: AreaTreeNode[];
  }

  type PriceVersionInfoItem = Omit<API.PriceVersionInfo, 'price'> & {
    price: string;
  };

  interface CategoryMenu {
    type?: number;
  }
}

declare namespace UniNamespace {
  namespace ButtonProps{
    interface onGetPhoneNumberEventDetail {
      /* 获取用户手机号的调用状态 */
      errMsg: string
      /** 包括敏感数据在内的完整用户信息的加密数据 */
      encryptedData: string
      /** 加密算法的初始向量 */
      iv: string
      /** 动态令牌。可通过动态令牌换取用户手机号。
       * @see https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95
       */
      code?: string
      /**
       * 签名信息，如果在开放平台后台配置了加签方式后有此字段
       * @supported alipay
       */
      sign: string
    }
  }
}