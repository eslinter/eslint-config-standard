import path from 'node:path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@eslinter/eslint-config-standard/legacy': path.resolve('src/legacy.ts'),
      '@eslinter/eslint-config-standard': path.resolve('src/index.ts'),
    },
  },
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'text'],
      include: ['src'],
    },
  },
})
