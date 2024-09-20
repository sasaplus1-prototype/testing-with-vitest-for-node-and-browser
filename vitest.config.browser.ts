import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: {
    include: ['util']
  },
  resolve: {
    alias: {
      'node:util': require.resolve('util')
    }
  },
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    include: ['./index.test.ts'],
    sourcemaps: true,
  }
});
