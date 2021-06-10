module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  globals: {
    env: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'multiline-ternary': 'off',
    'no-undef': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }],
    'vue/singleline-html-element-content-newline': 'off',
    // 是否在html标记中添加空格
    'vue/html-closing-bracket-spacing': [
      'error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }],
    'vue/html-closing-bracket-newline': [
      'error', {
        singleline: 'never',
        multiline: 'never'
      }],
    'vue/html-indent': ['error'],
    // 使用kebab-case模式的组件规则
    'vue/component-name-in-template-casing': [
      'error', 'kebab-case', {
        ignores: []
      }],
    // 'template-curly-spacing': 'off', // 在模板字符串里面里面的变量${ var }的形式，前后是否留空格
    // 'object-curly-spacing': 'off' // 包裹对象的大括号前后是否留空格
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
