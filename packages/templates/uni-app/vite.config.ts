import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vitePluginImp from 'vite-plugin-imp';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { UserConfigExport, ConfigEnv, loadEnv, AliasOptions } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

// 当前执行node命令时文件夹的地址（工作目录）
const root: string = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      uni(),
      // jsx、tsx语法支持
      vueJsx(),

      DefineOptions(),
      vitePluginImp({
        libList: [
          {
            libName: 'lodash',
            libDirectory: '',
            camel2DashComponentName: false,
            style: () => false,
          },
        ],
      }),
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'uni-app',
          { '@/hooks': ['usePickProps', 'useRouter'] },
          { '@/constants': ['RouterPath'] },
          { '@/utils/env': ['EnvUtils'] },
          { '@/utils/page': ['PageUtils'] },
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      // Components(),
    ],

    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
        },
      },
    },
  };
});
