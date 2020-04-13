<template>
  <el-container id="app">
    <el-header>
      <el-row>
        <el-col :span="12">
          <h2>xz element-seed template</h2>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside style="width: 200px;">
        <el-menu router>
          <menu-item v-for="(menu,index) in menus" :key="index" :item="menu" />
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Mutation, State } from 'vuex-class'
  import MenuItem from '../MenuItem'

  @Component({
    components: {
      MenuItem
    }
  })
  export default class Index extends Vue {
    @Mutation('switchTheme')
    switchTheme

    @State('menus')
    menus
  }
</script>

<style scoped>
</style>
<style lang="less">
  html,
  body,
  #app {
    height: 100%;
  }

  body {
    margin: 0;
  }
</style>
