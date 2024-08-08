/* eslint-disable @typescript-eslint/restrict-plus-operands */
export function columnSum(values: any[]) {
  if (!values.every(value => Number.isNaN(value))) {
    return `${values.reduce((prev, curr) => {
      const value = Number(curr);
      if (!Number.isNaN(value)) {
        return prev + curr;
      } else {
        return prev;
      }
    }, 0)}`;
  } else {
    return '';
  }
}

export interface ModuleColumnDto {
  id?: string;
  moduleId?: string;
  parentId?: string;
  enCode?: string;
  name?: string;
  sortCode?: number;
  description?: string;
  width?: number;
  hasCheck?: boolean;
  fixed?: boolean | 'left' | 'right';
  needTips?: boolean;
  isShow?: boolean;
}

export interface SummaryMethodProps<T = ModuleColumnDto> {
  columns: any[];
  data: T[];
}

type SummaryPropertysItem =
  | string
  | {
      property: string;
      valueKey?: string;
      unit?: string;
      formatter?: (value: number) => string;
    };

export type SummaryMethodOptions = {
  summaryPropertys?: SummaryPropertysItem[];
  objectData?: Record<string, any>;
};

export const summaryMethod = (
  param: SummaryMethodProps,
  options: SummaryMethodOptions = {},
) => {
  const { columns, data } = param;
  const { summaryPropertys = [], objectData } = options;
  const sums = [];
  if (!summaryPropertys.length) {
    return sums;
  }
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    const propertyItem = summaryPropertys.find(item => {
      if (typeof item === 'string') {
        return column.property === item;
      } else if (item.property === column.property) {
        return true;
      }
      return false;
    });
    if (propertyItem) {
      if (typeof propertyItem === 'string') {
        const values = data.map(item => Number(item[column.property]));
        sums[index] = `${columnSum(values)}`;
      } else {
        let v;
        if (propertyItem.valueKey) {
          v = objectData?.[propertyItem.valueKey] ?? '';
        } else {
          const values = data.map(item => Number(item[propertyItem.property]));
          v = columnSum(values);
        }
        // sums[index] = `${summaryUseThousand ? toThousand(v) : v}${propertyItem.unit ?? ''}`;
        sums[index] = propertyItem.formatter ? propertyItem.formatter(v) : v;
      }
    } else {
      sums[index] = '';
    }
  });
  return sums;
};
