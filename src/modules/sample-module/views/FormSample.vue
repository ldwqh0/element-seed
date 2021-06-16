<template>
  <el-form ref="ruleForm"
           :model="ruleForm"
           :rules="rules"
           label-width="100px"
           class="demo-ruleForm">
    <in-component :value="result" />

    <el-form-item label="活动名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker v-model="ruleForm.date1"
                          type="date"
                          placeholder="选择日期"
                          style="width: 100%;" />
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker v-model="ruleForm.date2"
                          type="fixed-time"
                          placeholder="选择时间"
                          style="width: 100%;" />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="美食/餐厅线上活动" name="type" />
        <el-checkbox label="地推活动" name="type" />
        <el-checkbox label="线下主题活动" name="type" />
        <el-checkbox label="单纯品牌曝光" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="线上品牌商赞助" />
        <el-radio label="线下场地免费" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import http from '@/http'
  import InComponent from './InComponent.vue'

  // 使用Component 将一个类声明为组件

  @Component({
    // 用到的局部components,等同于vue的components属性，格式也表示一致
    components: {
      // 这个写法等同于 InComponent:InComponent,
      InComponent
      // 如果要给组件改名，可以使用 Rename:InComponent的方式，修改组件在当前页面中的命名
    }
  })
  export default class FormSample extends Vue {
    // ES6中的属性，等同于vue的data中的某个值，有多个属性，直接在下面写就行了
    ruleForm = {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    }

    // 继续写的属性
    title = ''
    // 表单验证的属性
    rules = {
      name: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      region: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
      date1: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
      ],
      type: [
        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
      ],
      resource: [
        { required: true, message: '请选择活动资源', trigger: 'change' }
      ],
      desc: [
        { required: true, message: '请填写活动形式', trigger: 'blur' }
      ]
    }

    // ES6中的类的属性，参考 https://es6.ruanyifeng.com/#docs/class
    // 在vue中当做data使用
    // 在es6中，如果某个属性只有get而没有set，代表它是一个只读属性
    // 在class 组件中，只读属性等价于 computed
    get result (): string {
      return this.ruleForm.name + new Date()
    }

    // 生命周期
    created (): void {
      console.log('这个是created声明周期,声明周期直接使用生命周期的名称，写到类体里面就行了')
    }

    // methods 定义,Es6中的类方法，等同于vue中的methods
    // 这个是typescript的类声明写法，不用ts的话忽略掉类型声明，返回值声明和类型强转即可
    submitForm (formName: string/* 参数类型声明 */): void/* 函数返回值声明 */ {
      (this.$refs[formName] as any/* 类型转 */).validate()
        .then(() => http.post('/a/b', this.ruleForm))
        .then(() => alert('submit!'))
        .catch((e: any) => {
          alert(`提交错误${e}`)
        })
    }

    resetForm (formName: string): void {
      (this.$refs[formName] as any).resetFields()
    }
  }
</script>

<style scoped>
</style>
