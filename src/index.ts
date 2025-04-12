import { type Linter } from 'eslint'
import pluginImportX, { createNodeResolver } from 'eslint-plugin-import-x'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import globals from 'globals'

import { browserGlobals } from './globals.js'

const config: Linter.Config = {
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },

    globals: {
      ...globals.builtin,
      ...globals.node,
      ...browserGlobals,
    },
  },

  plugins: {
    n: pluginN,
    promise: pluginPromise,
    // @ts-expect-error `eslint-plugin-import-x` using `@typescript-eslint/utils` is stricter
    'import-x': pluginImportX,
  },

  settings: {
    'import-x/resolver-next': [createNodeResolver()],
  },
}

export const { languageOptions, plugins, settings } = config

export { rules } from './rules.js'
