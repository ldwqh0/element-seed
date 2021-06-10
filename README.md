# 项目说明

这是一个Vue 2.x的模板项目. 他不同于常见项目，它支持以下特性

* ts和js的混合编译，你可以在你的项目中根据自己的习惯选择使用ts/js开始你的项目,或者一部分使用js写，一部分使用ts写，这没有任何影响
* 引入了vue-property-decorator,使你可以自用的使用 class语法构建组件，当然这不是必须的
* 编译时直接输出*.gz文件，可以直接用于nginx开启static gzip
* 去掉了sass依赖，那个东西在国内安装很容易出错，样式尽量使用less
* 暂时不支持jsx，后续考虑加入

## Project setup

```
npm install --force
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

