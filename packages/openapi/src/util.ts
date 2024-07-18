/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */
import path from 'path';
import fs from 'fs';
import * as prettier from 'prettier';
import { camelCase, upperFirst } from 'lodash';
import semver from 'semver';
import { getMyNpmLatestVersion as qwe } from './pkg';

const { prettier: defaultPrettierOptions } = require('@umijs/fabric');

const t = '1.0.0';

export const getAbsolutePath = (filePath: string) => {
  if (filePath && !path.isAbsolute(filePath)) {
    return path.join(process.cwd(), filePath);
  }
  return filePath;
};

export const mkdir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    mkdir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
};

export const prettierFile = (content: string): [string, boolean] => {
  let result = content;
  let hasError = false;
  try {
    result = prettier.format(content, {
      singleQuote: true,
      printWidth: 100,
      parser: 'typescript',
      ...defaultPrettierOptions,
      trailingComma: 'es5',
    });
  } catch (error) {
    hasError = true;
  }
  return [result, hasError];
};

export const writeFile = (folderPath: string, fileName: string, content: string) => {
  const filePath = path.join(folderPath, fileName);
  mkdir(path.dirname(filePath));
  const [prettierContent, hasError] = prettierFile(content);
  fs.writeFileSync(filePath, prettierContent, {
    encoding: 'utf8',
  });
  return hasError;
};

export const getTagName = (name: string) => {
  const result = name.split('.');
  // 数据源中的 tag 等同于全量的 op API 名，确定为 4-5 段，如上格式
  // 取中间的 1-2 字段作为 tag，作为 serviceController 创建目录的依据
  if (result.length === 4) {
    return result[2];
  }
  if (result.length === 5) {
    return result[2] + upperFirst(result[3]);
  }
  return name;
};

export const formatApiInfo = (apiInfo: Record<string, any>): any => {
  if (
    !(
      apiInfo &&
      apiInfo.schema.info &&
      apiInfo.schema.info.extensions &&
      apiInfo.schema.info.extensions['x-antTech-description']
    )
  ) {
    // 非 op 数据源，直接返回
    return apiInfo;
  }

  apiInfo.schema.tags = apiInfo.schema.tags.map((item: Record<string, string>) => {
    return {
      ...item,
      name: getTagName(item.name),
    };
  });

  for (const child_path in apiInfo.schema.paths) {
    apiInfo.schema.paths[child_path].post.tags = apiInfo.schema.paths[child_path].post.tags.map(
      (tag: string) => getTagName(tag)
    );
  }

  return apiInfo;
};

type serviceParam = {
  title: string;
  type: string;
  description: string;
  default: string;
  [key: string]: any;
};

type serviceParams = Record<string, serviceParam>;

export function formatParamsForYFH(
  params: serviceParams,
  paramsObject: serviceParams = {}
): serviceParams {
  Object.keys(params).forEach((name) => {
    const prop = params[name];
    let key = name;
    const nameList = name.split('.');
    const nameListLength = nameList.length;

    if (nameListLength === 1) {
      // 正常的 key
      paramsObject[key] = { ...prop };
    } else if (nameListLength === 2 && nameList[1] !== 'n' && nameList[1] !== 'm') {
      const [childKey] = nameList;
      // key.child_key
      const key_child_key = camelCase(nameList[1]);
      paramsObject[childKey] = combineParams(childKey, key_child_key, prop, paramsObject);
    } else {
      // key.n.child_key
      if (nameList[nameListLength - 2] === 'n' || nameList[nameListLength - 2] === 'm') {
        const child_key = camelCase(nameList.pop());
        nameList.pop();
        key = nameList.join('.');
        paramsObject[key] = combineParams(key, child_key, prop, paramsObject, '.n.key');
      } else {
        const child_key = camelCase(nameList.pop());
        key = nameList.join('.');

        // .key.n
        if (child_key === 'n' || child_key === 'm') {
          // .n.key.m
          if (nameList[nameList.length - 2] === 'n' || nameList[nameList.length - 2] === 'm') {
            const child_child_key = camelCase(nameList.pop());
            nameList.pop();
            key = nameList.join('.');
            paramsObject[key] = combineParams(key, child_child_key, prop, paramsObject, '.n.key.m');
          } else {
            prop.type = `${prop.type}[]`;
            paramsObject[key] = { ...prop };
          }
        } else {
          paramsObject[key] = combineParams(key, child_key, prop, paramsObject);
        }
      }
    }

    paramsObject[key].name = camelCase(key);
  });

  const hasInvoke = Object.keys(paramsObject).filter((param) => param.includes('.')).length > 0;

  if (hasInvoke) {
    // 递归
    return formatParamsForYFH(paramsObject);
  }
  return paramsObject;
}

function combineParams(
  key: string,
  child_key: string,
  prop: serviceParam,
  paramsObject: serviceParams,
  type?: string
): serviceParam {
  const typeSuffix = type === '.n.key.m' ? '[]' : '';
  const keySuffix = type === '.n.key' || type === '.n.key.m' ? '[]' : '';
  if (paramsObject[key]) {
    const child_type = `{${child_key}:${prop.type}${typeSuffix}, ${paramsObject[key].type.slice(
      1
    )}`;
    paramsObject[key] = {
      ...paramsObject[key],
      type: child_type,
    };
  } else {
    paramsObject[key] = {
      ...prop,
      type: `{${child_key}:${prop.type}
      }${keySuffix}`,
    };
  }

  return paramsObject[key];
}

export const stripDot = (str: string) => {
  return str.replace(/[-_ .](\w)/g, (_all, letter) => letter.toUpperCase());
};

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class C {
  static v: string;

  static setV(v: string) {
    this.v = v;
  }

  static async init() {
    const lastV = await qwe();
    this.setV(lastV);
  }

  static pan() {
    return semver.lt(this.v, t);
  }
}
