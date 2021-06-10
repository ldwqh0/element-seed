<template>
  <el-container style="height: 100%;">
    <el-header />
    <el-container>
      <el-aside>
        <el-menu router>
          <el-submenu title="菜单1" index="1">
            <template #title>
              <span>菜单1</span>
            </template>
            <el-menu-item index="1-1" :route="{name:'form'}">表单</el-menu-item>
            <el-menu-item index="1-2" :route="{name:'list'}">列表</el-menu-item>
            <el-menu-item index="1-3" :route="{name:'list2'}">列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class LeftTemplate extends Vue {
  }
</script>

<style scoped>

</style>
