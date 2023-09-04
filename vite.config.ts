/// <reference types="vitest" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
