# 项目说明

这是一个Vue 2.x的模板项目. 他不同于常见项目，它支持以下特性

* ts和js的混合编译，你可以在你的项目中根据自己的习惯选择使用ts/js开始你的项目,或者一部分使用js写，一部分使用ts写，这没有任何影响
* 引入了vue-property-decorator,使你可以自用的使用 class语法构建组件，当然这不是必须的
* 编译时直接输出*.gz文件，可以直接用于nginx开启static gzip
* 去掉了sass依赖，那个东西在国内安装很容易出错，样式尽量使用less
* 暂时不支持jsx，后续考虑加入

## 如何将项目发布到特定的目录

在某些情况下，我们会在某个静态目录下发布多个应用，这就要求我们在开发时指定要发布的目录，这样webpack在打包时才能准确的知道相关的目录信息，以便生成对应的路径。

在该项目中 **通过指定CONTEXT_PATH环境变量来实现该值的修改**
提供两种模式修改该值

* 修改package.json 在dev和build脚本后面增加 --env CONTEXT_PATH=/path/参数
* 修改config/env.mjs CONTEXT_PATH的值

还有别的地方可以修改该值，比如修改webpack.config.mjs源码，但不建议执行该操作

## config目录下文件配置说明

* env.mjs 配置环境变量
* proxy_dev.mjs 反向代理配置
* webpack.config.dev.mjs 开发环境的webpack配置
* webpack.config.prod.mjs 生产环境的webpack配置

## 项目结构

项目中增加了一个业务模块的概念，一个业务模块是相关业务一套视图，业务组件，自己的路由，自己的vuex等的集合，模块将自己打包成一个插件 在项目入口处通过Vue.use()
将模块功能引用到项目中。模块在自己的目录下管理路由和vuex.理论上各个模块互不干扰，但可能会存在相互依赖，需要通过某种方式解耦。

业务模块统一放在项目的modules目录下

主项目提供基本的路由的vuex状态，各个业务组件通过模块路由和vuex动态注册的方式，将自己的路由和vuex添加到应用中

## 关于打包和发布

项目打包后会将构建好的目录生成到 dist 目录下。如果项目的CONTEXT_PATH=/ 将目录下的文件和子文件加发布到web服务器的根目录即可

如果项目的CONTEXT_PATH 是一个特定的值，需要将dist目录下的文件子文件等发布到服务器上对应的目录

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

