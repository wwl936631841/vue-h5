module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'handle-callback-err': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: 'off',
    'no-new': 'off',
    'vue/no-v-html': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-useless-escape': 'off',
    'standard/no-callback-literal': 'off',
    'no-return-assign': 'off',
    'no-useless-call': 'off',
    'eol-last': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
