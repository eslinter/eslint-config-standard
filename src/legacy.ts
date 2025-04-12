import type { Linter } from 'eslint'

import { browserGlobals } from './globals.js'

const config = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es2024: true,
    node: true,
  },

  globals: browserGlobals,

  plugins: ['import-x', 'n', 'promise'],

  settings: {
    'import-x/resolver': {
      typescript: true,
    },
  },
} as const satisfies Linter.BaseConfig

export const { parserOptions, env, globals, plugins, settings } = config

export { rules } from './rules.js'
