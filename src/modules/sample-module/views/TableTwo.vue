<template>
  <div>
    <el-table ref="multipleTable"
              :data="tableData3"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="address" label="地址" show-overflow-tooltip />
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class TableTwo extends Vue {
    get tableData3 (): any[] {
      const a = []
      for (let i = 0; i < 100; i++) {
        a.push({
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        })
      }
      return a
    }

    multipleSelection = []

    toggleSelection (rows: any): void {
      if (rows) {
        rows.forEach((row: any) => {
          (this.$refs.multipleTable as any).toggleRowSelection(row)
        })
      } else {
        (this.$refs.multipleTable as any).clearSelection()
      }
    }

    handleSelectionChange (val: any): void {
      this.multipleSelection = val
    }
  }
</script>

<style scoped>
</style>
