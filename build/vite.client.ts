import { defineConfig } from 'vite';
import env from '../config/env';
import { resolve } from 'path';

const proxy = {
  '^/api': {
    target: 'http://127.0.0.1:20010',
    changeOrigin: true,
  },
}

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, '../')
    }
  },
  css: {
    modules: {
      generateScopedName: '[local]-[hash:6]',
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
  },
  server: { proxy },
  preview: { proxy },
  base: env.BASE_URL || '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(url) {
          if (url.includes('node_modules')) {
            return url.split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
    assetsInlineLimit: 0,
  }
})
