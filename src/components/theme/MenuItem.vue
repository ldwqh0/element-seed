<template>
  <el-submenu v-if="item.submenus && item.submenus.length>0"
              :index="item.id+''">
    <template slot="title">
      {{ item.title }}
    </template>
    <menu-item v-for="(submenu,index) in item.submenus"
               :item="submenu"
               :key="index"/>
  </el-submenu>
  <el-menu-item v-else
                :route="item.href"
                :index="item.id+''">
    <template slot="title">
      {{ item.title }}
    </template>
  </el-menu-item>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component({
    name: 'menu-item'
  })
  export default class MenuItem extends Vue {
    @Prop({default: () => {}})
    item
  }
</script>

<style scoped>

</style>
