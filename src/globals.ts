import type { Linter } from 'eslint'

export const browserGlobals: Linter.Globals = {
  document: 'readonly',
  navigator: 'readonly',
  window: 'readonly',
}
