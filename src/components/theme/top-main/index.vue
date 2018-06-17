<template>
  <el-container id="app">
    <el-header><a href="javascript:void(0)" @click="switchTheme('left')">主题1</a>
      <el-menu mode="horizontal" router>
        <menu-item v-for="(menu,index) in menus"
                   :key="index"
                   :item="menu"/>
      </el-menu>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>

    <el-footer>
      这是应用底部
    </el-footer>
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
