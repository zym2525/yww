//sessionStorage operate
class localStorageProxy {
  constructor() {}

  // 存
  public setItem(key: string, value: any): void {
    return uni.setStorageSync(key, JSON.stringify(value));
  }

  // 取
  public getItem<T = any>(key: string): Nullable<T> {
    try {
      const value = uni.getStorageSync(key);
      if (value) {
        // Do something with return value
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      // Do something when catch error
      return null;
    }
  }

  // 删
  public removeItem(key: string) {
    return uni.removeStorageSync(key);
  }

  // 清空
  public clear() {
    return uni.clearStorage();
  }
}

export const storageLocal = new localStorageProxy();
