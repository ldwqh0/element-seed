module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          'modules': false,
          'targets': {
            'browsers': [
              '> 1%',
              'last 2 versions',
              'not ie <= 8'
            ]
          },
          'useBuiltIns': 'entry'
        }
      ]
    ],
    plugins: [
      [
        'component',
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }
      ],
      // 在babel转码的时候，有些语法会转换为一些特殊函数，这个插件提供了这些公共函数，用以解决打包之后的体积
      '@babel/plugin-transform-runtime',
      // 这个插件编译@import('')语法
      '@babel/plugin-syntax-dynamic-import',
      // 处理对象的解构语法，即{...a}模式
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          'loose': true
        }
      ],
      // 处理decorators语法
      [
        '@babel/plugin-proposal-decorators',
        {
          // export写在@decorators的前面
          // @decorator
          // export class Foo {}
          // 否则就是 export @decorator class Bar {} 这种模式
          // 'decoratorsBeforeExport': true,

          // 必须设置legacy为true,不然vue报错,编译能通过，但会发生运行时错误，提示组件属性无效
          // 项目使用了vue-property-decorator模式导致的
          'legacy': true
        }
      ],
      // 处理类的属性语法
      [
        '@babel/plugin-proposal-class-properties',
        {
          // 使用哪种方式定义对象的属性，如果loose为true,使用
          // var Bork = function Bork() {
          //   babelHelpers.classCallCheck(this, Bork);
          //   this.x = 'bar';
          //   this.y = void 0;
          // };
          // 的模式增加属性，
          // 否则使用Object.defineProperty的模式附加属性
          // 项目使用了vue-property-decorator模式，必须使用loose模式
          'loose': true
        }
      ],
      // 处理 export module from 'xxx'语法
      '@babel/plugin-proposal-export-default-from',
      // 处理 export * as ns from 'mod' 语法
      '@babel/plugin-proposal-export-namespace-from',
      // 处理带分隔符的数字
      '@babel/plugin-proposal-numeric-separator'
    ]
  }
}
