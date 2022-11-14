import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src/') },
      { find: '@core', replacement: path.resolve(__dirname, 'src/core/') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features/') },
      { find: '@layout', replacement: path.resolve(__dirname, 'src/layout/') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared/') },
      { find: '@state', replacement: path.resolve(__dirname, 'src/state/') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets/') }
    ]
  }
});
