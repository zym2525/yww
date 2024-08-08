import _ from 'lodash';

export type ValueEnumItem = { [key: string]: any };
export type ValueEnum =
  | ValueEnumItem[]
  | Record<string | number, string>
  | Map<string | number, string>;

export type OptionItem = {
  label: string;
  value: string | number;
  [key: string]: any;
};

export function convertOptions(
  valueEnum: ValueEnum,
  enumLabelKey: string,
  enumValueKey: string,
): OptionItem[] {
  if (_.isArray(valueEnum)) {
    return valueEnum.map(x => ({
      ...x,
      label: x[enumLabelKey],
      value: needConvertValue(x[enumValueKey])
        ? Number(x[enumValueKey])
        : x[enumValueKey],
    }));
  } else if (_.isMap(valueEnum)) {
    return [...valueEnum.keys()].map(x => ({
      value: needConvertValue(x) ? Number(x) : x,
      label: valueEnum.get(x),
    }));
  } else {
    return Object.keys(valueEnum).map(x => ({
      value: needConvertValue(x) ? Number(x) : x,
      label: valueEnum[x],
    }));
  }
}

function needConvertValue(value: any) {
  return !_.isNaN(Number(value)) && !_.isBoolean(value);
}
