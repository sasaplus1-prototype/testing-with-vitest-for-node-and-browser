import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./index.test.ts'],
    sourcemaps: true,
  }
});
