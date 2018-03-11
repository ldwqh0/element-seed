# element-seed

> 一个基于Es6 class 写法的element-ui种子项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

项目使用vue-cli构建，但cli生成的项目不支持webpack4,因此在项目中使用[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)替换掉了[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)  

项目中引入了[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator),可用使用一系列的Decorator来构建Component  
组件信息请参见[element](http://element.eleme.io)


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
