import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' untuk folder 'src'
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // URL backend Express.js
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
