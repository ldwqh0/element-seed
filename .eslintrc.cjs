module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-standard'
  ],
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    env: true
  },
  rules: {
    'no-undef': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    'vue/multi-word-component-names': 'off',
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'beside'
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
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
      }]
  }
}
