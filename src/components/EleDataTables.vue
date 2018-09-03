<template>
  <div v-loading="showLoading && loadingCount>0">
    <el-table v-if="!success" :span-method="spanError">
      <slot>发生错误</slot>
    </el-table>
    <el-table :data="tableData"
              v-if="success"
              @select="onSelect"
              @select-all="onSelectAll"
              @selection-change="onSelectionChange"
              @cell-mouse-enter="onCellMouseEnter"
              @cell-mouse-leave="onCellMouseLeave"
              @cell-click="onCellClick"
              @cell-dblclick="onCellDblclick"
              @row-click="onRowClick"
              @row-contextmenu="onRowContextmenu"
              @row-dblclick="onRowDblclick"
              @header-click="onHeaderClick"
              @header-contextmenu="onHeaderContextmenu"
              @sort-change="onSortChange"
              @filter-change="onFilterChange"
              @current-change="onCurrentChange"
              @header-dragend="onHeaderDragend"
              @expand-change="onExpandChange"
              :span-method="spanMethod">
      <slot>暂无数据</slot>
    </el-table>
    <el-row>
      <el-col :span="24" style="text-align: right;">
        <slot name="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            :layout="paginationLayout"
            :total="total"/>
        </slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElRow from 'element-ui/lib/row'
  import ElCol from 'element-ui/lib/col'
  import ElTable from 'element-ui/lib/table'
  import ElPagination from 'element-ui/lib/pagination'
  import VLoading from 'element-ui/lib/loading'

  const qs = require('qs')
  const $http = axios.create()

  // 由于axios中，对于对象的处理可能不太好，用QS翻译一下
  function transelateAjax (ajax) {
    let ajax_ = {...ajax}
    if (ajax.method === 'post') {
      ajax.data = ajax.params
      delete ajax.params
    }
    if (ajax.params && qs) {
      // 如果qs库存在，将数据使用qs库转码
      let qs_ = qs.stringify(ajax.params, {arrayFormat: 'repeat'})
      ajax_.url = `${ajax_.url}?${qs_}`
      delete ajax_.params
    }
    return ajax_
  }

  // let draw = 0 // 定义变量，标记draw
  /**
   * 一个表格组件，在组件内部实现分页和数据请求逻辑,
   * 如过你要在你的程序中设置表格条件，可以先设置serverParams,然后再设置ajax属性，这样就不会重复发送请求了
   */
  export default {
    components: {
      ElRow, ElCol, ElTable, ElPagination
    },
    directives: {
      VLoading
    },
    props: {
      data: {
        default: () => null,
        type: Array
      },
      ajax: {
        default: () => null,
        type: [String, Object]
      },
      serverParams: {
        default: () => {},
        type: Object
      },
      showLoading: {
        default: () => true,
        type: Boolean
      },
      paginationLayout: {
        default: () => 'total, prev, pager, next',
        type: String
      }
    },
    name: 'EleDataTables',
    data () {
      return {
        draw: 0,
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total: 0,
        loadingCount: 0,
        success: true,
        errorMsg: 'error',
        maxColumnIndex: 0
      }
    },
    created () {
      // 载入数据
      this.reloadData()
    },
    computed: {},
    methods: {
      onSelect (selection, row) {
        this.$emit('select', selection, row)
      },
      onSelectAll (selection) {
        this.$emit('select-all', selection)
      },
      onSelectionChange (selection) {
        this.$emit('selection-change', selection)
      },
      onCellMouseEnter (row, column, cell, event) {
        this.$emit('cell-mouse-enter', row, column, cell, event)
      },
      onCellMouseLeave (row, column, cell, event) {
        this.$emit('cell-mouse-leave', row, column, cell, event)
      },
      onCellClick (row, column, cell, event) {
        this.$emit('cell-click', row, column, cell, event)
      },
      onCellDblclick (row, column, cell, event) {
        this.$emit('cell-dblclick', row, column, cell, event)
      },
      onRowClick (row, event, column) {
        this.$emit('row-click', row, event, column)
      },
      onRowContextmenu (row, event) {
        this.$emit('row-contextmenu', row, event)
      },
      onRowDblclick (row, event) {
        this.$emit('row-dblclick', row, event)
      },
      onHeaderClick (column, event) {
        this.$emit('header-click', column, event)
      },
      onHeaderContextmenu (column, event) {
        this.$emit('header-contextmenu', column, event)
      },
      onSortChange ({column, prop, order}) {
        this.$emit('sort-change', {column, prop, order})
      },
      onFilterChange (filters) {
        this.$emit('filter-change', filters)
      },
      onCurrentChange (currentRow, oldCurrentRow) {
        this.$emit('current-change', currentRow, oldCurrentRow)
      },
      onHeaderDragend (newWidth, oldWidth, column, event) {
        this.$emit('header-dragend', newWidth, oldWidth, column, event)
      },
      onExpandChange (row, expandedRows) {
        this.$emit('expand-change', row, expandedRows)
      },
      handleSizeChange (v) {
        this.pageSize = v
        this.reloadData()
      },
      handleCurrentChange (v) {
        this.reloadData()
      },
      spanError ({row, column, rowIndex, columnIndex}) {
        if (this.maxColumnIndex < columnIndex) {
          this.maxColumnIndex = columnIndex
        }
        if (columnIndex === 0) {
          column.align = 'is-center'
          row[column.property] = this.errorMsg
          return [1, this.maxColumnIndex + 1]
        } else {
          return [1, 0]
        }
      },
      spanMethod (obj) {
        // console.log(obj)
      },
      reloadLocalData () {
        let total = this.total = this.data.length
        let max = this.pageSize * this.currentPage
        max = max > total ? total : max
        let result = []
        for (let i = (this.currentPage - 1) * this.pageSize; i < max; i++) {
          result.push(this.data[i])
        }
        this.$set(this, 'tableData', result)
      },
      reloadAjaxData () {
        let ajax = {
          url: '',
          method: 'get'
        }
        let draw = {draw: ++this.draw}
        if (typeof (this.ajax) === 'string') {
          ajax.url = this.ajax
          ajax.params = {...draw, ...this.serverParams, page: this.currentPage - 1, size: this.pageSize}
        } else {
          if (!this.ajax.url) {
            throw new Error('ajax url can not be empty')
          }
          ajax = {...ajax, ...this.ajax}// 如果ajax是个对象，进行合并
          // 无论如何，draw,page,size这三个参数一直作为params发送
          let params = {...draw, page: this.currentPage - 1, size: this.pageSize}
          ajax.params = {...params, ...this.ajax.params}

          if (ajax.method === 'get') {
            // 如果是get请求,将数据作为params发送
            ajax.params = {...this.serverParams, ...this.ajax.params, ...params}
          } else {
            // 如果是其它请求类型，将serverParams作为data发送
            ajax.data = {...this.serverParams, ...this.ajax.data}
          }
        }
        if (!ajax.url) {
          console.debug('url不存在！不读取数据')
        } else {
          console.debug('ajax from url', ajax.url)
          this.loadingCount++
          $http(transelateAjax(ajax)).then(response => {
            response = response.data
            if (response.success && +response.draw === this.draw) {
              this.total = response.recordsTotal
              this.tableData = response.data
              this.success = true
            } else {
              this.success = false
              this.tableData = [{}]
              this.errorMsg = response.error
            }
          }).catch(e => {
            this.success = false
            this.tableData = [{}]
            console.error('从服务器获取数据时出错', e)
          }).finally(() => {
            this.loadingCount--
          })
        }
      },
      reloadData () {
        if (this.data) {
          this.reloadLocalData()
        } else if (this.ajax) {
          this.reloadAjaxData()
        }
      }
    },
    watch: {
      data () {
        this.reloadLocalData()
      },
      serverParams: {
        deep: true,
        handler (newVal, oldVal) {
          this.currentPage = 1
          this.reloadAjaxData()
        }
      },
      ajax (newVal, oldVal) {
        this.currentPage = 1
        this.reloadAjaxData()
      }
    }
  }
</script>
