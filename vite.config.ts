import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/sundspace-website',

  plugins: [nxViteTsPaths(), vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  assetsInclude: ['**/*.obj'],

  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/sundspace-website',
      provider: 'v8',
    },
  },
});
