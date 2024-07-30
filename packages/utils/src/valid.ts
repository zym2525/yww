import semver from 'semver';
import { t } from './pkg';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class C {
  static v: string;

  static setV(v: string) {
    this.v = v;
  }

  static async init() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const p = require('../package.json');
    this.setV(p.version);
  }

  static pan() {
    return semver.lt(this.v, t);
  }
}
