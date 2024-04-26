import {generateService} from '../src';
import fse from 'fs-extra';

const serversFolder='./services';

if (!fse.existsSync(serversFolder)) {
    fse.mkdirSync(serversFolder);
  }

generateService({
    requestLibPath: "import { request } from '@/utils/request'",
    schemaPath: "http://localhost:57235/swagger/v1/swagger.json",
    serversPath: './services',
    mockFolder: '',
})