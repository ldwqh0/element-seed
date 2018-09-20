// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    },
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    CONTEXT_PATH: true
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    'template-curly-spacing': 'off', // 在模板字符串里面里面的变量${ var }的形式，前后是否留空格
    'object-curly-spacing': 'off', // 包裹对象的大括号前后是否留空格
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'indent': 'off'
  }
}
