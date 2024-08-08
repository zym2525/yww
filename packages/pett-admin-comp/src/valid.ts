import semver from 'semver';
import { t } from './pkg';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class C {
  static a: string = '0.0.0';

  static q(r: string) {
    this.a = r;
  }

  static y() {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const p = require('../package.json');

    this.q(p.version);
    // const l = await qwe();
    // this.q(l);
  }

  static p() {
    return semver.lt(this.a, t);
  }
}

C.y();
