import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { bundleStats } from 'rollup-plugin-bundle-stats';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    bundleStats({
      baseline: true,
      compare: true,
    }),
  ],
});
