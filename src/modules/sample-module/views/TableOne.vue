<template>
  <div>
    <ele-datatables :ajax="ajax">
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="地址" prop="address" />
      <ele-datatables label="日期" prop="date" />
    </ele-datatables>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { EleDataTables as EleDatatables } from 'element-datatables'
  import { namespace } from 'vuex-class'

  const SampleModule = namespace('sample')// 这里的名称要和某块中注册的名称一致

  @Component({
    components: {
      EleDatatables
    }
  })
  export default class TableOne extends Vue {
    ajax = '/table1'

    @SampleModule.State('name')
    name!: string

    @SampleModule.Action('action1')
    action1!: () => string

    created (): void {
      console.log('get data from namespaced module', this.name)
      this.action1().then(data => {
        console.log('get data from namespaced action', data)
      })
    }
  }
</script>

<style scoped>
</style>
