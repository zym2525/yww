declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'


declare const CLIENT_ID: string

declare namespace NodeJS {
  interface ProcessEnv {

    NODE_ENV: 'development' | 'production';
  }
}

declare type Nullable<T> = T | null
declare type Recordable<T = unknown> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T
}
declare type Indexable<T = any> = {
  [key: string]: T
}
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

declare interface WeMapModel {
  latitude?: number;
  longitude?: number;
  provinceName?: string;
  cityName?: string;
  countyName?: string;
  provinceCode?: number;
  cityCode?: number;
  countyCode?: number;
  address?: string;
}

declare module 'uview-plus'