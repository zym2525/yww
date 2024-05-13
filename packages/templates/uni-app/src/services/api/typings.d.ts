declare namespace API {
  interface RequestConfig {
    [key: string]: any;
  }

  interface AccessRefreshToken {
    refreshToken?: string;
    clientId?: string;
  }

  interface AccessRequestDto {
    clientId?: string;
    userName?: string;
    userPassword?: string;
    scope?: string;
  }

  interface ActionApiDescriptionModel {
    uniqueName?: string;
    name?: string;
    httpMethod?: string;
    url?: string;
    supportedVersions?: string[];
    parametersOnMethod?: MethodParameterApiDescriptionModel[];
    parameters?: ParameterApiDescriptionModel[];
    returnValue?: ReturnValueApiDescriptionModel;
    allowAnonymous?: boolean;
    implementFrom?: string;
  }

  interface AdvertiseInfo {
    /** 产品广告Id */
    id?: string;
    /** 开始时间 */
    startTime?: string;
    /** 到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
  }

  interface AdvertisePriceInfo {
    /** 广告价位配置Id */
    id?: string;
    /** 广告类型：0产品服务，1行业资讯 */
    type?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 状态：-10已下架，10上架/显示中 */
    status?: number;
    /** 价格信息 */
    prices?: PeriodPriceInfo[];
  }

  interface AliRechargeInfo {
    /** 充值单号 */
    rechargeNo?: string;
    /** 充值码地址 */
    rechargeCodeUrl?: string;
  }

  interface AliRechargeInfoAjaxResponse {
    success?: boolean;
    msg?: string;
    error?: RemoteServiceErrorInfo;
    unAuthorizedRequest?: boolean;
    result?: AliRechargeInfo;
  }

  interface AliRechargeInput {
    /** 充值金额，单位为元。 */
    amount?: number;
    /** 商品描述 */
    description?: string;
    /** 备注 */
    remark?: string;
  }

  interface AllSubModule {
    pageButton?: ModuleButtonDto[];
    dataButton?: ModuleButtonDto[];
    column?: ModuleColumnDto[];
  }

  interface APIaddOrEditModuleStatusParams {
    id?: string;
    isMenu?: number;
    enabledMark?: number;
    isCache?: boolean;
  }

  interface APIadvertiseOffShelfParams {
    /** 资讯广告Id */
    id?: string;
  }

  interface APIadvertiseOffShelfParams {
    id?: string;
  }

  interface APIadvertiseOffShelfParams {
    /** 产品广告Id */
    id?: string;
  }

  interface APIadvertiseOnShelfParams {
    /** 资讯广告Id */
    id?: string;
  }

  interface APIadvertiseOnShelfParams {
    id?: string;
  }

  interface APIadvertiseOnShelfParams {
    /** 产品广告Id */
    id?: string;
  }

  interface APIadvertisePriceOffShelfParams {
    /** 广告价位配置Id */
    id?: string;
  }

  interface APIadvertisePriceOnShelfParams {
    /** 广告价位配置Id */
    id?: string;
  }

  interface APIapiDefinitionParams {
    includeTypes?: boolean;
  }

  interface APIattentOrNotParams {
    /** 资讯Id */
    informationId?: string;
  }

  interface APIattentOrNotParams {
    parkOrhrId?: string;
  }

  interface APIattentOrNotParams {
    /** 产品Id */
    productId?: string;
  }

  interface APIcreateParams {
    systemEmail: string;
    systemPassword: string;
    versionId?: string;
    systemUserName: string;
    systemName: string;
    name: string;
    extraProperties?: Record<string, any>;
  }

  interface APIdeleteAdvertisePriceParams {
    /** 广告价位配置Id */
    id?: string;
  }

  interface APIdeleteBackClientUserParams {
    /** 用户Id */
    id?: string;
  }

  interface APIdeleteConsultParams {
    id?: string;
  }

  interface APIdeleteDefaultConnectionStringParams {
    id?: string;
  }

  interface APIdeleteHeadHunterParams {
    id?: string;
  }

  interface APIdeleteHelpQuestionParams {
    id?: string;
  }

  interface APIdeleteInformationParams {
    /** 资讯Id */
    id?: string;
  }

  interface APIdeleteModuleButtonParams {
    id?: string;
  }

  interface APIdeleteModuleColumnParams {
    id?: string;
  }

  interface APIdeleteModuleParams {
    id?: string;
  }

  interface APIdeleteMyPurchaseParams {
    /** 产品购买Id */
    id?: string;
  }

  interface APIdeleteOrderParams {
    id?: string;
  }

  interface APIdeleteProductParams {
    /** 产品Id */
    id?: string;
  }

  interface APIdeleteResourceParams {
    id?: string;
  }

  interface APIdeleteRoleParams {
    id?: string;
  }

  interface APIdeleteRoleParams {
    /** 角色Id */
    id?: string;
  }

  interface APIdeleteTenantParams {
    id?: string;
  }

  interface APIdeleteTencentUserParams {
    id?: string;
  }

  interface APIdeleteTrainingParams {
    id?: string;
  }

  interface APIdeleteUserParams {
    id?: string;
  }

  interface APIdetailParams {
    /** 入参Id */
    id?: string;
  }

  interface APIdetailParams {
    id?: string;
  }

  interface APIfindByEmailParams {
    email?: string;
  }

  interface APIfindByIdParams {
    id?: string;
  }

  interface APIfindByUsernameParams {
    userName?: string;
  }

  interface APIfindByUserNameParams {
    userName?: string;
  }

  interface APIforbiddenRoleParams {
    roleName?: string;
    permissionName?: string;
  }

  interface APIforbiddenUserParams {
    userId?: string;
    permissionName?: string;
  }

  interface APIgenTencentSigParams {
    userId?: string;
  }

  interface APIgetAdvertisePriceParams {
    /** 广告类型：0产品服务，1行业资讯 */
    type?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType?: number;
  }

  interface APIgetAliRechargeStatusParams {
    /** 充值单号 */
    rechargeNo?: string;
  }

  interface APIgetAllSubModuleParams {
    moduleId?: string;
  }

  interface APIgetCategoryMenuParams {
    catotryType?: number;
  }

  interface APIgetCategoryParams {
    /** 类别Id */
    id?: string;
  }

  interface APIgetCompanyAttestationParams {
    /** 用户认证Id */
    id?: string;
  }

  interface APIgetCompanyUserParams {
    /** 用户Id */
    id?: string;
  }

  interface APIgetConsultInfoParams {
    id?: string;
  }

  interface APIgetCooperationApplyByIdParams {
    id?: string;
  }

  interface APIgetCountParams {
    filter?: string;
  }

  interface APIgetCurrentSubModuleListParams {
    moduleId?: string;
  }

  interface APIgetDefaultConnectionStringParams {
    id?: string;
  }

  interface APIgetFirstCurrentUserModuleListCacheByModuleIdParams {
    moduleId?: string;
  }

  interface APIgetFronConsultInfoParams {
    id?: string;
  }

  interface APIgetFronHeadHunterInfoParams {
    id?: string;
  }

  interface APIgetFronTrainingInfoParams {
    id?: string;
  }

  interface APIgetFrontResourceInfoByUserIdParams {
    userId?: string;
  }

  interface APIgetFrontResourceInfoParams {
    id?: string;
  }

  interface APIgetHeadHunterInfoParams {
    id?: string;
  }

  interface APIgetHelpQuestionInfoParams {
    id?: string;
  }

  interface APIgetInformationAdvertiseParams {
    /** 资讯广告Id */
    id?: string;
  }

  interface APIgetInformationForDetailParams {
    id?: string;
  }

  interface APIgetInformationParams {
    /** 资讯Id */
    id?: string;
  }

  interface APIgetListParams {
    filter?: string;
    clientId?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  }

  interface APIgetListParams {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  }

  interface APIgetOrdeForDetailByUserIdParams {
    userId?: string;
  }

  interface APIgetOrdeForDetailParams {
    id?: string;
  }

  interface APIgetOrderListForRecommendParams {
    categoryId?: string;
  }

  interface APIgetParams {
    providerName?: string;
    providerKey?: string;
  }

  interface APIgetParams {
    id?: string;
  }

  interface APIgetParams {
    id?: string;
  }

  interface APIgetParams {
    providerName?: string;
    providerKey?: string;
  }

  interface APIgetParams {
    id?: string;
  }

  interface APIgetParkOrHRAdvertiseParams {
    id?: string;
  }

  interface APIgetParkOrHRInfoParams {
    id?: string;
  }

  interface APIgetPersonalAttestationParams {
    /** 用户认证Id */
    id?: string;
  }

  interface APIgetPersonalUserParams {
    /** 用户Id */
    id?: string;
  }

  interface APIgetPlatformContactByCategoryIdParams {
    categoryId?: string;
  }

  interface APIgetProductAdvertiseParams {
    /** 产品广告Id */
    id?: string;
  }

  interface APIgetProductForDetailParams {
    id?: string;
  }

  interface APIgetProductParams {
    /** 产品Id */
    id?: string;
  }

  interface APIgetQrCodeLoginResultParams {
    /** 扫码登录Id */
    uId?: string;
  }

  interface APIgetResourceInfoParams {
    id?: string;
  }

  interface APIgetRolesIdRolesParams {
    id: string;
  }

  interface APIgetServeUserParams {
    userId?: string;
  }

  interface APIgetTagMenuParams {
    /** 类型：0产品标签，1资讯标签，2自定义标签，3快捷评论标签 */
    type?: number;
  }

  interface APIgetTencentUserByUserIdParams {
    userId?: string;
  }

  interface APIgetTrainingInfoParams {
    id?: string;
  }

  interface APIgetUserCardByIdParams {
    id?: string;
  }

  interface APIgetUserListByPhoneNumberParams {
    phoneNumber?: string;
    clientId?: string;
  }

  interface APIgetUserOrRoleModuleListParams {
    id?: string;
    objectType?: number;
  }

  interface APIgetUserOrRoleSubModuleListParams {
    id?: string;
    objectType?: number;
  }

  interface APIgetVersionModuleListParams {
    versionId?: string;
  }

  interface APIgetVersionSubModuleParams {
    versionId?: string;
  }

  interface APIgetWxIndentityParams {
    /** 用户登录凭证 */
    code?: string;
  }

  interface APIgetWxRechargeStatusParams {
    /** 充值单号 */
    rechargeNo?: string;
  }

  interface APImyInformationPlaceTopParams {
    /** 资讯Id */
    id?: string;
  }

  interface APImyPurchaseCheckParams {
    /** 产品购买Id */
    id?: string;
  }

  interface APIoffShelfParams {
    /** 资讯Id */
    id?: string;
  }

  interface APIoffShelfParams {
    /** 产品Id */
    id?: string;
  }

  interface APIonShelfParams {
    /** 资讯Id */
    id?: string;
  }

  interface APIonShelfParams {
    /** 产品Id */
    id?: string;
  }

  interface APIorderTakenNotReadCountParams {
    orderId?: string;
  }

  interface APIsearchParams {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  }

  interface APIsetForRoleParams {
    roleName?: string;
    permissionName?: string;
  }

  interface APIsetForUserParams {
    userId?: string;
    permissionName?: string;
  }

  interface APIsetMessageIsReadParams {
    id?: string;
  }

  interface APIsetResourceTypeParams {
    id?: string;
  }

  interface APItakeOrderParams {
    orderId?: string;
  }

  interface APItencentUserEnableOrForbidParams {
    id?: string;
  }

  interface APIupdateDefaultConnectionStringParams {
    id?: string;
    defaultConnectionString?: string;
  }

  interface APIupdateParams {
    providerName?: string;
    providerKey?: string;
  }

  interface APIupdateParams {
    id?: string;
  }

  interface APIupdateParams {
    id?: string;
  }

  interface APIupdateParams {
    providerName?: string;
    providerKey?: string;
  }

  interface APIupdateParams {
    id?: string;
    name: string;
    extraProperties?: Record<string, any>;
  }

  interface APIupdateRolesParams {
    id?: string;
  }

  interface APIuserEnableOrForbidParams {
    /** 用户Id */
    id?: string;
  }

  interface APIvatLicenseParams {
    url?: string;
  }

  interface APIwxMiniAppUserLoginParams {
    /** 用户登录凭证 */
    code?: string;
  }

  interface ApplicationApiDescriptionModel {
    modules?: Record<string, any>;
    types?: Record<string, any>;
  }

  interface ApplicationAuthConfigurationDto {
    policies?: Record<string, any>;
    grantedPolicies?: Record<string, any>;
  }

  interface ApplicationConfigurationDto {
    localization?: ApplicationLocalizationConfigurationDto;
    auth?: ApplicationAuthConfigurationDto;
    setting?: ApplicationSettingConfigurationDto;
    currentUser?: CurrentUserDto;
    features?: ApplicationFeatureConfigurationDto;
    multiTenancy?: MultiTenancyInfoDto;
    currentTenant?: CurrentTenantDto;
    timing?: TimingDto;
    clock?: ClockDto;
    objectExtensions?: ObjectExtensionsDto;
  }

  interface ApplicationFeatureConfigurationDto {
    values?: Record<string, any>;
  }

  interface ApplicationLocalizationConfigurationDto {
    values?: Record<string, any>;
    languages?: LanguageInfo[];
    currentCulture?: CurrentCultureDto;
    defaultResourceName?: string;
    languagesMap?: Record<string, any>;
    languageFilesMap?: Record<string, any>;
  }

  interface ApplicationSettingConfigurationDto {
    values?: Record<string, any>;
  }

  interface AreaDto {
    /** 编码 */
    areaCode?: number;
    /** 父级编码 */
    parentCode?: number;
    /** 名称 */
    areaName?: string;
    /** 1省 2市 3区 4镇 */
    layer?: number;
    /** 排序 */
    sort?: number;
  }

  interface AreaInfo {
    areaCode?: number;
    parentId?: number;
    areaName?: string;
    /** 1省 2市 3区 4镇 */
    layer?: number;
    sort?: number;
    children?: AreaInfo[];
  }

  interface BaseAuthorizeDto {
    moduleType?: number;
    moduleId?: string;
    objectType?: number;
    objectId?: string;
    addOrDelete?: number;
  }

  interface BaseAuthorizeInput {
    moduleTypeInfo?: ModuleTypeInfo[];
    objectType?: number;
    objectId?: string;
  }

  interface CategoryDto {
    /** 类别Id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 简述 */
    sketch?: string;
    /** 图标地址 */
    icon?: string;
    /** 头部图标地址 */
    headIcon?: string;
    /** 是否显示，true显示，false隐藏 */
    isVisable?: boolean;
    /** 是否支持广告 */
    isSupportAdvertise?: boolean;
  }

  interface CategoryInfo {
    /** 类别Id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 简述 */
    sketch?: string;
    /** 图标地址 */
    icon?: string;
    /** 头部图标地址 */
    headIcon?: string;
    /** 是否显示，true显示，false隐藏 */
    isVisable?: boolean;
    /** 是否支持广告 */
    isSupportAdvertise?: boolean;
    /** 类型：0产品类别，1资讯类别 */
    type?: number;
    /** 封面信息 */
    covers?: CoverMsg[];
  }

  interface CategoryMenu {
    /** 类别Id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 头部图标地址 */
    headIcon?: string;
    /** 图标地址 */
    icon?: string;
    /** 封面信息 */
    covers?: CoverMsg[];
    /** 简述 */
    sketch?: string;
    /** 排序 */
    sequence?: number;
  }

  interface ChangePasswordInput {
    currentPassword?: string;
    newPassword: string;
  }

  interface ChangeSortInput {
    id1?: string;
    sortCode1?: number;
    id2?: string;
    sortCode2?: number;
    type?: number;
  }

  interface CheckLoginVerificationCodeInput {
    messageType?: string;
    phoneNumber: string;
    verificationCode?: string;
  }

  interface CityInfo {
    provinceCode?: number;
    areaCode?: number;
    areaName?: string;
    /** 顺序 */
    sequence?: number;
  }

  interface ClockDto {
    kind?: string;
  }

  interface CommentCheckInput {
    /** 评论Id */
    id?: string;
    /** 审核状态：10通过，-10驳回 */
    status?: number;
    /** 备注 */
    remark?: string;
  }

  interface CommentForManage {
    /** 评论Id */
    id?: string;
    /** 类别Id */
    categoryId?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 产品名称 */
    productName?: string;
    /** 服务商 */
    serveName?: string;
    /** 评论内容 */
    content?: string;
    /** 评论人 */
    commentator?: string;
    /** 评论时间 */
    commentTime?: string;
    /** 审核时间 */
    checkTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
    /** 验收时间 */
    fixtureDate?: string;
  }

  interface CommentForManagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CommentForManage[];
  }

  interface CommentForProduct {
    /** 评论Id */
    id?: string;
    /** 产品名称 */
    productName?: string;
    /** 评论内容 */
    content?: string;
    /** 评论人 */
    commentator?: string;
    /** 评论时间 */
    commentTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
    /** 评星数 */
    starCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 是否是我的点赞 */
    isMyCommentThumbsUp?: boolean;
    /** 点赞的ID */
    commentThumbsUpId?: string;
  }

  interface CommentForProductPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CommentForProduct[];
  }

  interface CompanyAttestationDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 认证类型：1为企业，2为个人 */
    type?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 企业名称 */
    customerName?: string;
    /** 社会统一信用代码 */
    societyCreditCode?: string;
    /** 营业执照文件地址 */
    licenseUrl?: string;
    /** 区域Code */
    areaCode?: number;
    /** 所属区域 */
    address?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域 */
    areaName?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 公司名称 */
    cardCompanyName?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 企业规模 */
    firmSize?: number;
    /** 所在职位 */
    jobPosition?: number;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 备注 */
    remark?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
  }

  interface CompanyAttestationSubmitInput {
    /** 营业执照文件地址 */
    licenseUrl: string;
    /** 企业名称 */
    customerName: string;
    /** 社会统一信用代码 */
    societyCreditCode?: string;
    /** 区域Code */
    areaCode: number;
    /** 联系人 */
    contacter: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 企业规模 */
    firmSize: number;
    /** 所在职位 */
    jobPosition: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
  }

  interface CompanyUserDetail {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 企业名称 */
    customerName?: string;
    /** 社会统一信用代码 */
    societyCreditCode?: string;
    /** 营业执照文件地址 */
    licenseUrl?: string;
    /** 所属区域 */
    address?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 企业规模 */
    firmSize?: number;
    /** 所在职位 */
    jobPosition?: number;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 产品数量 */
    productCount?: number;
    /** 资讯数量 */
    informationCount?: number;
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系电话 */
    outerContacterPhone?: string;
  }

  interface CompanyUserDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 企业名称 */
    customerName?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 所在地 */
    address?: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 产品数量（审核通过的数量） */
    productCount?: number;
    /** 资讯数量（审核通过的数量） */
    informationCount?: number;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 账户是否锁住（是否禁用） */
    isLocked?: boolean;
  }

  interface CompanyUserDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CompanyUserDto[];
  }

  interface ConditionInfo {
    id?: string;
    name?: string;
    sort?: number;
  }

  interface ConsultDto {
    id?: string;
    categoryId?: string;
    userId?: string;
    userStatus?: number;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 职位名称Id */
    consultSettingId?: string;
    /** 职位名称Id */
    consultSettingName?: string;
    /** 详细地址 */
    address?: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 所属行业ID */
    industrySettingId?: string;
    /** 所属行业名称 */
    industrySettingName?: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始薪资 */
    startMonthlySalary?: number;
    /** 截止起始薪资 */
    endMonthlySalary?: number;
    /** 工作介绍 */
    consultIntroduction?: string;
    /** 10 固定 20 面议 */
    salaryType?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    viewCount?: number;
    attentionCount?: number;
    companyName?: string;
  }

  interface ConsultDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ConsultDto[];
  }

  interface ConsultListInput {
    pageModel?: Pagination;
    /** 昵称 */
    consultName?: string;
    status?: number;
    startDate?: string;
    endDate?: string;
  }

  interface ConsultRecommendInput {
    id?: string;
    isRecommend?: boolean;
  }

  interface ConsultViewInput {
    /** 订单浏览Id */
    id?: string;
    /** 订单Id */
    consultId?: string;
  }

  interface ControllerApiDescriptionModel {
    controllerName?: string;
    controllerGroupName?: string;
    type?: string;
    interfaces?: ControllerInterfaceApiDescriptionModel[];
    actions?: Record<string, any>;
  }

  interface ControllerInterfaceApiDescriptionModel {
    type?: string;
  }

  interface CooperationApplyDto {
    id?: string;
    /** 合作的类别 */
    title?: string;
    /** 企业规模 */
    companyScale?: number;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 省市 */
    provinceCity?: string;
    /** 申请描述 */
    applyDescription?: string;
    /** 10 待受理 20 受理中 30 已完成 -10 拒绝合作 */
    status?: number;
    /** 认证状态：0提交待审核，10通过，-10驳回，-20未提交 */
    userAttestationStatus?: number;
    creationTime?: string;
    creatorId?: string;
    customerName?: string;
    cooperationApplyFllowDtos?: CooperationApplyFllowDto[];
  }

  interface CooperationApplyDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CooperationApplyDto[];
  }

  interface CooperationApplyFllowDto {
    cooperationApplyId?: string;
    /** 跟进备注 */
    remark?: string;
    /** 10 待受理 20 受理中 30 已完成 -10 拒绝合作 */
    status?: number;
    creationTime?: string;
    creationName?: string;
  }

  interface CoverInfo {
    /** 封面地址 */
    url?: string;
    /** 排序 */
    sequence?: number;
    /** 是否设为封面 */
    isMain?: boolean;
  }

  interface CoverMsg {
    /** 封面地址 */
    url?: string;
    /** 排序 */
    sequence?: number;
  }

  interface CreateBackClientUserInput {
    /** 名称 */
    name?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 账户 */
    userName?: string;
    /** 角色 */
    roleNames?: string[];
  }

  interface CreateBaseRoleInput {
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 部门Id */
    departmentId?: number;
    /** 备注 */
    remark?: string;
  }

  interface CreateCompanyUserInput {
    /** 联系人 */
    contacter: string;
    /** 联系电话 */
    contacterPhone: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 企业名称 */
    customerName: string;
    /** 社会统一信用代码 */
    societyCreditCode: string;
    /** 营业执照文件地址 */
    licenseUrl?: string;
    /** 对外联系人 */
    outerContacter: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系电话 */
    outerContacterPhone: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 区域Code */
    areaCode?: number;
    /** 企业规模 */
    firmSize?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
  }

  interface CreateCooperationApplyFllowInput {
    cooperationApplyId?: string;
    /** 跟进备注 */
    remark?: string;
    /** 10 待受理 20 受理中 30 已完成 -10 拒绝合作 */
    status?: number;
  }

  interface CreateInformationAdvertiseInput {
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 资讯Id */
    informationId?: string;
  }

  interface CreateInformationInput {
    /** 类别Id */
    categoryId?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 客户Id */
    customerId?: string;
    /** 状态：-1保存，0提交待审核（发布） */
    status?: number;
    /** 标题 */
    title: string;
    /** 是否原创 */
    isOriginal?: boolean;
    /** 转载链接 */
    repostLink?: string;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 联系电话 */
    contactPhone?: string;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 举办地址区域Code */
    areaCode?: number;
    /** 详细举办地址 */
    address?: string;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;
    /** 举办/发布单位 */
    unit?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 封面信息 */
    coverInfo?: CoverInfo[];
    /** 标签信息 */
    tagInfo?: TagMsg[];
    /** 详情信息 */
    introInfo?: IntroInfo[];
    /** 实行省份信息 */
    provinceInfo?: ProvinceMsg[];
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
  }

  interface CreateOrEditConsultInput {
    id?: string;
    categoryId?: string;
    userId?: string;
    title?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 详细地址 */
    address?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    contact: string;
    /** 联系电话 */
    contactNumber: string;
    consultSettingId: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 所属行业 */
    industrySettingId: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 职位要求 */
    consultIntroduction: string;
    /** 10 固定 20 面议 */
    salaryType?: number;
  }

  interface CreateOrEditHeadHunterInput {
    id?: string;
    categoryId?: string;
    userId?: string;
    title?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 详细地址 */
    address?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    contact: string;
    /** 联系电话 */
    contactNumber: string;
    jobSettingId: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 所属行业 */
    industrySettingId: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 职位要求 */
    jobIntroduction: string;
    /** 10 固定 20 面议 */
    salaryType?: number;
  }

  interface CreateOrEditHelpQuestionInput {
    id?: string;
    title?: string;
    helpTypeSettingId?: string;
    status?: number;
    /** 详情信息 */
    introInfo?: HelpQuestionIntroInfo[];
  }

  interface CreateOrEditParkOrHRInput {
    id?: string;
    /** 所属账号 10自动创建 20选择账号 */
    belongAccountWay?: number;
    /** 类别ID */
    categoryId: string;
    /** 所属账号Id */
    userId?: string;
    /** 审批状态 5草稿 10待审核 20办理中 30通过 40驳回 */
    status?: number;
    /** 10 园区 20 人资企业 */
    type?: number;
    /** 是否隐藏名字 1隐藏 0不隐藏 */
    isHideName?: boolean;
    /** 园区/企业名称 */
    name: string;
    /** 联系人 */
    contact: string;
    /** 联系电话 */
    contactPhone: string;
    /** 园区/企业级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    /** 是否展示 */
    isShow?: boolean;
    /** 园区对外联系人 */
    foreignContact?: string;
    /** 园区对外联系方式 */
    foreignContactPhone?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    provinceName?: string;
    cityName?: string;
    countyName?: string;
    /** 运营机构 10民企运营 20政府运营 */
    operatingAgencies?: number;
    /** 备注 */
    remark?: string;
    /** 园区介绍 */
    description?: string;
    /** 园区客户 */
    parkCustomersCount: number;
    /** 成立年份 */
    setUpDate: number;
    serveSetting?: string[];
    workOfType?: string[];
    parkStyle?: ParkStyleDto[];
    hrArea?: HRAreaDto[];
    honorCertificateCount?: number;
    /** 劳工人数 */
    serviceWorkerCount: number;
    auditNote?: string;
  }

  interface CreateOrEditPlatformContactInput {
    id?: string;
    /** 行业服务 = 0 行业配套 = 1  甲方需求 = 2 行业资讯 = 3; */
    categoryType: number;
    categoryId?: string;
    /** 联系方式 */
    contactPhone: string;
  }

  interface CreateOrEditResourceInput {
    id?: string;
    categoryId?: string;
    /** 资源标题 */
    title: string;
    /** 资源数量 */
    resourceCount: number;
    /** 联系人 */
    contact: string;
    /** 联系电话 */
    contactNumber: string;
    /** 预计交付完成天数 */
    estimatedDeliveryCompletionMonth?: number;
    /** 合作费 */
    cooperationFee: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    /** 所在省区域码 */
    provinceCode?: number;
    /** 所在省 */
    provinceName?: string;
    /** 标签Id */
    resourceTagIds?: OrderSettingDto[];
    /** 意向输送城市 */
    intendedDeliveryCity: CityInfo[];
    /** 所在城市 */
    cities: CityInfo[];
    resourceStyleInfo?: ResourceStyleInfo[];
    /** 资源介绍 */
    resourceIntros?: ResourceIntro[];
    /** 名片用户id */
    userId?: string;
  }

  interface CreateOrEditSearchInput {
    id?: string;
    /** 搜素管理 10热搜词 20服务类型 30工种 40园区类型 50资讯活动类型 60政策颁布机构 70区域管理 80产品类型 90需求类型 100需求范围
110 员工福利 120行业类型 130 猎头职位 */
    searchType: number;
    /** 所属类别 10园区 20人资企业 */
    belongType?: number;
    /** 名称 */
    name: string;
    /** 排序 */
    sort: number;
    /** 状态 1显示 0禁用 */
    status: boolean;
    /** 图片 */
    src?: string;
  }

  interface CreateOrEditTrainingInput {
    id?: string;
    categoryId?: string;
    userId?: string;
    /** 培训标题 */
    title: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 省 */
    provinceCode?: number;
    /** 市 */
    cityCode?: number;
    /** 区 */
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    /** 联系人 */
    contact: string;
    /** 联系电话 */
    contactNumber: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 10 固定 20 面议 */
    salaryType?: number;
    department?: string;
    month?: string;
    /** 工作介绍 */
    trainIntroduction?: string;
  }

  interface CreateOrUpdateAdvertisePriceInput {
    /** 广告类型：0产品服务，1行业资讯 */
    type?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 价格信息 */
    prices?: PeriodPriceInfo[];
  }

  interface CreateOrUpdateCategoryInput {
    /** 类别Id */
    id?: string;
    /** 类型：0产品类别，1资讯类别 */
    type?: number;
    /** 名称 */
    name: string;
    /** 简述 */
    sketch: string;
    /** 排序 */
    sequence?: number;
    /** 图标地址 */
    icon?: string;
    /** 头部图标地址 */
    headIcon?: string;
    /** 是否支持广告 */
    isSupportAdvertise?: boolean;
    /** 备选图片（封面信息） */
    coverInfo?: CoverMsg[];
  }

  interface CreateOrUpdateCooperationApplyInput {
    id?: string;
    /** 合作的类别 */
    title?: string;
    /** 企业规模 */
    companyScale?: number;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 省市 */
    provinceCity?: string;
    /** 申请描述 */
    applyDescription?: string;
    /** 10 待受理 20 受理中 30 已完成 -10 拒绝合作 */
    status?: number;
  }

  interface CreateOrUpdateOrderinput {
    id?: string;
    /** 订单名称 */
    name: string;
    categoryId?: string;
    userId?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 招聘人数类型 10 固定人数  20 范围人数 */
    hireType: number;
    /** 固定人数 或 范围人数的起始人数 */
    hireNumber?: number;
    /** 范围人数的截止人数 */
    hireEndNumber?: number;
    /** 返费备注 */
    rebateRemark?: string;
    /** 起始年龄 */
    ageStart?: number;
    /** 截止年龄 */
    ageEnd?: number;
    /** 学历要求 0 不限 10 小学 20 初中 30 高中 40 专科 50 大学 60 硕士 70 博士 及以上 */
    education: number;
    /** 性别要求 0 不限 10 仅限男士 20 仅限女士 30 男女设定 */
    sexRequirement: number;
    /** 男性人数 */
    manNumber?: number;
    /** 女性人数 */
    womanNumber?: number;
    /** 工作性质 10 两班倒 20 仅白班 */
    workNature?: number;
    /** 白班时间 */
    dayStartTime?: string;
    /** 白班截止时间 */
    dayEndTime?: string;
    /** 晚班开始时间 */
    nightStartTime?: string;
    /** 晚班截止时间 */
    nightEndTime?: string;
    /** 员工薪酬 */
    salary?: number;
    /** 联系人 */
    contact: string;
    /** 联系电话 */
    contactNumber: string;
    /** 公司座机 */
    companyLandline?: string;
    /** 接车电话 */
    carNumber?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 详细地址 */
    addressDetail?: string;
    /** 工作介绍 */
    jobIntroduction?: string;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 工资发放类型 10 每月发放 20 每周发放 30 每日发放 */
    salaryType?: number;
    /** 服务费 */
    service?: number;
    /** 对外联系方式 10 平台 20 手动输入 */
    externalcontactType?: number;
    /** 对外联系电话 */
    externalcontactNumber?: string;
    /** 员工福利 */
    searchSettingId?: string[];
    /** 企业风采 */
    src?: string[];
    supplierRefundList?: SupplierRefundList[];
  }

  interface CreateOrUpdateRewardPercentageInput {
    /** Up主等级 */
    upLevel?: number;
    /** Up主占比 */
    upRatio?: number;
    /** 平台占比 */
    platformRatio?: number;
  }

  interface CreateOrUpdateRoleInput {
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 部门Id */
    departmentId?: number;
    /** 备注 */
    remark?: string;
    /** 角色Id */
    id?: string;
  }

  interface CreateOrUpdateTagInput {
    /** 标签Id */
    id?: string;
    /** 类型：0产品标签，1资讯标签，2自定义标签，3快捷评论标签 */
    type?: number;
    /** 类别Id */
    categoryId?: string;
    /** 行业服务 = 0 行业配套 = 1  甲方需求 = 2 行业资讯 = 3; */
    categoryType?: number;
    /** 名称 */
    name: string;
    /** 排序 */
    sequence?: number;
  }

  interface CreateParkOrHRAdvertiseInput {
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 产品Id */
    parkOrHRId?: string;
  }

  interface CreateProductAdvertiseInput {
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 产品Id */
    productId?: string;
  }

  interface CreateProductInput {
    /** 类别Id */
    categoryId?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 客户Id */
    customerId?: string;
    /** 产品名称 */
    name: string;
    /** 简述 */
    sketch?: string;
    /** 状态：-1保存，0提交待审核（发布） */
    status?: number;
    /** 封面信息 */
    coverInfo?: CoverInfo[];
    /** 详情信息 */
    priceVersionInfo?: PriceVersionInfo[];
    /** 标签信息 */
    tagInfo?: TagMsg[];
    /** 详情信息 */
    introInfo?: IntroInfo[];
    /** 初始销售量 */
    initSalesVolume?: number;
    /** 初始评分 */
    initScore?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 初始好评数 */
    initPraiseCount?: number;
    /** 初始点赞数 */
    initThumbsUpCount?: number;
  }

  interface CreatePurchasedProductInput {
    /** 产品Id */
    productId?: string;
    /** 用户Id */
    userId?: string;
    /** 版本Id */
    versionId?: string;
    /** 产品单价 */
    unitPrice?: number;
    /** 版本名 */
    versionName?: string;
    /** 收费方式 */
    chargeWay?: string;
    /** 产品数量 */
    count?: number;
    /** 状态：0待确认验收，10待评价(确认验收)，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
  }

  interface CreateRechargeInput {
    /** 充值金额，单位为元。 */
    amount: number;
    /** 打款凭证 */
    acountBillUrl: string;
    userId: string;
    /** 打款日期 */
    successTime: string;
    /** 备注 */
    remark?: string;
  }

  interface CreateUserWithdrawInput {
    /** 用户Id */
    userId?: string;
    /** 提现单号 */
    withDrawNo?: string;
    /** 提现类型：10微信，20支付宝 30 银行卡 */
    type?: number;
    /** 账号名 */
    name?: string;
    /** 收款账号 */
    account?: string;
    /** 账号支行 */
    bankBranch?: string;
    amount?: number;
    /** 交易状态 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 回单URL */
    receiptUrl?: string;
  }

  interface CreateWithdrawAccountInput {
    /** 收款账号 */
    account?: string;
    /** 账号支行 */
    bankBranch?: string;
  }

  interface CurrentCultureDto {
    displayName?: string;
    englishName?: string;
    threeLetterIsoLanguageName?: string;
    twoLetterIsoLanguageName?: string;
    isRightToLeft?: boolean;
    cultureName?: string;
    name?: string;
    nativeName?: string;
    dateTimeFormat?: DateTimeFormatDto;
  }

  interface CurrentTenantDto {
    id?: string;
    name?: string;
    isAvailable?: boolean;
  }

  interface CurrentUserDto {
    isAuthenticated?: boolean;
    id?: string;
    tenantId?: string;
    impersonatorUserId?: string;
    impersonatorTenantId?: string;
    impersonatorUserName?: string;
    impersonatorTenantName?: string;
    userName?: string;
    name?: string;
    surName?: string;
    email?: string;
    emailVerified?: boolean;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    roles?: string[];
  }

  interface CusmterAmountDto {
    /** 用户Id */
    userId?: string;
    /** 余额总额 */
    amount?: number;
    /** 充值金额 */
    consumeAmount?: number;
    customerName?: string;
    contracter?: string;
    contracterPhone?: string;
  }

  interface CusmterAmountDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CusmterAmountDto[];
  }

  interface CusmterAmountListInput {
    pageModel?: Pagination;
    /** 客户名称 */
    customerName?: string;
    amountBegin?: number;
    amountEnd?: number;
    consumeBegin?: number;
    consumeEnd?: number;
  }

  interface CusmterRewardDto {
    transferId?: string;
    /** 打赏用户Id */
    userId?: string;
    /** 被打赏用户Id */
    rewardUserId?: string;
    /** 打赏金额 */
    amount?: number;
    /** 被打赏客户名称 */
    rewardCustomerName?: string;
    /** 打赏客户名称 */
    customerName?: string;
    /** 打赏人的联系方式 */
    customerPhone?: string;
    rewardTime?: string;
    title?: string;
    url?: string;
  }

  interface CusmterRewardDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: CusmterRewardDto[];
  }

  interface CusmterRewardListInput {
    pageModel?: Pagination;
    /** 客户名称 */
    customerName?: string;
    amountBegin?: number;
    amountEnd?: number;
    beginTime?: string;
    endTime?: string;
  }

  interface CustomerMenu {
    /** 客户Id */
    customerId?: string;
    /** 企业名称/个人姓名 */
    customerName?: string;
  }

  interface CustomerRechargeListInput {
    pageModel?: Pagination;
    /** 昵称 */
    customerId?: string;
  }

  interface DateTimeFormatDto {
    calendarAlgorithmType?: string;
    dateTimeFormatLong?: string;
    shortDatePattern?: string;
    fullDateTimePattern?: string;
    dateSeparator?: string;
    shortTimePattern?: string;
    longTimePattern?: string;
  }

  interface DealWithRefundInput {
    /** 产品购买Id */
    id?: string;
    /** 退款处理状态状态：-20退款成功，-30申请退款驳回 */
    status?: number;
    /** 退款处理备注 */
    refundDealRemark?: string;
  }

  interface EnableSearchSettingInput {
    id: string;
    status: boolean;
  }

  interface EntityExtensionDto {
    properties?: Record<string, any>;
    configuration?: Record<string, any>;
  }

  interface ExtensionEnumDto {
    fields?: ExtensionEnumFieldDto[];
    localizationResource?: string;
  }

  interface ExtensionEnumFieldDto {
    name?: string;
    value?: any;
  }

  interface ExtensionPropertyApiCreateDto {
    isAvailable?: boolean;
  }

  interface ExtensionPropertyApiDto {
    onGet?: ExtensionPropertyApiGetDto;
    onCreate?: ExtensionPropertyApiCreateDto;
    onUpdate?: ExtensionPropertyApiUpdateDto;
  }

  interface ExtensionPropertyApiGetDto {
    isAvailable?: boolean;
  }

  interface ExtensionPropertyApiUpdateDto {
    isAvailable?: boolean;
  }

  interface ExtensionPropertyAttributeDto {
    typeSimple?: string;
    config?: Record<string, any>;
  }

  interface ExtensionPropertyDto {
    type?: string;
    typeSimple?: string;
    displayName?: LocalizableStringDto;
    api?: ExtensionPropertyApiDto;
    ui?: ExtensionPropertyUiDto;
    attributes?: ExtensionPropertyAttributeDto[];
    configuration?: Record<string, any>;
    defaultValue?: any;
  }

  interface ExtensionPropertyUiDto {
    onTable?: ExtensionPropertyUiTableDto;
    onCreateForm?: ExtensionPropertyUiFormDto;
    onEditForm?: ExtensionPropertyUiFormDto;
    lookup?: ExtensionPropertyUiLookupDto;
  }

  interface ExtensionPropertyUiFormDto {
    isVisible?: boolean;
  }

  interface ExtensionPropertyUiLookupDto {
    url?: string;
    resultListPropertyName?: string;
    displayPropertyName?: string;
    valuePropertyName?: string;
    filterParamName?: string;
  }

  interface ExtensionPropertyUiTableDto {
    isVisible?: boolean;
  }

  interface FeatureDto {
    name?: string;
    displayName?: string;
    value?: string;
    provider?: FeatureProviderDto;
    description?: string;
    valueType?: IStringValueType;
    depth?: number;
    parentName?: string;
  }

  interface FeatureGroupDto {
    name?: string;
    displayName?: string;
    features?: FeatureDto[];
  }

  interface FeatureProviderDto {
    name?: string;
    key?: string;
  }

  interface FrontHROfParkInput {
    pageModel?: Pagination;
    parkId: string;
    /** 冠名级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    workOfType?: string[];
    service?: string[];
    searchName?: string;
    isMy?: boolean;
  }

  interface FrontHROfParkList {
    id?: string;
    userId?: string;
    /** 企业名称 */
    name?: string;
    /** 封面 */
    topSrc?: string;
    /** 劳工人数 */
    serviceWorkerCount?: number;
    /** 服务 */
    service?: string[];
    /** 工种 */
    workOfType?: string[];
    /** 是否关注 */
    isMyAttention?: boolean;
    /** 冠名 */
    level?: number;
    location?: string;
  }

  interface FrontHROfParkListPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: FrontHROfParkList[];
  }

  interface FrontOrderList {
    id?: string;
    categoryId?: string;
    /** 订单名称 */
    orderName?: string;
    creatorId?: string;
    creatorName?: string;
    companyName?: string;
    userId?: string;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 招聘人数类型 10 固定人数  20 范围人数 */
    hireType?: number;
    /** 固定人数 或 范围人数的起始人数 */
    hireNumber?: number;
    /** 工作性质 10 两班倒 20 仅白班 */
    workNature?: number;
    /** 范围人数的截止人数 */
    hireEndNumber?: number;
    /** 起始年龄 */
    ageStart?: number;
    /** 截止年龄 */
    ageEnd?: number;
    /** 性别要求 0 不限 10 仅限男士 20 仅限女士 30 男女设定 */
    sexRequirement?: number;
    /** 男性人数 */
    manNumber?: number;
    /** 女性人数 */
    womanNumber?: number;
    /** 学历要求 0 不限 10 小学 20 初中 30 高中 40 专科 50 大学 60 硕士 70 博士 及以上 */
    education?: number;
    /** 服务费 */
    service?: number;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 浏览量 */
    viewCount?: number;
    creationTime?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 申请合作企业 */
    companyCount?: number;
    isRecommend?: boolean;
    userName?: string;
    lastModificationTime?: string;
    /** 设置信息 */
    searchSettings?: SearchSettingInfo[];
    /** 返费信息 */
    orderSupplierRefundInfo?: OrderSupplierRefundInfo[];
    /** 审核通过时间 */
    approvalTime?: string;
    /** 运费模式 10小时工返费 20一次性招聘费 30 连续性管理费 */
    rebateMode?: number;
    /** 供应商利润 */
    supplierProfit?: number;
    /** 10 一次性利润 20 xx元/每人/每小时 30 xx元/每人/每月 */
    supplierProfitUint?: number;
    rebateTime?: number;
    addressDetail?: string;
  }

  interface FrontOrderListInput {
    pageModel?: Pagination;
    searchName?: string;
    /** 工作性质 10 两班倒 20 仅白班 */
    workNature?: number;
    provinceCode?: number;
    searchSettings?: string[];
    /** 用户Id */
    userId?: string;
    categoryId?: string;
    rebateMode?: number;
    hireNumberBegin?: number;
    hireNumberEnd?: number;
  }

  interface FrontOrderListPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: FrontOrderList[];
  }

  interface GeAlltCompanyUsersInput {
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 查询条件：客户名称 */
    queryCondition?: string;
    /** 适用区域 */
    provinceCodes?: number[];
  }

  interface GetAdvertisePriceInfosInput {
    /** 排序信息：默认按广告类型：Type、广告位置：Position升序 */
    orderInput?: OrderInput[];
  }

  interface GetAreaListInput {
    /** 1省 2市 3区 4镇 */
    layer?: number;
    /** 父级编码 */
    parentCode?: number;
  }

  interface GetBackClientUsersInput {
    pageModel?: Pagination;
    /** 账户是否锁住（是否禁用） */
    isLocked?: boolean;
    /** 查询条件：名称/账号 */
    queryCondition?: string;
  }

  interface GetCategoriesInput {
    /** 类型：0产品类别，1资讯类别 */
    type?: number;
    /** 排序信息：默认按Sequence升序 */
    orderInput?: OrderInput[];
  }

  interface GetCommentsForManageInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
    /** 评论起始日期 */
    commentStartTime?: string;
    /** 评论截止日期 */
    commentEndTime?: string;
    /** 查询条件：买家名称/卖家名称/产品名称 */
    queryCondition?: string;
  }

  interface GetCommentsForProductInput {
    pageModel?: Pagination;
    /** 产品Id */
    productId?: string;
  }

  interface GetCompanyUsersInput {
    pageModel?: Pagination;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 查询条件：客户名称 */
    queryCondition?: string;
    /** 适用区域 */
    provinceCodes?: number[];
  }

  interface GetCooperationApplyInput {
    pageModel?: Pagination;
    /** 10 待受理 20 受理中 30 已完成 -10 拒绝合作 */
    status?: number;
    /** 联系方式，联系人 类别名称 */
    searchKey?: string;
    /** 是否是我的申请 */
    isMy?: boolean;
  }

  interface GetFeatureListResultDto {
    groups?: FeatureGroupDto[];
  }

  interface GetFrontConsultListInput {
    pageModel?: Pagination;
    consultName?: string;
    provinceCode?: number;
    userId?: string;
  }

  interface GetFrontHeadHunterListInput {
    pageModel?: Pagination;
    jobName?: string;
    provinceCode?: number;
    userId?: string;
  }

  interface GetFrontResourceList {
    id?: string;
    userId?: string;
    categoryId?: string;
    title?: string;
    /** 所在省区域码 */
    provinceCode?: number;
    /** 所在省 */
    provinceName?: string;
    /** 展示时间 */
    showTime?: string;
    viewCount?: number;
    tags?: TagInfo[];
    viewUsers?: ViewUserInfo[];
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    status?: number;
    lastModificationTime?: string;
    /** 被动方id */
    visitForUserId?: string;
    /** 公司名称 */
    companyName?: string;
    /** 介绍 */
    intros?: ResourceIntro[];
    /** 所在城市 */
    cities?: CityInfo[];
    /** 意向输送城市 */
    intendedDeliveryCities?: CityInfo[];
    /** 合作费 */
    cooperationFee?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    /** 资源数量 */
    resourceCount?: number;
    creationTime?: string;
  }

  interface GetFrontResourceListInput {
    pageModel?: Pagination;
    searchName?: string;
    tags?: string[];
    /** 用户Id */
    userId?: string;
    /** 省Id */
    provinceCode?: number;
    resourceCountBegin?: number;
    resourceCountEnd?: number;
  }

  interface GetFrontResourceListPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: GetFrontResourceList[];
  }

  interface GetFrontTrainingListInput {
    pageModel?: Pagination;
    title?: string;
    provinceCode?: number;
    userId?: string;
  }

  interface GetHeadlineInformationInput {
    /** 排序信息：默认按广告排序AdSequence升序 */
    orderInput?: OrderInput[];
  }

  interface GetHelpQuestionListInput {
    pageModel?: Pagination;
    helpTypeSettingId?: string;
    title?: string;
    status?: number;
  }

  interface GetHotProductAdvertiseInput {
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetInformationAdvertiseByCategoryInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    userId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
    /** 0:报名中  10 进行中 20 已结束 */
    informationApplyStatus?: number;
    provinceCode?: number;
  }

  interface GetInformationAdvertisesForManageInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：资讯标题/发布单位 */
    queryCondition?: string;
  }

  interface GetInformationForManageInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 状态：10通过（显示中），-20已下架 */
    status?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 发布起始时间 */
    publishStartDate?: string;
    /** 发布止时间 */
    publishEndDate?: string;
    /** 查询条件：资讯标题/发布单位 */
    queryCondition?: string;
    /** 适用区域 */
    provinceCodes?: number[];
    /** 是否支持广告 */
    isSupportAdvertise?: boolean;
  }

  interface GetInformationWaitForCheckInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 状态：0提交待审核，-10驳回 */
    status?: number;
    /** 发布起始时间 */
    publishStartDate?: string;
    /** 发布止时间 */
    publishEndDate?: string;
    /** 查询条件：标题/资讯来源 */
    queryCondition?: string;
  }

  interface GetMessageInput {
    pageModel?: Pagination;
    /** 是否已读 */
    isRead?: boolean;
  }

  interface GetMyConsultListInput {
    pageModel?: Pagination;
    status?: number;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  }

  interface GetMyHeadHunterListInput {
    pageModel?: Pagination;
    status?: number;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  }

  interface GetMyInformationAttentionsInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：标题/服务商名称 */
    queryCondition?: string;
  }

  interface GetMyInformationInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：标题/单位 */
    queryCondition?: string;
  }

  interface GetMyProductAttentionsInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetMyProductsInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetMyPurchasesInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 产品名称 */
    productName?: string;
  }

  interface GetMyResourceListInput {
    pageModel?: Pagination;
    status?: number;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
    title?: string;
  }

  interface GetMySellsInput {
    pageModel?: Pagination;
    /** 查询条件：买家名称/买家联系人/买家联系电话 */
    purchaserInfo?: string;
  }

  interface GetMyTrainingListInput {
    pageModel?: Pagination;
    status?: number;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  }

  interface GetParkOrHRInfoByUserInput {
    categoryId?: string;
    userId?: string;
  }

  interface GetPermissionListResultDto {
    entityDisplayName?: string;
    groups?: PermissionGroupDto[];
  }

  interface GetPersonalUsersInput {
    pageModel?: Pagination;
    /** 查询条件：名称/手机号 */
    queryCondition?: string;
  }

  interface GetPlatFormPurchasesInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 购买起始日期 */
    purchaseMinDate?: string;
    /** 购买截止日期 */
    purchaseMaxDate?: string;
    /** 成交起始日期 */
    fixtureMinDate?: string;
    /** 成交截止日期 */
    fixtureMaxDate?: string;
    /** 成交最小金额 */
    minAmount?: number;
    /** 成交最大金额 */
    maxAmount?: number;
    /** 查询条件：买家名称/卖家名称/产品名称 */
    queryCondition?: string;
  }

  interface GetProductAdvertiseByCategoryInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
    tags?: string[];
    provinceCode?: number;
  }

  interface GetProductAdvertisesForManageInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetProductByCategoryInput {
    pageModel?: Pagination;
    categoryId?: string;
    userId?: string;
    provinceCode?: number;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
    tags?: string[];
  }

  interface GetProductForHomePageInput {
    pageModel?: Pagination;
    categoryId?: string;
    userId?: string;
  }

  interface GetProductsForManageInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 状态：10通过（显示中），-20已下架 */
    status?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 发布起始时间 */
    publishStartDate?: string;
    /** 发布止时间 */
    publishEndDate?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetProductsWaitForCheckInput {
    pageModel?: Pagination;
    /** 类别Id */
    categoryId?: string;
    /** 状态：0提交待审核，-10驳回 */
    status?: number;
    /** 发布起始时间 */
    publishStartDate?: string;
    /** 发布止时间 */
    publishEndDate?: string;
    /** 查询条件：产品名称/服务商名称 */
    queryCondition?: string;
  }

  interface GetRewardPercentagesInput {
    /** 排序信息：默认按Up主等级：UpLevel升序 */
    orderInput?: OrderInput[];
  }

  interface GetRolesInput {
    pageModel?: Pagination;
    /** 查询条件：角色名称 */
    queryCondition?: string;
  }

  interface GetSearchSettingList {
    id?: string;
    /** 所属类别 10园区 20人资企业 */
    belongType?: number;
    /** 名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 状态 1显示 0禁用 */
    status?: boolean;
    /** 被点击次数 */
    clickCount?: number;
    src?: string;
  }

  interface GetSearchSettingListInput {
    pageModel?: Pagination;
    /** 搜素管理 10热搜词 20服务类型 30工种 40园区类型 50资讯活动类型 60政策颁布机构 70区域管理 80产品类型 90需求类型 100需求范围
110 员工福利 120行业类型 */
    searchType: number;
    /** 所属类别 10园区 20人资企业 */
    belongType?: number;
    /** 名称 */
    name?: string;
  }

  interface GetSearchSettingListPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: GetSearchSettingList[];
  }

  interface GetTagsInput {
    /** 类型：0产品标签，1资讯标签，3快捷评论标签 */
    type?: number;
    categoryType?: number;
    /** 排序信息：默认按Sequence升序 */
    orderInput?: OrderInput[];
  }

  interface GetTencentUserInput {
    pageModel?: Pagination;
    /** 腾讯的聊天USERID */
    tencentUserId?: string;
    userName?: string;
  }

  interface GetTypeSearchSettingList {
    id?: string;
    /** 名称 */
    name?: string;
    /** 图片 */
    src?: string;
  }

  interface GetTypeSearchSettingListInput {
    /** 搜素管理 10热搜词 20服务类型 30工种 40园区类型 50资讯活动类型 60政策颁布机构 70区域管理 80产品类型 90需求类型 100需求范围
110 员工福利 120行业类型 130 猎头 140 咨询类别 150 帮助类型 */
    searchType: number;
    /** 所属类别 10园区 20人资企业 */
    belongType?: number;
  }

  interface GetUserAccountDto {
    /** 用户Id */
    userId?: string;
    /** 收款账号 */
    account?: string;
    /** 账号支行 */
    bankBranch?: string;
  }

  interface GetUserAttestationsInput {
    pageModel?: Pagination;
    /** 认证类型：1为企业，2为个人 */
    type?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
    /** 注册起始日期 */
    registStartDate?: string;
    /** 注册截止日期 */
    registEndDate?: string;
    /** 提交认证起始时间 */
    attestateStartDate?: string;
    /** 提交认证截止时间 */
    attestateEndDate?: string;
    /** 查询条件：客户名称/联系人/手机号 */
    queryCondition?: string;
  }

  interface GetUserWithdrawInput {
    pageModel?: Pagination;
    /** 交易状态 已驳回 -10 打款中 10 已完成 20 */
    status?: number;
    /** 申请起始日期 */
    applyStartDate?: string;
    /** 申请截止日期 */
    applyEndDate?: string;
    /** 提现最小金额 */
    minAmount?: number;
    /** 提现最大金额 */
    maxAmount?: number;
    /** 账户名称/提现账号 */
    keyWords?: string;
    isMy?: boolean;
  }

  interface HeadHunterDto {
    id?: string;
    categoryId?: string;
    userId?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 职位名称Id */
    jobSettingId?: string;
    /** 职位名称Id */
    jobSettingName?: string;
    /** 详细地址 */
    address?: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 所属行业ID */
    industrySettingId?: string;
    /** 所属行业名称 */
    industrySettingName?: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始薪资 */
    startMonthlySalary?: number;
    /** 截止起始薪资 */
    endMonthlySalary?: number;
    /** 工作介绍 */
    jobIntroduction?: string;
    /** 10 固定 20 面议 */
    salaryType?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    viewCount?: number;
    attentionCount?: number;
    companyName?: string;
    userStatus?: number;
  }

  interface HeadHunterDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: HeadHunterDto[];
  }

  interface HeadHunterListInput {
    pageModel?: Pagination;
    /** 昵称 */
    jobName?: string;
    status?: number;
    startDate?: string;
    endDate?: string;
  }

  interface HeadHunterRecommendInput {
    id?: string;
    isRecommend?: boolean;
  }

  interface HeadHunterViewInput {
    /** 订单浏览Id */
    id?: string;
    /** 订单Id */
    headHunterId?: string;
  }

  interface HeadlineInformation {
    /** 资讯Id */
    informationId?: string;
    /** 标题 */
    title?: string;
  }

  interface HelpQuestionDto {
    id?: string;
    title?: string;
    helpTypeSettingId?: string;
    helpTypeSettingName?: string;
    status?: number;
    creationTime?: string;
    /** 详情信息 */
    intros?: HelpQuestionIntroInfo[];
  }

  interface HelpQuestionDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: HelpQuestionDto[];
  }

  interface HelpQuestionIntroInfo {
    /** 类型：0为文本，1为图片，2为视频；默认为文本 */
    type?: number;
    /** 文本内容 */
    content?: string;
    /** 图片/视频路径 */
    path?: string;
    /** 排序 */
    sequence?: number;
  }

  interface HotInformationAdvertiseInfo {
    /** 资讯Id */
    id?: string;
    /** 资讯Id */
    informationId?: string;
    /** 用户Id */
    userId?: string;
    /** 标题 */
    title?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 头部Icon */
    headIcon?: string;
    /** 排序 */
    sequence?: number;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 是否需要报名 */
    needApply?: boolean;
    /** 报名状态：0报名中，10进行中，20已结束 */
    applyStatus?: number;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 客户Id */
    customerId?: string;
    /** 举办/发布单位 */
    unit?: string;
    /** 浏览次数 */
    viewCount?: number;
    /** 创建时间 */
    creationTime?: string;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    provinceCode?: number;
  }

  interface HotInformationAdvertiseInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: HotInformationAdvertiseInfo[];
  }

  interface HotProductAdvertiseInfo {
    /** 产品广告Id */
    id?: string;
    /** 产品Id */
    productId?: string;
    /** 用户Id */
    userId?: string;
    /** 产品名称 */
    productName?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 头部Icon */
    headIcon?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 排序 */
    sequence?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 成交数量 */
    transactionCount?: number;
    /** 浏览数 */
    viewCount?: number;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 联系人：类型为个人时联系人为申请时姓名 */
    contacter?: string;
    /** 付费额 */
    fee?: number;
    /** 好评 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 评星数 */
    starCount?: number;
    /** 评论数 */
    commentCount?: number;
    /** 联系电话 */
    contacterPhone?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 是否客户端自发广告 */
    isFromClient?: boolean;
    areaCode?: number;
  }

  interface HotProductAdvertiseInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: HotProductAdvertiseInfo[];
  }

  interface HRAreaDto {
    /** 省 */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区 */
    areaCode?: number;
    /** 区 */
    areaName?: string;
    /** 排序 */
    sort?: number;
  }

  interface IanaTimeZone {
    timeZoneName?: string;
  }

  interface IdentityModelTokenCacheItem {
    accessToken?: string;
    expiresIn?: number;
    creationTime?: string;
    refreshToken?: string;
  }

  interface IdentityRoleCreateDto {
    extraProperties?: Record<string, any>;
    name: string;
    isDefault?: boolean;
    isPublic?: boolean;
    sequence?: number;
    note?: string;
    roleType?: number;
    isLeader?: boolean;
  }

  interface IdentityRoleDto {
    extraProperties?: Record<string, any>;
    id?: string;
    name?: string;
    isDefault?: boolean;
    isStatic?: boolean;
    isPublic?: boolean;
    concurrencyStamp?: string;
    sequence?: number;
    isEnable?: boolean;
    note?: string;
    roleType?: number;
  }

  interface IdentityRoleDtoListResultDto {
    items?: IdentityRoleDto[];
  }

  interface IdentityRoleDtoPagedResultDto {
    items?: IdentityRoleDto[];
    totalCount?: number;
  }

  interface IdentityRoleListInput {
    pageModel?: Pagination;
    name?: string;
    type?: number;
    roleIds?: string[];
  }

  interface IdentityRoleUpdateDto {
    extraProperties?: Record<string, any>;
    name: string;
    isDefault?: boolean;
    isPublic?: boolean;
    concurrencyStamp?: string;
    sequence?: number;
    isEnable?: boolean;
    roleType?: number;
    isLeader?: boolean;
    note?: string;
    isSetEnable?: boolean;
  }

  interface IdentityUserCreateDto {
    extraProperties?: Record<string, any>;
    userName: string;
    name?: string;
    surname?: string;
    email?: string;
    phoneNumber?: string;
    lockoutEnabled?: boolean;
    sex?: number;
    roleNames?: string[];
    password?: string;
    versionId?: string;
    clientId?: string;
  }

  interface IdentityUserDto {
    extraProperties?: Record<string, any>;
    id?: string;
    creationTime?: string;
    creatorId?: string;
    lastModificationTime?: string;
    lastModifierId?: string;
    isDeleted?: boolean;
    deleterId?: string;
    deletionTime?: string;
    tenantId?: string;
    userName?: string;
    name?: string;
    surname?: string;
    email?: string;
    sex?: number;
    emailConfirmed?: boolean;
    phoneNumber?: string;
    phoneNumberConfirmed?: boolean;
    lockoutEnabled?: boolean;
    lockoutEnd?: string;
    concurrencyStamp?: string;
    clientId?: string;
    roles?: IdentityRoleDto[];
  }

  interface IdentityUserDtoPagedResultDto {
    items?: IdentityUserDto[];
    totalCount?: number;
  }

  interface IdentityUserDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: IdentityUserDto[];
  }

  interface IdentityUserUpdateDto {
    extraProperties?: Record<string, any>;
    userName: string;
    name?: string;
    surname?: string;
    email?: string;
    phoneNumber?: string;
    lockoutEnabled?: boolean;
    sex?: number;
    roleNames?: string[];
    password?: string;
    concurrencyStamp?: string;
  }

  interface IdentityUserUpdateRolesDto {
    roleNames: string[];
  }

  interface InformationAdvertiseDetail {
    /** 资讯广告Id */
    id?: string;
    /** 资讯Id */
    informationId?: string;
    /** 资讯标题 */
    title?: string;
    /** 服务商 */
    serveName?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 联系人：类型为个人时联系人为申请时姓名 */
    contacter?: string;
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
  }

  interface InformationAdvertiseForManage {
    /** 资讯广告Id */
    id?: string;
    /** 资讯Id */
    informationId?: string;
    /** 资讯标题 */
    title?: string;
    /** 服务商 */
    serveName?: string;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 发布人 */
    publisher?: string;
    /** 排序 */
    sequence?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 是否客户端自发广告 */
    isFromClient?: boolean;
  }

  interface InformationAdvertiseForManagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: InformationAdvertiseForManage[];
  }

  interface InformationCheckInput {
    /** 资讯Id */
    id?: string;
    /** 审核状态：10通过，-10驳回 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
  }

  interface InformationDetail {
    /** 资讯Id */
    id?: string;
    /** 标题 */
    title?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 备注 */
    remark?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 是否原创 */
    isOriginal?: boolean;
    /** 转载链接 */
    repostLink?: string;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 联系电话 */
    contactPhone?: string;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 客户Id */
    customerId?: string;
    /** 举办/发布单位 */
    unit?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 详情信息 */
    intros?: IntroInfo[];
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
    /** 是否自己创建 */
    isOwnerCreate?: boolean;
  }

  interface InformationDetailInfo {
    /** 资讯Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 标题 */
    title?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 来源 */
    serveName?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 是否原创 */
    isOriginal?: boolean;
    /** 转载链接 */
    repostLink?: string;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 报名状态：0报名中，10进行中，20已结束 */
    applyStatus?: number;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 详情信息 */
    intros?: IntroInfo[];
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
    /** 客户Id */
    customerId?: string;
    /** 举办/发布单位 */
    unit?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 创建时间 */
    creationTime?: string;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 赏 */
    rewardAmount?: number;
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 排序 */
    sequence?: number;
    /** 打赏信息 */
    rewards?: RewardInfo[];
    /** 是否我的关注 */
    isMyAttention?: boolean;
    /** 是否我已赞 */
    isMyThumbsUp?: boolean;
    /** 点赞Id */
    thumbsUpId?: string;
    /** 是否自己创建 */
    isOwnerCreate?: boolean;
  }

  interface InformationForHomePageDto {
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 资讯类别下的子信息 */
    informationForHomePageItems?: InformationForHomePageItem[];
  }

  interface InformationForHomePageItem {
    /** 资讯Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 标题 */
    title?: string;
    /** 排序 */
    sequence?: number;
    /** 发布时间 */
    publishTime?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 最后更新日期 */
    lastModificationTime?: string;
  }

  interface InformationForManage {
    /** 资讯Id */
    id?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 资讯标题 */
    title?: string;
    /** 资讯类别名 */
    categoryName?: string;
    categoryId?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：10通过（显示中），-20已下架 */
    status?: number;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 浏览次数 */
    viewCount?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
  }

  interface InformationForManagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: InformationForManage[];
  }

  interface InformationInfo {
    /** 资讯Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 标题 */
    title?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 来源 */
    serveName?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;
    /** 联系电话 */
    contactPhone?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 是否原创 */
    isOriginal?: boolean;
    /** 转载链接 */
    repostLink?: string;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 报名状态：0报名中，10进行中，20已结束 */
    applyStatus?: number;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 详情信息 */
    intros?: IntroInfo[];
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
    /** 广告信息 */
    advertises?: AdvertiseInfo[];
    /** 客户Id */
    customerId?: string;
    /** 举办/发布单位 */
    unit?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 创建时间 */
    creationTime?: string;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 赏 */
    rewardAmount?: number;
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 排序 */
    sequence?: number;
    /** 打赏信息 */
    rewards?: RewardInfo[];
    /** 是否我的关注 */
    isMyAttention?: boolean;
    /** 是否我已赞 */
    isMyThumbsUp?: boolean;
    /** 是否自己创建 */
    isOwnerCreate?: boolean;
    /** 是否支持广告 */
    isSupportAdvertise?: boolean;
  }

  interface InformationInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: InformationInfo[];
  }

  interface InformationRewardInput {
    /** 被打赏人Id */
    userId?: string;
    /** 资讯Id */
    informationId?: string;
    /** 打赏金额 */
    amount?: number;
    /** 打赏分成金额 */
    shareAmount?: number;
  }

  interface InformationThumbsUpInput {
    /** 产品点赞Id */
    id?: string;
    /** 产品评论Id */
    informationId?: string;
    /** 0 去掉点赞 1 点赞 */
    status?: number;
  }

  interface InformationViewInput {
    /** 产品点赞Id */
    id?: string;
    /** 产品评论Id */
    informationId?: string;
  }

  interface InformationWaitForCheck {
    /** 资讯Id */
    id?: string;
    /** 标题 */
    title?: string;
    /** 类别Id */
    categoryId?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：0提交待审核，-10驳回 */
    status?: number;
    /** 来源 */
    serveName?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 省Code */
    provinceCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市Code */
    cityCode?: number;
    /** 市 */
    cityName?: string;
    /** 区域Code */
    areaCode?: number;
    /** 区域 */
    areaName?: string;
    /** 区域 */
    fullArea?: string;
    /** 详细举办地址 */
    address?: string;
    /** 地址 */
    fullAddress?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
  }

  interface InformationWaitForCheckPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: InformationWaitForCheck[];
  }

  interface InitSettingInfo {
    /** 平台自营服务商名称 */
    selfSupportingServiceName?: string;
    /** 平台服务电话 */
    platServicePhone?: string;
  }

  interface IntroInfo {
    /** 类型：0为文本，1为图片，2为视频；默认为文本 */
    type?: number;
    /** 文本内容 */
    content?: string;
    /** 图片/视频路径 */
    path?: string;
    /** 排序 */
    sequence?: number;
  }

  interface IStringValueType {
    name?: string;
    properties?: Record<string, any>;
    validator?: IValueValidator;
  }

  interface IValueValidator {
    name?: string;
    properties?: Record<string, any>;
  }

  interface KeyInput {
    id?: string;
  }

  interface KeyPageInput {
    pageModel?: Pagination;
    id?: string;
  }

  interface LanguageInfo {
    cultureName?: string;
    uiCultureName?: string;
    displayName?: string;
    flagIcon?: string;
  }

  interface LicenseOcrModel {
    name?: string;
    cardNum?: string;
    address?: string;
    type?: string;
    dateFrom?: string;
    dateTo?: string;
    societyCode?: string;
    registerMoney?: string;
    businessRange?: string;
    legalPerson?: string;
  }

  interface ListOrderStatus {
    ids?: string[];
    status?: number;
  }

  interface LocalizableStringDto {
    name?: string;
    resource?: string;
  }

  interface MessageInfo {
    /** 消息Id */
    id?: string;
    /** 消息内容 */
    messageContent?: string;
    /** 消息发送时间 */
    creationTime?: string;
    /** 是否已读 */
    isRead?: boolean;
  }

  interface MessageInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MessageInfo[];
  }

  interface MethodParameterApiDescriptionModel {
    name?: string;
    typeAsString?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
  }

  interface ModuleApiDescriptionModel {
    rootPath?: string;
    remoteServiceName?: string;
    controllers?: Record<string, any>;
  }

  interface ModuleButtonDto {
    id?: string;
    moduleId?: string;
    parentId?: string;
    icon?: string;
    enCode?: string;
    name?: string;
    actionAddress?: string;
    sortCode?: number;
    buttonType?: number;
    hasCheck?: boolean;
  }

  interface ModuleColumnDto {
    id?: string;
    moduleId?: string;
    parentId?: string;
    enCode?: string;
    name?: string;
    sortCode?: number;
    description?: string;
    width?: number;
    hasCheck?: boolean;
    apiName?: string;
    isShow?: boolean;
    realColumn?: string;
  }

  interface ModuleDto {
    id?: string;
    description?: string;
    sortCode?: number;
    enabledMark?: number;
    parentId?: string;
    name?: string;
    isCache?: boolean;
    path?: string;
    viewAddress?: string;
    levelNum?: number;
    enCode?: string;
    icon?: string;
    hasCheck?: boolean;
    isMenu?: number;
    parentModuleName?: string;
  }

  interface ModuleExtensionDto {
    entities?: Record<string, any>;
    configuration?: Record<string, any>;
  }

  interface ModuleTypeInfo {
    moduleType?: number;
    moduleId?: string;
  }

  interface MultiTenancyInfoDto {
    isEnabled?: boolean;
  }

  interface MyInformationAttentionInfo {
    /** 资讯Id */
    informationId?: string;
    /** 类别Id */
    categoryId?: string;
    /** 标题 */
    title?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 来源 */
    serveName?: string;
    /** 省 */
    provinceName?: string;
    /** 详细举办地址 */
    address?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 是否需要报名 */
    needApply?: boolean;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 实行省份信息 */
    provinces?: ProvinceInfo[];
    /** 举办/发布单位 */
    unit?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 报名状态：0报名中，10进行中，20已结束 */
    applyStatus?: number;
  }

  interface MyInformationAttentionInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MyInformationAttentionInfo[];
  }

  interface MyModuleDto {
    id?: string;
    description?: string;
    sortCode?: number;
    enabledMark?: number;
    parentId?: string;
    name?: string;
    isCache?: boolean;
    path?: string;
    viewAddress?: string;
    levelNum?: number;
    enCode?: string;
    icon?: string;
    hasCheck?: boolean;
    isMenu?: number;
    parentModuleName?: string;
    sequence?: number;
  }

  interface MyOrderListInput {
    pageModel?: Pagination;
    status?: number;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
    orderName?: string;
  }

  interface MyProductAttentionInfo {
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 产品类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 标签信息 */
    tags?: TagInfo[];
    /** 成交数量 */
    transactionCount?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 评星数 */
    starCount?: number;
    /** 服务商 */
    serveName?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 联系电话 */
    contacterPhone?: string;
  }

  interface MyProductAttentionInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MyProductAttentionInfo[];
  }

  interface MyProductInfo {
    /** 产品Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 产品名称 */
    name?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 详情信息 */
    priceVersions?: PriceVersionInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 成交数量 */
    transactionCount?: number;
    /** 浏览数 */
    browseCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 评星数 */
    starCount?: number;
    /** 广告信息 */
    advertises?: AdvertiseInfo[];
    /** 备注 */
    remark?: string;
    /** 类别Id */
    categoryId?: string;
  }

  interface MyProductInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MyProductInfo[];
  }

  interface MyPurchaseDto {
    /** 产品购买Id */
    id?: string;
    /** 类别Id */
    categoryId?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 版本名 */
    versionName?: string;
    /** 收费方式 */
    chargeWay?: string;
    /** 产品数量 */
    count?: number;
    /** 产品单价 */
    unitPrice?: number;
    /** 成交额 */
    amount?: number;
    /** 卖家名称 */
    seller?: string;
    /** 购买日期 */
    purchaseDate?: string;
    comment?: PurchasedCommentInfo;
    refund?: RefundInfo;
    /** 状态：0待确认验收，10待评价，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
  }

  interface MyPurchaseDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MyPurchaseDto[];
  }

  interface MyRecentInformationDto {
    /** 资讯Id */
    id?: string;
    /** 标题 */
    title?: string;
    /** 资讯类别名 */
    categoryName?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 浏览次数 */
    viewCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 赏 */
    rewardAmount?: number;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
  }

  interface MyRecentProductDto {
    /** 产品Id */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 详情信息 */
    priceVersions?: PriceVersionInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 浏览数 */
    browseCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 评星数 */
    starCount?: number;
  }

  interface MyRecentPurchaseDto {
    /** 产品购买Id */
    id?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 版本名 */
    versionName?: string;
    /** 收费方式 */
    chargeWay?: string;
    /** 产品数量 */
    count?: number;
    /** 产品单价 */
    unitPrice?: number;
    /** 成交额 */
    amount?: number;
    /** 卖家名称 */
    seller?: string;
    /** 购买日期 */
    purchaseDate?: string;
    comment?: PurchasedCommentInfo;
    /** 状态：0待确认验收，10待评价，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
  }

  interface MySellDto {
    /** 产品购买Id */
    id?: string;
    /** 类别Id */
    categoryId?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 买家Id */
    purchaserId?: string;
    /** 买家名称 */
    purchaser?: string;
    /** 联系人（买家） */
    purchaseContacter?: string;
    /** 联系电话（买家） */
    purchaseContacterPhone?: string;
    /** 产品单价 */
    unitPrice?: number;
    /** 成交量 */
    count?: number;
    /** 成交额 */
    amount?: number;
    /** 状态：0待确认验收，10待评价，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
    /** 购买日期 */
    purchaseDate?: string;
    /** 成交日期（确认验收时间） */
    fixtureDate?: string;
    comment?: PurchasedCommentInfo;
    refund?: RefundInfo;
    /** 版本名 */
    versionName?: string;
    /** 收费方式 */
    chargeWay?: string;
  }

  interface MySellDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: MySellDto[];
  }

  interface NameValue {
    name?: string;
    value?: string;
  }

  interface ObjectExtensionsDto {
    modules?: Record<string, any>;
    enums?: Record<string, any>;
  }

  interface OrderInfoDto {
    id?: string;
    categoryId?: string;
    /** 订单名称 */
    orderName?: string;
    /** 企业地址 */
    addressDetail?: string;
    /** 用户名片名称 */
    userName?: string;
    creatorId?: string;
    creatorName?: string;
    companyName?: string;
    userId?: string;
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 招聘人数类型 10 固定人数  20 范围人数 */
    hireType?: number;
    /** 固定人数 或 范围人数的起始人数 */
    hireNumber?: number;
    /** 工作性质 10 两班倒 20 仅白班 */
    workNature?: number;
    /** 范围人数的截止人数 */
    hireEndNumber?: number;
    /** 起始年龄 */
    ageStart?: number;
    /** 截止年龄 */
    ageEnd?: number;
    /** 性别要求 0 不限 10 仅限男士 20 仅限女士 30 男女设定 */
    sexRequirement?: number;
    /** 男性人数 */
    manNumber?: number;
    /** 女性人数 */
    womanNumber?: number;
    /** 学历要求 0 不限 10 小学 20 初中 30 高中 40 专科 50 大学 60 硕士 70 博士 及以上 */
    education?: number;
    /** 服务费 */
    service?: number;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 浏览量 */
    viewCount?: number;
    attentionCount?: number;
    creationTime?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 申请合作企业 */
    companyCount?: number;
    isRecommend?: boolean;
    lastModificationTime?: string;
    /** 设置信息 */
    searchSettings?: SearchSettingInfo[];
    orderSupplierRefundInfo?: OrderSupplierRefundInfo[];
    /** 运费模式 10小时工返费 20一次性招聘费 30 连续性管理费 */
    rebateMode?: number;
    /** 供应商利润 */
    supplierProfit?: number;
    /** 10 一次性利润 20 xx元/每人/每小时 30 xx元/每人/每月 */
    supplierProfitUint?: number;
    rebateTime?: number;
    /** 白班时间 */
    dayStartTime?: string;
    /** 白班截止时间 */
    dayEndTime?: string;
    /** 晚班开始时间 */
    nightStartTime?: string;
    /** 晚班截止时间 */
    nightEndTime?: string;
    /** 工资发放类型 10 每月发放 20 每周发放 30 每日发放 */
    salaryType?: number;
    /** 对外联系方式 10 平台 20 手动输入 */
    externalcontactType?: number;
    /** 对外联系电话 */
    externalcontactNumber?: string;
    /** 员工福利 */
    searchSettingId?: string[];
    /** 企业风采 */
    src?: string[];
    /** 公司座机 */
    companyLandline?: string;
    /** 接车电话 */
    carNumber?: string;
    /** 工作介绍 */
    jobIntroduction?: string;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 我是否已接单 */
    isMyTaken?: boolean;
    /** 我是否已接单 */
    isAttention?: boolean;
  }

  interface OrderInput {
    property?: string;
    order?: OrderTypeEnum;
  }

  interface OrderListDto {
    id?: string;
    categoryId?: string;
    /** 订单名称 */
    orderName?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 设置信息 */
    searchSettings?: SearchSettingInfo[];
    /** 订单关闭 */
    isOrderClosed?: boolean;
    rebateRemark?: string;
    creationTime?: string;
    lastModificationTime?: string;
    userId?: string;
    /** 返费信息 */
    orderSupplierRefundInfo?: OrderSupplierRefundInfo[];
    /** 起始综合月薪 */
    startMonthlySalary?: number;
    /** 截止综合月薪 */
    endMonthlySalary?: number;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 招聘人数类型 10 固定人数  20 范围人数 */
    hireType?: number;
    /** 固定人数 或 范围人数的起始人数 */
    hireNumber?: number;
    /** 工作性质 10 两班倒 20 仅白班 */
    workNature?: number;
    /** 范围人数的截止人数 */
    hireEndNumber?: number;
    /** 起始年龄 */
    ageStart?: number;
    /** 截止年龄 */
    ageEnd?: number;
    /** 性别要求 0 不限 10 仅限男士 20 仅限女士 30 男女设定 */
    sexRequirement?: number;
    /** 男性人数 */
    manNumber?: number;
    /** 女性人数 */
    womanNumber?: number;
    /** 学历要求 0 不限 10 小学 20 初中 30 高中 40 专科 50 大学 60 硕士 70 博士 及以上 */
    education?: number;
    /** 服务费 */
    service?: number;
    /** 备注 */
    remark?: string;
    /** 浏览量 */
    viewCount?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 申请合作企业 */
    companyCount?: number;
    isRecommend?: boolean;
    userName?: string;
    companyName?: string;
    addressDetail?: string;
  }

  interface OrderListDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: OrderListDto[];
  }

  interface OrderListInput {
    pageModel?: Pagination;
    /** 昵称 */
    name?: string;
    /** 查询条件：订单名称/用户ID/订单编号 */
    queryCondition?: string;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
    status?: number;
    categoryId?: string;
  }

  interface OrderSettingDto {
    settingId?: string;
    sequence?: number;
  }

  interface OrderStatusInput {
    id?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
  }

  interface OrderSupplierRefundInfo {
    /** 运费模式 10小时工返费 20一次性招聘费 30 连续性管理费 */
    rebateMode?: number;
    /** 供应商利润 */
    supplierProfit?: number;
    /** 运费时长 0连续合作 其他数值就代表时长月份 */
    rebateTime?: number;
    /** 10 一次性利润 20 xx元/每人/每小时 30 xx元/每人/每月 */
    supplierProfitUint?: number;
  }

  type OrderTypeEnum = 0 | 1;

  interface OrderViewInput {
    /** 订单浏览Id */
    id?: string;
    /** 订单Id */
    orderId?: string;
  }

  interface OssSTSReponse {
    expiration?: string;
    ossAccessSecret?: string;
    ossAccessKeyId?: string;
    securityToken?: string;
    requestId?: string;
  }

  interface PageInput {
    pageModel?: Pagination;
  }

  interface Pagination {
    rows?: number;
    page?: number;
    orderInput?: OrderInput[];
    totalCount?: number;
    totalPage?: number;
  }

  interface ParameterApiDescriptionModel {
    nameOnMethod?: string;
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
    constraintTypes?: string[];
    bindingSourceId?: string;
    descriptorName?: string;
  }

  interface ParkHRForHomePageInput {
    pageModel?: Pagination;
    categoryId?: string;
    cityName?: string;
    parkOrHRName?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 园区/企业级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    /** 园区服务类型 */
    parkServiceId?: string[];
    /** 企业服务类型 */
    personServiceId?: string[];
    /** 工种 */
    workOfTypeId?: string[];
    userId?: string;
  }

  interface ParkHRInput {
    pageModel?: Pagination;
    categoryId?: string;
    userId?: string;
    status?: number;
    parkOrHRName?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 园区/企业级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    /** 园区服务类型 */
    parkServiceId?: string[];
    /** 企业服务类型 */
    personServiceId?: string[];
    /** 工种 */
    workOfTypeId?: string[];
    isShow?: boolean;
    /** 广告位是否展示 */
    advertiseIsShow?: boolean;
    /** 0 客户展示列表  1广告位列表 */
    isCustomer?: boolean;
    isMy?: boolean;
  }

  interface ParkOrHRAdvertiseInfo {
    id?: string;
    parkTypeName?: string;
    parkTypeId?: string;
    name?: string;
    /** 服务 */
    serviceName?: string[];
    /** 工种 */
    workName?: string[];
    serviceInfo?: ServeSearchSettingInfo[];
    workInfo?: ServeSearchSettingInfo[];
    /** 园区客户 */
    parkCustomersCount?: number;
    creationTime?: string;
    cityName?: string;
    isMyAttention?: boolean;
    /** 企业封面 */
    topSrc?: string;
    viewCount?: number;
    description?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    level?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType?: number;
    /** 单次投放收费 */
    price?: number;
    /** 投放次数 */
    count?: number;
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 是否客户端自发广告 */
    isFromClient?: boolean;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
  }

  interface ParkOrHRDetail {
    id?: string;
    categoryId?: string;
    userId?: string;
    parkTypeName?: string;
    name?: string;
    /** 服务 */
    serviceName?: string[];
    /** 工种 */
    workName?: string[];
    serviceInfo?: ServeSearchSettingInfo[];
    workInfo?: ServeSearchSettingInfo[];
    /** 园区客户 */
    parkCustomersCount?: number;
    serviceWorkerCount?: number;
    setUpDate?: number;
    creationTime?: string;
    cityName?: string;
    isMyAttention?: boolean;
    /** 企业封面 */
    topSrc?: string;
    viewCount?: number;
    description?: string;
    level?: number;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    status?: number;
    /** 排序 */
    sequence?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    provinceName?: string;
    countyName?: string;
  }

  interface ParkOrHRDetailPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ParkOrHRDetail[];
  }

  interface ParkOrHRInfo {
    id?: string;
    /** 类别ID */
    categoryId?: string;
    /** 企业名称/个人姓名 */
    companyName?: string;
    /** 10园区客户 20人资企业 */
    type?: number;
    /** 成立年份 */
    setUpDate?: number;
    /** 是否隐藏名字 1隐藏 0不隐藏 */
    isHideName?: boolean;
    name?: string;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 园区/企业级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    /** 园区客户数 */
    parkCustomersCount?: number;
    /** 园区类型 */
    parkTypeName?: string;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    /** 审批状态 5草稿 10待审核 20办理中 30通过 40驳回 */
    status?: number;
    isShow?: boolean;
    /** 浏览数 */
    viewCount?: number;
    /** 排序 */
    sequence?: number;
    foreignContact?: string;
    foreignContactPhone?: string;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    provinceName?: string;
    cityName?: string;
    countyName?: string;
    /** 运营机构 10民企运营 20政府运营 */
    operatingAgencies?: number;
    /** 政府委托书 */
    governmentPowerOfAttorney?: string;
    remark?: string;
    /** 描述 */
    description?: string;
    creatorName?: string;
    /** 园区风采 */
    parkStyles?: ParkStyleInfo[];
    /** 宣传视频 */
    promotionalVideo?: ParkStyleInfo[];
    serveSetting?: string[];
    workOfType?: string[];
    /** 园区服务类型/人资服务类型 */
    serveSettingName?: ServiceName[];
    /** 工种 */
    workOfTypeName?: ServiceName[];
    /** 园区客户 */
    companyCount?: number;
    honorCertificateCount?: number;
    serviceWorkerCount?: number;
    userId?: string;
    isMyAttention?: boolean;
    hrArea?: HRAreaDto[];
    userName?: string;
    auditNote?: string;
  }

  interface ParkOrHRList {
    id?: string;
    name?: string;
    contact?: string;
    contactPhone?: string;
    money?: number;
    /** 园区/企业级别 10国家级 20省级 30市级 40区县级 */
    level?: number;
    /** 园区类型 */
    parkTypeName?: string;
    /** 园区类型 （对应于SearchSetting 中SearchType=40的Id）（实体产业园/数字产业园/...） */
    parkTypeId?: string;
    status?: number;
    isShow?: boolean;
    advertiseIsShow?: boolean;
    /** 浏览数 */
    viewCount?: number;
    /** 排序 */
    sequence?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    provinceName?: string;
    cityName?: string;
    countyName?: string;
    creatorName?: string;
    /** 工种 */
    wOrkOfTypeName?: string;
    /** 园区服务 */
    parkServiceName?: string;
    wOrkOfTypeId?: string;
    parkServiceId?: string;
    /** 企业服务 */
    personServiceName?: string;
    personServiceId?: string;
    /** 广告类型 10付费 20免费 */
    advertiseType?: number;
    /** 最后展示日期 */
    lastShowDate?: string;
    /** 广告起始日期 */
    advertiseStartDate?: string;
    /** 广告到期日期 */
    advertiseEndDate?: string;
    foreignContact?: string;
    foreignContactPhone?: string;
    honorCertificateCount?: number;
    serviceWorkerCount?: number;
    mainSrc?: string;
    creationTime?: string;
    lastModificationTime?: string;
    /** 所属园区 */
    parkName?: string;
    auditNote?: string;
    serviceInfo?: ServeSearchSettingInfo[];
    workInfo?: ServeSearchSettingInfo[];
  }

  interface ParkOrHRListPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ParkOrHRList[];
  }

  interface ParkStyleDto {
    /** 10 园区风采 20宣传视频 */
    type?: number;
    src?: string;
    isTop?: boolean;
  }

  interface ParkStyleInfo {
    id?: string;
    src?: string;
    isTop?: boolean;
  }

  interface PeriodPriceInfo {
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType?: number;
    /** 价格 */
    price?: number;
  }

  interface PermissionGrantInfoDto {
    name?: string;
    displayName?: string;
    parentName?: string;
    isGranted?: boolean;
    allowedProviders?: string[];
    grantedProviders?: ProviderInfoDto[];
  }

  interface PermissionGroupDto {
    name?: string;
    displayName?: string;
    permissions?: PermissionGrantInfoDto[];
  }

  interface PersonalAttestationDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 认证类型：1为企业，2为个人 */
    type?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 姓名 */
    customerName?: string;
    /** 身份证号 */
    idNumber?: string;
    /** 身份证正面图片地址 */
    frontIdUrl?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 公司名称 */
    cardCompanyName?: string;
    /** 昵称 */
    nickName?: string;
    /** 名称 */
    name?: string;
    /** 登录用户名 */
    userName?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 备注 */
    remark?: string;
  }

  interface PersonalAttestationSubmitInput {
    /** 身份证正面图片地址 */
    frontIdUrl: string;
    /** 昵称 */
    nickName: string;
    /** 个人姓名 */
    customerName: string;
    /** 身份证号 */
    idNumber: string;
    /** 联系电话 */
    contacterPhone: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 名片的头像 */
    cardHeadUrl?: string;
    /** 公司名称 */
    cardCompanyName?: string;
  }

  interface PersonalUserDetail {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 联系人 */
    contacter?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 产品数量（审核通过的数量） */
    productCount?: number;
    /** 资讯数量（审核通过的数量） */
    informationCount?: number;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 身份证正面图片地址 */
    frontIdUrl?: string;
    /** 名称 */
    name?: string;
    /** 登录用户名 */
    userName?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 身份证号 */
    idNumber?: string;
  }

  interface PersonalUserDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的职称 */
    cardPostion?: string;
    cardHeadUrl?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 产品数量（审核通过的数量） */
    productCount?: number;
    /** 资讯数量（审核通过的数量） */
    informationCount?: number;
    /** 注册日期 */
    registDate?: string;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 身份证正面图片地址 */
    frontIdUrl?: string;
    /** 名称 */
    name?: string;
    /** 登录用户名 */
    userName?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 账户是否锁住（是否禁用） */
    isLocked?: boolean;
  }

  interface PersonalUserDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: PersonalUserDto[];
  }

  interface PhoneMesssageCodeLoginInput {
    /** 手机号 */
    phoneNumber: string;
    /** 验证码 */
    code: string;
  }

  interface PhoneToken {
    phone?: string;
    phoneCode?: string;
    clientId?: string;
  }

  interface PlatformContactList {
    id?: string;
    /** 行业服务 = 0 行业配套 = 1  甲方需求 = 2 行业资讯 = 3; */
    categoryType: number;
    categoryId?: string;
    categoryName?: string;
    /** 联系方式 */
    contactPhone: string;
  }

  interface PlatFormPurchase {
    /** 产品购买Id */
    id?: string;
    /** 买家名称 */
    purchaser?: string;
    /** 卖家名称 */
    seller?: string;
    /** 类别名称 */
    categoryName?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 成交额 */
    amount?: number;
    /** 产品数量 */
    count?: number;
    /** 购买日期 */
    purchaseDate?: string;
    /** 成交日期（确认验收时间） */
    fixtureDate?: string;
    /** 联系人 */
    contacter?: string;
    /** 联系电话 */
    contacterPhone?: string;
    /** 状态：0待确认验收，10待评价，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
    comment?: PurchasedCommentInfo;
  }

  interface PlatFormPurchasePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: PlatFormPurchase[];
  }

  interface PriceVersionInfo {
    /** 版本价格Id */
    id?: string;
    /** 版本名称 */
    name?: string;
    /** 价格 */
    price?: number;
    /** 收费方式 */
    chargeWay?: string;
    /** 排序 */
    sequence?: number;
  }

  interface ProductAdvertiseDetail {
    /** 产品广告Id */
    id?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 服务商 */
    serveName?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 联系人：类型为个人时联系人为申请时姓名 */
    contacter?: string;
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
  }

  interface ProductAdvertiseForManage {
    /** 产品广告Id */
    id?: string;
    /** 产品Id */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** 服务商 */
    serveName?: string;
    /** 联系人：类型为个人时联系人为申请时姓名 */
    contacter?: string;
    /** 排序 */
    sequence?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 是否客户端自发广告 */
    isFromClient?: boolean;
    /** 类别Id */
    categoryId?: string;
  }

  interface ProductAdvertiseForManagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ProductAdvertiseForManage[];
  }

  interface ProductCheckInput {
    /** 产品Id */
    id?: string;
    /** 审核状态：10通过，-10驳回 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 初始销售量 */
    initSalesVolume?: number;
    /** 初始评分 */
    initScore?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 初始好评数 */
    initPraiseCount?: number;
    /** 初始点赞数 */
    initThumbsUpCount?: number;
  }

  interface ProductDetail {
    /** 产品Id */
    id?: string;
    /** 服务商 */
    serveName?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 产品名称 */
    name?: string;
    /** 详情信息 */
    priceVersions?: PriceVersionInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 简述 */
    sketch?: string;
    /** 详情信息 */
    intros?: IntroInfo[];
    /** 备注 */
    remark?: string;
    /** 客户Id */
    customerId?: string;
    /** 初始销售量 */
    initSalesVolume?: number;
    /** 初始评分 */
    initScore?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 初始好评数 */
    initPraiseCount?: number;
    /** 初始点赞数 */
    initThumbsUpCount?: number;
    /** 是否自己创建 */
    isOwnerCreate?: boolean;
  }

  interface ProductDetailForHomePage {
    /** 产品Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 产品名称 */
    productName?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 成交数量 */
    transactionCount?: number;
    /** 浏览数 */
    browseCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 评星数 */
    starCount?: number;
    /** 评论数 */
    commentCount?: number;
    /** 联系电话 */
    contacterPhone?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    lastModificationTime?: string;
  }

  interface ProductDetailForHomePagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ProductDetailForHomePage[];
  }

  interface ProductDetailInfo {
    /** 产品Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 产品名称 */
    name?: string;
    /** 类别Id */
    categoryId?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 版本数量 */
    versionCount?: number;
    /** 最高价 */
    maxPrice?: number;
    /** 最低价 */
    minPrice?: number;
    /** 是否我的关注 */
    isMyAttention?: boolean;
    /** 是否我已赞 */
    isMyThumbsUp?: boolean;
    thumbsUpId?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：-1保存，0提交待审核，10通过，-10驳回，-20已下架 */
    status?: number;
    /** 简述 */
    sketch?: string;
    /** 备注 */
    remark?: string;
    /** 封面信息 */
    covers?: CoverInfo[];
    /** 详情信息 */
    priceVersions?: PriceVersionInfo[];
    /** 标签信息 */
    tags?: TagInfo[];
    /** 详情信息 */
    intros?: IntroInfo[];
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 成交数量 */
    transactionCount?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 客户Id */
    customerId?: string;
    /** 创建时间 */
    creationTime?: string;
    /** 浏览数 */
    browseCount?: number;
    /** 点赞数 */
    thumbsUpCount?: number;
    /** 关注数 */
    attentionCount?: number;
    /** 评星数 */
    starCount?: number;
    /** 评论数 */
    commentCount?: number;
    /** 联系电话 */
    contacterPhone?: string;
    /** 是否自己创建 */
    isOwnerCreate?: boolean;
    provinceCode?: number;
  }

  interface ProductForManage {
    /** 产品Id */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品类别名 */
    categoryName?: string;
    categoryId?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 版本数量 */
    versionCount?: number;
    /** 最高价 */
    maxPrice?: number;
    /** 最低价 */
    minPrice?: number;
    /** 是否广告区 */
    isOnAdvertise?: boolean;
    /** 成交数量 */
    transactionCount?: number;
    /** 发布时间 */
    publishTime?: string;
    /** 最后更新日期 */
    lastModificationTime?: string;
    /** 状态：10通过（显示中），-20已下架 */
    status?: number;
  }

  interface ProductForManagePageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ProductForManage[];
  }

  interface ProductThumbsUpInput {
    /** 产品点赞Id */
    id?: string;
    /** 产品Id */
    productId?: string;
    /** 0 去掉点赞 1 点赞 */
    status?: number;
  }

  interface ProductViewInput {
    /** 产品点赞Id */
    id?: string;
    /** 产品Id */
    productId?: string;
  }

  interface ProductWaitForCheck {
    /** 产品Id */
    id?: string;
    /** 产品名称 */
    name?: string;
    /** 产品类别名 */
    categoryName?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 服务商 */
    serveName?: string;
    /** 版本数量 */
    versionCount?: number;
    /** 最高价 */
    maxPrice?: number;
    /** 最低价 */
    minPrice?: number;
    /** 发布时间 */
    publishTime?: string;
    /** 状态：0提交待审核，-10驳回 */
    status?: number;
  }

  interface ProductWaitForCheckPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ProductWaitForCheck[];
  }

  interface ProfileDto {
    extraProperties?: Record<string, any>;
    userName?: string;
    email?: string;
    name?: string;
    surname?: string;
    phoneNumber?: string;
    isExternal?: boolean;
    hasPassword?: boolean;
  }

  interface PropertyApiDescriptionModel {
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isRequired?: boolean;
  }

  interface ProviderInfoDto {
    providerName?: string;
    providerKey?: string;
  }

  interface ProvinceInfo {
    /** 省份Code */
    provinceCode?: number;
    /** 省份 */
    provinceName?: string;
    /** 排序 */
    sequence?: number;
  }

  interface ProvinceMsg {
    /** 省份Code */
    provinceCode?: number;
    /** 排序 */
    sequence?: number;
  }

  interface PurchasedCommentInfo {
    /** 评星数 */
    starCount?: number;
    /** 点评内容 */
    content?: string;
    /** 评论时间 */
    creationTime?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
  }

  interface PurchasedProductCommentInput {
    /** 产品购买Id */
    id?: string;
    /** 评星数 */
    starCount?: number;
    /** 点评内容 */
    content?: string;
  }

  interface PurchasedProductCommentThumbsUpInput {
    /** 产品评论点赞Id */
    id?: string;
    /** 产品评论Id */
    commentId?: string;
    /** 0 去掉点赞 1 点赞 */
    status?: number;
  }

  interface PutOrOffOrderInput {
    id?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 运营下架备注 */
    remark?: string;
    isDelete?: boolean;
    isRecommend?: boolean;
  }

  interface QrCodeLogin {
    /** 扫码登录Id */
    uId?: string;
    /** 二维码地址 */
    url?: string;
  }

  interface ReadOrderTakenInput {
    /** 订单Id */
    orderId?: string;
    /** 接单人Id */
    takenUserId?: string;
  }

  interface RechargeDto {
    /** 用户Id */
    userId?: string;
    /** 充值单号 */
    rechargeNo?: string;
    /** 充值类型：10微信，20支付宝，30线下 */
    type?: number;
    /** 充值金额 */
    amount?: number;
    /** 交易状态 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 支付完成时间 */
    successTime?: string;
    creationTime?: string;
    customerName?: string;
    contracter?: string;
    contracterPhone?: string;
  }

  interface RechargeDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: RechargeDto[];
  }

  interface RechargeListInput {
    pageModel?: Pagination;
    /** 昵称 */
    customerName?: string;
    /** 充值类型：10微信，20支付宝，30线下 */
    type?: number;
    /** 参考 RechargeStatus */
    status?: number;
    startDate?: string;
    endDate?: string;
    amountBegin?: number;
    amountEnd?: number;
  }

  interface RefundApplyInput {
    /** 产品购买Id */
    id?: string;
    /** 退款申请备注 */
    refundApplyRemark?: string;
  }

  interface RefundInfo {
    /** 退款申请备注 */
    refundApplyRemark?: string;
    /** 退款申请时间 */
    refundApplyTime?: string;
    /** 退款处理备注 */
    refundDealRemark?: string;
    /** 状态：0待确认验收，10待评价，20交易完成，-10申请退款，-20退款成功，-30申请退款驳回 */
    status?: number;
  }

  interface RegisterDto {
    extraProperties?: Record<string, any>;
    userName: string;
    emailAddress: string;
    sex?: number;
    password: string;
    appName: string;
  }

  interface RemoteServiceErrorInfo {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: RemoteServiceValidationErrorInfo[];
  }

  interface RemoteServiceErrorResponse {
    error?: RemoteServiceErrorInfo;
  }

  interface RemoteServiceValidationErrorInfo {
    message?: string;
    members?: string[];
  }

  interface ResetPasswordDto {
    userId?: string;
    resetToken: string;
    password: string;
  }

  interface ResetPassWordInput {
    userId?: string;
    name?: string;
    userName?: string;
    phoneNumber?: string;
    password?: string;
  }

  interface Resource {
    /** 加密算法类型 */
    algorithm: string;
    /** 数据密文 */
    ciphertext: string;
    /** 附加数据 */
    associatedData?: string;
    /** 原始类型 */
    originalType: string;
    /** 随机串 */
    nonce: string;
  }

  interface ResourceFrontInfoDto {
    id?: string;
    userId?: string;
    categoryId?: string;
    title?: string;
    viewCount?: number;
    /** 资源数量 */
    resourceCount?: number;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    creationTime?: string;
    lastModificationTime?: string;
    tags?: TagInfo[];
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    /** 预计交付天数 */
    estimatedDeliveryCompletiondays?: number;
    /** 合作费用 */
    cooperationFee?: string;
    /** 认证企业名称 */
    certificationCompanyName?: string;
    isMyAttention?: boolean;
    isMe?: boolean;
    resourceStyleInfo?: ResourceStyleInfo[];
    visitForUserId?: string;
    /** 所在省区域码 */
    provinceCode?: number;
    /** 所在省 */
    provinceName?: string;
    /** 资源介绍 */
    resourceIntros?: ResourceIntro[];
    /** 所在城市 */
    cities?: CityInfo[];
    /** 意向输送城市 */
    intendedDeliveryCities?: CityInfo[];
  }

  interface ResourceInfoDto {
    id?: string;
    categoryId?: string;
    title?: string;
    /** 资源数量 */
    resourceCount?: number;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    creationTime?: string;
    lastModificationTime?: string;
    tags?: TagInfo[];
    /** 预计交付天数 */
    estimatedDeliveryCompletiondays?: number;
    /** 合作费用 */
    cooperationFee?: string;
    resourceStyleInfo?: ResourceStyleInfo[];
    creatorId?: string;
    /** 资源介绍 */
    resourceIntros?: ResourceIntro[];
    /** 所在城市 */
    cities?: CityInfo[];
    /** 意向输送城市 */
    intendedDeliveryCities?: CityInfo[];
    /** 用户id */
    userId?: string;
  }

  interface ResourceIntro {
    /** 类型：0为文本，1为图片，2为视频 默认为文本 */
    type?: number;
    /** 文本内容 */
    content?: string;
    /** 图片路径 */
    path?: string;
    /** 顺序 */
    sequence?: number;
  }

  interface ResourceListDto {
    id?: string;
    title?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    /** 创建人 */
    createUserName?: string;
    viewCount?: number;
    attentionCount?: number;
    /** 所属企业 */
    customerName?: string;
    lastModificationTime?: string;
    /** 资源数量 */
    resourceCount?: number;
    /** 合作费用 */
    cooperationFee?: string;
    /** 所在城市 */
    city?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    /** 所在城市 */
    cityCode?: number;
    /** 预计交付完成天数 */
    estimatedDeliveryCompletiondays?: number;
    userId?: string;
    /** 联系人 */
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 所在城市 */
    cities?: CityInfo[];
    /** 意向输送城市 */
    intendedDeliveryCities?: CityInfo[];
  }

  interface ResourceListDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: ResourceListDto[];
  }

  interface ResourceListInput {
    pageModel?: Pagination;
    status?: number;
    key?: string;
    /** 资源标题 */
    resourceTitle?: string;
    /** 开始时间 */
    startDate?: string;
    /** 结束时间 */
    endDate?: string;
  }

  interface ResourceRecommendInput {
    id?: string;
    isRecommend?: boolean;
  }

  interface ResourceStyleInfo {
    src?: string;
    sort?: number;
  }

  interface ResourceViewInput {
    /** 订单浏览Id */
    id?: string;
    /** 订单Id */
    resourceId?: string;
  }

  interface ReturnValueApiDescriptionModel {
    type?: string;
    typeSimple?: string;
  }

  interface RewardInfo {
    /** 打赏分成金额 */
    shareAmount?: number;
    /** 打赏时间 */
    creationTime?: string;
  }

  interface RewardPercentageInfo {
    /** Up主等级 */
    upLevel?: number;
    /** Up主占比 */
    upRatio?: number;
    /** 平台占比 */
    platformRatio?: number;
  }

  interface RoleDto {
    /** 角色Id */
    id?: string;
    /** 角色名 */
    name?: string;
  }

  interface RoleEnableOrForbidInput {
    /** 角色Id */
    id?: string;
    /** 启用：true，禁用：false */
    isEnable?: boolean;
  }

  interface RoleInfo {
    /** 角色Id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 是否可用 */
    isEnable?: boolean;
    /** 部门Id */
    departmentId?: number;
    /** 备注 */
    remark?: string;
  }

  interface RoleInfoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: RoleInfo[];
  }

  interface SearchConditionList {
    searchType?: number;
    belongType?: number;
    conditionList?: ConditionInfo[];
  }

  interface SearchSettingInfo {
    searchSettingId?: string;
    searchSettingName?: string;
    src?: string;
    sort?: number;
  }

  interface SendPasswordResetCodeDto {
    email: string;
    appName: string;
    returnUrl?: string;
    returnUrlHash?: string;
  }

  interface SendPhoneMessageBaseInput {
    messageType?: string;
    phoneNumber: string;
  }

  interface SendPhoneMesssageCodeInput {
    /** 手机号 */
    phoneNumber: string;
  }

  interface ServeSearchSettingInfo {
    /** 设置Id */
    searchSettingId?: string;
    /** 设置名称 */
    searchSettingName?: string;
    sequence?: number;
  }

  interface ServiceName {
    id?: string;
    name?: string;
    src?: string;
    sort?: number;
  }

  interface SetCategoryVisInput {
    /** 类别Id */
    id?: string;
    /** 类型：0产品类别，1资讯类别 */
    type?: number;
  }

  interface SetMyModule {
    moduleId?: string;
    sequence?: number;
  }

  interface SetMyModuleInput {
    moduleIds?: SetMyModule[];
  }

  interface SetRoleUserInput {
    userId?: string[];
    roleId?: string;
  }

  interface SetStatusInput {
    id?: string;
    /** -20 驳回 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
  }

  interface SetTagVisInput {
    /** 类别Id */
    id?: string;
    /** 类型：0产品标签，1资讯标签，3快捷评论标签 */
    type?: number;
  }

  interface SetUserRoleInput {
    userId?: string;
    roleName?: string[];
    extendId?: string;
    type?: number;
  }

  interface SetUserTencentUserIdDto {
    /** 腾讯的聊天USERID */
    tencentUserId?: string;
    userId?: string;
    remark?: string;
  }

  interface SetUserTypeInput {
    userId?: string;
    /** 10 人资公司 20 行业配套服务公司 30 用工单位 40 行业机构 */
    authType?: number;
  }

  interface SetUserWithdrawComplete {
    id?: string;
    /** 打款凭证 */
    receiptUrl?: string;
  }

  interface SetUserWithdrawStatusInput {
    id?: string;
    /** 打款凭证 */
    receiptUrl?: string;
    /** 交易状态 已驳回 -10 打款中 10 已完成 20 */
    status?: number;
    /** 备注 */
    remark?: string;
  }

  interface SetVersionModuleInput {
    versionId: string;
    modules: ModuleTypeInfo[];
  }

  interface SupplierRefundList {
    /** 运费模式 10小时工返费 20一次性招聘费 30 连续性管理费 */
    rebateMode?: number;
    /** 运费时长 0连续合作 其他数值就代表时长月份 */
    rebateTime?: number;
    /** 供应商利润 */
    supplierProfit?: number;
    /** 10 一次性利润 20 xx元/每人/每小时 30 xx元/每人/每月 */
    supplierProfitUint?: number;
    /** 排序 1,2,3 */
    sequence?: number;
  }

  interface TagDto {
    /** 标签Id */
    id?: string;
    /** 类别Id */
    categoryId?: string;
    /** /// 行业服务 = 0 行业配套 = 1  甲方需求 = 2 行业资讯 = 3; */
    categoryType?: number;
    /** 类别名称 */
    categoryName?: string;
    /** 名称 */
    name?: string;
    /** 排序 */
    sequence?: number;
    /** 是否显示，默认为true 显示 */
    isVisable?: boolean;
    creatorId?: string;
  }

  interface TagInfo {
    /** 标签Id */
    tagId?: string;
    /** 标签名 */
    tagName?: string;
    /** 排序 */
    sequence?: number;
    /** 类型：0产品标签，2自定义标签 */
    type?: number;
  }

  interface TagMenu {
    /** 标签Id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 类别Id */
    categoryId?: string;
  }

  interface TagMsg {
    /** 标签Id */
    tagId?: string;
    /** 排序 */
    sequence?: number;
  }

  interface TenantDto {
    extraProperties?: Record<string, any>;
    id?: string;
    name?: string;
  }

  interface TenantDtoPagedResultDto {
    items?: TenantDto[];
    totalCount?: number;
  }

  interface TencentConsultDto {
    userId?: string;
    productId?: string;
    tencentUserId?: string;
    remark?: string;
  }

  interface TencentUserDto {
    id?: string;
    /** 腾讯的聊天USERID */
    tencentUserId?: string;
    userId?: string;
    userName?: string;
    /** 账户是否锁住（是否禁用），默认为0未锁住即未禁用 */
    isLocked?: boolean;
    /** 上次登录时间 */
    lastLoginTime?: string;
    /** 备注 */
    remark?: string;
  }

  interface TencentUserDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: TencentUserDto[];
  }

  interface TencentUserInput {
    /** 用户的ID --目前使用手机号 */
    userID?: string;
    /** 用户昵称 */
    nick?: string;
    /** 用户头像 */
    faceUrl?: string;
  }

  interface TencentUserOutput {
    /** 请求处理的结果：OK 表示处理成功 FAIL 表示失败 */
    actionStatus?: string;
    /** 0表示成功 非0表示失败 */
    errorInfo?: string;
    /** 错误信息 */
    errorCode?: number;
  }

  interface TestOutput {
    /** 测试出参Name 到时候记得删除 */
    name?: string;
  }

  interface TimeZone {
    iana?: IanaTimeZone;
    windows?: WindowsTimeZone;
  }

  interface TimingDto {
    timeZone?: TimeZone;
  }

  interface TrainingDto {
    id?: string;
    categoryId?: string;
    userId?: string;
    /** 10未提交 20待审核 30 进行中 40 下架 50 系统下架 */
    status?: number;
    creationTime?: string;
    lastModificationTime?: string;
    /** 是否推荐 1是 */
    isRecommend?: boolean;
    contact?: string;
    /** 联系电话 */
    contactNumber?: string;
    /** 最后上架时间 */
    lastShelfTime?: string;
    /** 员工薪酬 */
    salary?: number;
    /** 起始薪资 */
    startMonthlySalary?: number;
    /** 截止起始薪资 */
    endMonthlySalary?: number;
    /** 10 固定 20 面议 */
    salaryType?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    /** 省 */
    provinceName?: string;
    /** 市 */
    cityName?: string;
    /** 区县 */
    countyName?: string;
    /** 浏览次数 */
    viewCount?: number;
    /** 关注次数 */
    attentionCount?: number;
    /** 公司名称 */
    companyName?: string;
    title?: string;
    userStatus?: number;
    /** 培训部门 */
    department?: string;
    /** 培训时间 */
    month?: string;
    /** 培训要求目的 */
    trainIntroduction?: string;
  }

  interface TrainingDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: TrainingDto[];
  }

  interface TrainingListInput {
    pageModel?: Pagination;
    /** 昵称 */
    jobName?: string;
    status?: number;
    startDate?: string;
    endDate?: string;
  }

  interface TrainingRecommendInput {
    id?: string;
    isRecommend?: boolean;
  }

  interface TrainingViewInput {
    /** 订单浏览Id */
    id?: string;
    /** 订单Id */
    trainingId?: string;
  }

  interface TypeApiDescriptionModel {
    baseType?: string;
    isEnum?: boolean;
    enumNames?: string[];
    enumValues?: any[];
    genericArguments?: string[];
    properties?: PropertyApiDescriptionModel[];
  }

  interface UpdateBackClientUserInput {
    /** 名称 */
    name?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 账户 */
    userName?: string;
    /** 角色 */
    roleNames?: string[];
    /** 用户Id */
    id?: string;
  }

  interface UpdateCompanyUserInput {
    /** 联系人 */
    contacter: string;
    /** 联系电话 */
    contacterPhone: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 企业名称 */
    customerName: string;
    /** 社会统一信用代码 */
    societyCreditCode: string;
    /** 营业执照文件地址 */
    licenseUrl?: string;
    /** 对外联系人 */
    outerContacter: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系电话 */
    outerContacterPhone: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 区域Code */
    areaCode?: number;
    /** 企业规模 */
    firmSize?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 用户Id */
    id?: string;
  }

  interface UpdateFeatureDto {
    name?: string;
    value?: string;
  }

  interface UpdateFeaturesDto {
    features?: UpdateFeatureDto[];
  }

  interface UpdateInformationAdvertiseInput {
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 资讯广告Id */
    id?: string;
  }

  interface UpdateInformationInput {
    /** 类别Id */
    categoryId?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 客户Id */
    customerId?: string;
    /** 状态：-1保存，0提交待审核（发布） */
    status?: number;
    /** 标题 */
    title: string;
    /** 是否原创 */
    isOriginal?: boolean;
    /** 转载链接 */
    repostLink?: string;
    /** 是否需要报名 */
    needApply?: boolean;
    /** 联系电话 */
    contactPhone?: string;
    /** 报名链接 */
    applyLink?: string;
    /** 举办起始日期 */
    toHoldStartTime?: string;
    /** 举办截止日期 */
    toHoldEndTime?: string;
    /** 举办地址区域Code */
    areaCode?: number;
    /** 详细举办地址 */
    address?: string;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;
    /** 举办/发布单位 */
    unit?: string;
    /** 资讯来源：0单位，1个人 */
    fromType?: number;
    /** 资讯来源说明 */
    fromMessage?: string;
    /** 实行区域：0全国，1省份 */
    implementAreaType?: number;
    /** 封面信息 */
    coverInfo?: CoverInfo[];
    /** 标签信息 */
    tagInfo?: TagMsg[];
    /** 详情信息 */
    introInfo?: IntroInfo[];
    /** 实行省份信息 */
    provinceInfo?: ProvinceMsg[];
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 资讯Id */
    id?: string;
  }

  interface UpdatePassWordInput {
    id?: string;
    passWord?: string;
    code?: string;
  }

  interface UpdatePassWordInputWithNoCode {
    id?: string;
    passWord?: string;
  }

  interface UpdatePermissionDto {
    name?: string;
    isGranted?: boolean;
  }

  interface UpdatePermissionsDto {
    permissions?: UpdatePermissionDto[];
  }

  interface UpdateProductAdvertiseInput {
    /** 对外联系人 */
    outerContacter?: string;
    /** 对外联系电话是否平台电话 */
    isOuterPhonePlatform?: boolean;
    /** 对外联系人号码 */
    outerContacterPhone?: string;
    /** 广告起始时间 */
    startTime?: string;
    /** 广告到期时间 */
    endTime?: string;
    /** 排序 */
    sequence?: number;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 广告类型：0付费，1免费 */
    payType?: number;
    /** 付费额 */
    fee?: number;
    /** 状态：0（客户端）提交，-10下架，10上架 */
    status?: number;
    /** 产品广告Id */
    id?: string;
  }

  interface UpdateProductInput {
    /** 类别Id */
    categoryId?: string;
    /** 运营类别：1平台自营，2客户自营 */
    operateType?: number;
    /** 客户Id */
    customerId?: string;
    /** 产品名称 */
    name: string;
    /** 简述 */
    sketch?: string;
    /** 状态：-1保存，0提交待审核（发布） */
    status?: number;
    /** 封面信息 */
    coverInfo?: CoverInfo[];
    /** 详情信息 */
    priceVersionInfo?: PriceVersionInfo[];
    /** 标签信息 */
    tagInfo?: TagMsg[];
    /** 详情信息 */
    introInfo?: IntroInfo[];
    /** 初始销售量 */
    initSalesVolume?: number;
    /** 初始评分 */
    initScore?: number;
    /** 初始浏览量 */
    initViewCount?: number;
    /** 初始关注量 */
    initAttendedCount?: number;
    /** 初始好评数 */
    initPraiseCount?: number;
    /** 初始点赞数 */
    initThumbsUpCount?: number;
    /** 产品Id */
    id?: string;
  }

  interface UpdateProfileDto {
    extraProperties?: Record<string, any>;
    userName?: string;
    email?: string;
    name?: string;
    surname?: string;
    phoneNumber?: string;
  }

  interface UpdateUserCardInput {
    /** 用户Id */
    id?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 企业名称 */
    customerName: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 公司名称 */
    cardCompanyName?: string;
  }

  interface UserAttentionsDto {
    /** 产品关注数 */
    productCount?: number;
    /** 资讯关注数 */
    informationCount?: number;
    /** 消息数量 */
    messageCount?: number;
  }

  interface UserAttestationCheckInput {
    /** 用户认证Id */
    id?: string;
    /** 冠名：0其他，1省级，2市级，3区县级 */
    namingType?: number;
    /** 审核状态：10通过，-10驳回 */
    status?: number;
    /** 服务商星级：1~5 */
    serveStarLevel?: number;
    /** 备注 */
    remark?: string;
  }

  interface UserAttestationDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 联系人：类型为个人时联系人为申请时姓名 */
    contacter?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 注册类型：1为企业，2为个人 */
    registType?: number;
    /** 认证类型：1为企业，2为个人 */
    type?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
    /** 企业名称/个人姓名 */
    customerName?: string;
    /** 社会统一信用代码 */
    societyCreditCode?: string;
    /** 企业规模 */
    firmSize?: number;
    /** 营业执照文件地址 */
    licenseUrl?: string;
    /** 区域Code */
    areaCode?: number;
    /** 所在地 */
    address?: string;
    /** 状态：0提交待审核，10通过，-10驳回 */
    status?: number;
    /** 提交认证时间 */
    attestateDate?: string;
    /** 注册日期 */
    registDate?: string;
    /** 备注 */
    remark?: string;
  }

  interface UserAttestationDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: UserAttestationDto[];
  }

  interface UserCardDto {
    /** 用户认证Id */
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 名片联系人 */
    cardName?: string;
    /** 名片联系电话 */
    cardPhone?: string;
    /** 名片的Email */
    cardEmail?: string;
    /** 名片的地址 */
    cardAddress?: string;
    /** 名片的微信二维码 */
    cardWxUrl?: string;
    /** 头像 */
    cardHeadUrl?: string;
    /** 名片的职称 */
    cardPostion?: string;
    /** 公司名称 */
    cardCompanyName?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 注册类型：1为企业，2为个人 */
    registType?: number;
    /** 认证类型：1为企业，2为个人 */
    type?: number;
    /** 企业名称/个人姓名 */
    customerName?: string;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
  }

  interface UserCreateInformationAdvertiseInput {
    /** 资讯Id */
    informationId?: string;
    /** 广告位置：0首页一级，2详情页推荐 */
    position?: number;
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType: number;
    /** 投放次数 */
    count: number;
    /** 单次投放收费 */
    price: number;
    /** 投放合计费用 */
    fee?: number;
  }

  interface UserCreateParkOrHRAdvertiseInput {
    /** 产品Id */
    parkOrHRId?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType: number;
    /** 投放次数 */
    count: number;
    /** 单次投放收费 */
    price: number;
    /** 投放合计费用 */
    fee?: number;
  }

  interface UserCreateProductAdvertiseInput {
    /** 产品Id */
    productId?: string;
    /** 广告位置：0首页一级，1首页二级，2详情页推荐 */
    position?: number;
    /** 投放周期类型：1天，7周，30月，90季，365年 */
    periodType: number;
    /** 投放次数 */
    count: number;
    /** 单次投放收费 */
    price: number;
    /** 投放合计费用 */
    fee?: number;
  }

  interface UserData {
    id?: string;
    tenantId?: string;
    userName?: string;
    name?: string;
    surname?: string;
    email?: string;
    emailConfirmed?: boolean;
    phoneNumber?: string;
    phoneNumberConfirmed?: boolean;
    sex?: number;
    clientId?: string;
    creationTime?: string;
    lockoutEnd?: string;
    extraProperties?: Record<string, any>;
    lockoutEnabled?: boolean;
  }

  interface UserDataListResultDto {
    items?: UserData[];
  }

  interface UserDto {
    /** 用户Id */
    id?: string;
    /** 登录用户名（账号） */
    userName?: string;
    /** 名称 */
    name?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 账户是否锁住（是否禁用） */
    isLocked?: boolean;
    /** 角色信息 */
    roles?: RoleDto[];
    /** 备注 */
    remark?: string;
  }

  interface UserDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: UserDto[];
  }

  interface UserInfo {
    /** 用户Id */
    userId?: string;
    /** 用户名 */
    userName?: string;
    /** 手机号 */
    phoneNumber?: string;
    /** 账户余额 */
    amount?: number;
    /** 收到打赏 */
    reward?: number;
    /** 昵称 */
    nickName?: string;
    /** 认证状态：0提交待审核，10通过，-10驳回，-20未提交 */
    userAttestationStatus?: number;
    /** 用户认证Id */
    userAttestationId?: string;
    /** 企业认证的名称 */
    customerName?: string;
    /** 年消费 */
    yearlyConsume?: number;
    /** 年产品购买消费 */
    yearlyPurchasedConsume?: number;
    /** 年打赏消费 */
    yearlyRewardConsume?: number;
    /** 年产品广告投放消费 */
    yearlyProductAdConsume?: number;
    /** 年资讯广告投放消费 */
    yearlyInformationAdConsume?: number;
    /** 1，企业 2， 个人 */
    userType?: number;
    /** 10 人资公司 20 园区经营 30 用工单位 40 民营企业 */
    authType?: number;
  }

  interface UserOrderListInput {
    pageModel?: Pagination;
    userId?: string;
  }

  interface UserWithdrawDto {
    id?: string;
    /** 用户Id */
    userId?: string;
    /** 提现单号 */
    withDrawNo?: string;
    /** 提现类型：10微信，20支付宝 30 银行卡 */
    accountType?: number;
    /** 账号名 */
    name?: string;
    /** 收款账号 */
    account?: string;
    /** 账号支行 */
    bankBranch?: string;
    /** 提现数额 */
    amount?: number;
    /** 交易状态 */
    status?: number;
    /** 备注 */
    remark?: string;
    /** 回单URL */
    receiptUrl?: string;
    /** 申请时间 */
    creationTime?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 合计 */
    totalAmount?: number;
    /** 1企业 2 个人 */
    userType?: number;
  }

  interface UserWithdrawDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: UserWithdrawDto[];
  }

  interface VersionCache {
    name?: string;
    departmentCount?: number;
    apiCount?: number;
    remark?: string;
  }

  interface VersionCreate {
    name?: string;
    departmentCount?: number;
    apiCount?: number;
    sequence?: number;
    remark?: string;
  }

  interface VersionDto {
    id?: string;
    name?: string;
    departmentCount?: number;
    apiCount?: number;
    sequence?: number;
  }

  interface VersionDtoPageOutput {
    pageModel?: Pagination;
    objectData?: any;
    data?: VersionDto[];
  }

  interface VersionUpdateInput {
    id?: string;
    name?: string;
    departmentCount?: number;
    apiCount?: number;
    remark?: string;
    sequence?: number;
  }

  interface ViewUserInfo {
    userId?: string;
    /** 头像 */
    photoUrl?: string;
    /** 最后一次访问时间 */
    createTime?: string;
  }

  interface WindowsTimeZone {
    timeZoneId?: string;
  }

  interface WxMiniAppIndentityInfo {
    /** 会话密钥 */
    sessionKey?: string;
    /** 小程序OpenId */
    openId?: string;
    /** 用户名（该值为空则需手机授权登录，不为空则已有该小程序用户） */
    userName?: string;
  }

  interface WxMiniAppLoginInfo {
    /** 状态：-10：二维码过期/登录时效过期，0：登录初始/二维码初生成，10：登录确认 */
    status?: number;
    /** 用户名 */
    userName?: string;
    accessToken?: IdentityModelTokenCacheItem;
  }

  interface WxMiniAppPhoneAuthLoginFromScanInput {
    /** （扫码）登录Id */
    uId: string;
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string;
    /** 加密算法的初始向量 */
    iv: string;
    /** 获取会话密钥 */
    sessionKey: string;
    /** 小程序OpenId */
    openId: string;
  }

  interface WxMiniAppPhoneLoginInput {
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string;
    /** 加密算法的初始向量 */
    iv: string;
    /** 获取会话密钥 */
    sessionKey: string;
    /** 小程序OpenId */
    openId: string;
  }

  interface WxMiniAppUserLoginFromScanInput {
    /** （扫码）登录Id */
    uId: string;
    /** 用户名 */
    userName: string;
    /** 小程序OpenId */
    openId: string;
  }

  interface WxRechargeInfo {
    /** 充值单号 */
    rechargeNo?: string;
    /** 充值码地址 */
    rechargeCodeUrl?: string;
  }

  interface WxRechargeInfoAjaxResponse {
    success?: boolean;
    msg?: string;
    error?: RemoteServiceErrorInfo;
    unAuthorizedRequest?: boolean;
    result?: WxRechargeInfo;
  }

  interface WxRechargeInput {
    /** 充值金额，单位为元。 */
    amount?: number;
    /** 商品描述 */
    description?: string;
    /** 备注 */
    remark?: string;
  }

  interface WxRechargeNotifyInput {
    /** 通知Id */
    id: string;
    /** 通知创建时间 */
    createTime: string;
    /** 通知类型 */
    eventType: string;
    /** 通知数据类型 */
    resourceType: string;
    resource: Resource;
    /** 回调摘要 */
    summary: string;
  }

  interface WxRechargeNotifyResult {
    /** 返回状态码(错误码，SUCCESS为接收成功，其他错误码为失败) */
    code?: string;
    /** 返回信息，如非空，为错误原因 */
    message?: string;
  }
}
