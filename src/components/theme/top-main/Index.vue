<template>
  <el-container id="app">
    <el-header>
      <el-row>
        <el-col :span="12">
          <h2>xz element-seed template</h2>
        </el-col>
        <el-col :span="12">
          <el-menu mode="horizontal" router>
            <menu-item v-for="(menu,index) in menus" :key="index" :item="menu" />
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
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
  export default class index extends Vue {
    @Mutation('switchTheme')
    switchTheme

    @State('menus')
    menus
  }
</script>

<style scoped>
</style>
