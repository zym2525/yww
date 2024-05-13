export enum OrderInputType {
  /**
   * 升序
   */
  Asc,
  /**
   * 降序
   */
  Desc,
}

export enum Colors {
  Primary = 'var(--bole-color-primary)',
  Success = 'var(--bole-color-success)',
  Warning = 'var(--bole-color-warning)',
  Danger = 'var(--bole-color-danger)',
  Info = 'var(--bole-color-info)',
}

export enum AreaType {
  /**
   * 省
   */
  Province = 1,
  /**
   * 市
   */
  City,
  /**
   * 区
   */
  Area,
  /**
   * 城镇
   */
  Town,
}

export enum CustomerType {
  /**
   * 个人
   */
  Person = 2,
  /**
   * 企业
   */
  Enterprise = 1,
}

export const CustomerTypeText = {
  [CustomerType.Enterprise]: '企业',
  [CustomerType.Person]: '个人',
};

export enum PostType {
  CEO = 1,
  CFO,
  CorporateExecutives,
  Finance,
  Business,
  MiddleManage,
  Worker,
}

export const PostTypeText = {
  [PostType.CEO]: 'CEO',
  [PostType.CFO]: 'CFO',
  [PostType.CorporateExecutives]: '企业高管',
  [PostType.Finance]: '财务管理',
  [PostType.Business]: '业务管理',
  [PostType.MiddleManage]: '中层管理',
  [PostType.Worker]: '基础人员',
};
export enum EnterpriseSize {
  /**
   * 微型企业
   */
  Miniature = 0,
  /**
   * 小型企业
   */
  Small,
  /**
   * 中型企业
   */
  Medium,
  /**
   * 大型企业
   */
  Large,
}

export const EnterpriseSizeText = {
  [EnterpriseSize.Miniature]: '微型企业',
  [EnterpriseSize.Small]: '小型企业',
  [EnterpriseSize.Medium]: '中型企业',
  [EnterpriseSize.Large]: '大型企业',
};

export enum BackType {
  toDetail = 'toDetail',
  back = 'back',
}
