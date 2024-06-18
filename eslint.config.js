// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'src/samples/*',
      'src/templates/*',
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
    },
  },
)
