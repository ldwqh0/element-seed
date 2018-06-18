<template>
  <el-form>
    <el-select v-model="theme">
      <el-option v-for="(item,index) in options"
                 :label="item.label"
                 :value="item.value"
                 :key="index"/>
    </el-select>
  </el-form>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { Mutation } from 'vuex-class'

  @Component
  export default class ThemeSwitch extends Vue {
    options = [{
      value: 'left',
      label: '左右布局'
    }, {
      value: 'top',
      label: '上下布局'
    }]

    get theme () {
      return this.$store.state.theme
    }

    @Mutation('switchTheme')
    switchTheme

    set theme (theme) {
      this.switchTheme(theme)
    }
  }
</script>

<style scoped>

</style>
