import { EditorType } from '@/constants';
import dayjs from 'dayjs';
import _ from 'lodash';

export function object2query(object: Record<string, string | number>) {
  return Object.keys(object)
    .map((key) => (object[key] ? `${key}=${object[key]}` : ''))
    .filter(Boolean)
    .join('&');
}

export function query2object<T extends { [key: string]: string }>(query: string): T {
  return Object.fromEntries(
    decodeURIComponent(query)
      .split('&')
      .map((x) => x.split('='))
  );
}

export function getTextEditorContent(intros: API.IntroInfo[]) {
  return (intros ?? [])
    .filter((x) => x.type === EditorType.Text)
    .map((x) => x.content)
    .join(';');
}

export function formatTimeWithoutCurrentYear(date: string) {
  if (!date) return date;
  const targetDate = dayjs(date);
  const targetYear = targetDate.year();
  const nowYear = dayjs().year();
  return targetYear >= nowYear
    ? targetDate.format('MM-DD HH:mm')
    : targetDate.format('YYYY-MM-DD HH:mm');
}

//去收尾空格
export function trim(str: string) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

export function paginateList<T>(list: T[], pageIndex: number, pageSize: number) {
  const startIndex = (pageIndex - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return list.slice(startIndex, endIndex);
}

/**
 * 添加星号
 * @param str
 * @param start
 * @param end
 * @returns
 */
export function addStarForString(str: string, start = 0, end = 0) {
  return str.substring(0, start) + '*'.repeat(end - start) + str.substring(end);
}

export function addStarForEmail(str: string) {
  const end = str.lastIndexOf('.');
  return addStarForString(str, 2, end);
}

export function formatTimeAgo(date: string, format = 'YYYY-MM-DD HH:mm') {
  const diff = dayjs().diff(date, 'seconds'); // 计算时间差，单位为秒

  if (diff < 60) {
    return `${diff}秒前`;
  } else if (diff < 60 * 60) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}分钟前`;
  } else if (diff < 60 * 60 * 24) {
    const hours = Math.floor(diff / (60 * 60));
    return `${hours}小时前`;
  } else if (dayjs(date).isSame(dayjs(), 'day')) {
    return dayjs(date).format('HH:mm');
  } else {
    // const days = Math.floor(diff / (60 * 60 * 24));
    // return `${days}天前`;
    return formatTimeWithoutCurrentYear(date); //dayjs(date).format(format);
  }
}

export function toRound(val: number, num = 2) {
  if (val >= 0) {
    return _.round(val, num);
  } else {
    const abs = Math.abs(val);
    return 0 - _.round(abs, num);
  }
}

export function toThousand(input: string | number, toFixed = 2) {
  const num = toRound(Number(input)).toFixed(toFixed);
  if (Number(num) >= 0) {
    return num.toString().replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
  } else {
    const posNum = (0 - Number(num)).toFixed(2);
    return (
      '-' + posNum.toString().replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    );
  }
}

export function format(date: string | Date, fmt = 'YYYY-MM-DD') {
  return date ? dayjs(date).format(fmt) : '';
}
