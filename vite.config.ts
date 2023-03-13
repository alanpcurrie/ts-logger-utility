import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    disabled: false,
  },
  test: {
    globals: true,
    mockReset: true,
  },
});