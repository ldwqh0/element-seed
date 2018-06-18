# element-seed

> 一个基于Es6 class 写法的element-ui种子项目

## 项目构建

``` bash
# 安装依赖
npm install
# 或者使用淘宝镜像安装依赖（中国地区），请勿使用cnpm安装相关依赖，可能会产生一些未知问题
npm i --registry=https://registry.npm.taobao.org

# 启动测试服务器
npm run dev

# 构建项目
npm run build
```

项目使用vue-cli构建，但cli生成的项目不支持webpack4,因此在项目中使用[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)替换掉了[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)  

项目中引入了[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)和[vuex-class](https://github.com/ktsn/vuex-class),可用使用一系列的Decorator来构建Component以及使用decorator处理vuex的库  
引入了[element-datatables](https://github.com/ldwqh0/element-datatables)一个简洁的，服务器表格组件，通过一定的契约和简单的配置即可实现服务端数据展示的表格组件。  
element组件信息请参见[element](http://element.eleme.io)

## 特点
* 基于es6 class的写法，符合面向对象的编程思想
* 基于业务模块的代码拆分，将每个业务模块独立为插件，在项目中挂载插件即可实现增加业务模块的功能，适合团队开发
* 动态主题和布局切换
* 

## 关于模拟数据。
默认支持两种方式的模拟数据
1. 可以修改 build/webpack.dev.conf.js中的devServer相关配置
```javascript
const mockServer = require('./mock-server')
devServer: {
  ...
  before: mockServer //启用改配置
}
```
mock-server.js导出的是一个function,具体的请参考[webpack说明](https://webpack.js.org/configuration/dev-server/#devserver-before)  
2. 修改data/index.js  
这里使用mockjs生成测试数据，具体文档请参考[mockjs文档](http://mockjs.com/)  

mockjs是一个纯前端的ajax拦截组件，如果使用mockjs，在浏览器测试时不会看到任何请求。  
而使用mock-server是使用devServer处理请求，在浏览器端是完整的请求逻辑。
