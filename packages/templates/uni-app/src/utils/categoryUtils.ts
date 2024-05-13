export class CategoryUtils {
  static isZPOrRBByName(categoryName: string) {
    return categoryName === '人博展会' || categoryName === '行业论坛';
  }

  static isNewsOrTrendsByName(categoryName: string) {
    return categoryName === '资讯汇集' || categoryName === '行业动态';
  }
  static isHumanResourceByName(categoryName: string) {
    return categoryName === '人力资源协会';
  }
  static isZPOrRBOrNewsOrTrendsByName(categoryName: string) {
    return this.isZPOrRBByName(categoryName) || this.isNewsOrTrendsByName(categoryName);
  }
  static isIHasPark(categoryName: string) {
    return categoryName === '我有园区';
  }
  static isHumanResource(categoryName: string) {
    return categoryName === '人资公司';
  }
  static isIHasOrder(categoryName: string) {
    return categoryName === '我有订单';
  }
  static isIHasResource(categoryName: string) {
    return categoryName === '我有人';
  }
  static isINeedHeadHunter(categoryName: string) {
    return categoryName === '我要猎头';
  }
  static isINeedTrain(categoryName: string) {
    return categoryName === '我要培训';
  }

  static isINeedPerson(categoryName: string) {
    return categoryName === '我要人';
  }
  static isINeedInformation(categoryName: string) {
    return categoryName === '我要资讯';
  }
  static isRLZYJJRXH(categoryName: string) {
    return categoryName === '人力资源经理人协会';
  }
  static isZYXS(categoryName: string) {
    return categoryName === '卓玥学社';
  }

  static isSchoolRecruit(categoryName: string) {
    return categoryName === '校园招聘';
  }

  static isProductCategory(categoryName: string) {
    return categoryName === '发薪电签' || categoryName === '保险' || categoryName === '背调';
  }

  static isInformationCategory(categoryName: string) {
    return (
      this.isZPOrRBByName(categoryName) ||
      this.isNewsOrTrendsByName(categoryName) ||
      categoryName === '行业政策'
    );
  }
}
