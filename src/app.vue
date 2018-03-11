<template>
  <el-container id="app">
    <el-header>这是头部</el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <el-menu router>
          <el-menu-item index="1" route="/">模块1</el-menu-item>
          <el-menu-item index="2" route="/m2">模块2</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <el-footer>
      这是应用底部
    </el-footer>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component()
  export default class app extends Vue {
    name = 'App'
  }
</script>
<style lang="less">
  @import "./style/themes/default.less";

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
