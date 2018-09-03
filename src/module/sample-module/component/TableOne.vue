<template>
  <ele-datatables :ajax="ajax">
    <el-table-column label="姓名"
                     prop="name"/>
    <el-table-column label="地址"
                     prop="address"/>
    <el-table-column label="日期"
                     prop="date"/>
  </ele-datatables>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import EleDatatables from 'element-datatables/dist/index'

  @Component({
    components: {
      EleDatatables
    }
  })
  export default class TableOne extends Vue {
    ajax = '/table1'
  }
</script>

<style scoped>

</style>
