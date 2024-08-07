import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
  buildConfig: {
    format: 'cjs',
    minify: {
      compress: {
        drop_console: true,
      },
    },
  },
});
