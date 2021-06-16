<template>
  <div>一个内部组件 可以传入属性 传入的属性值是 【{{ value }}】</div>
</template>

<script>
  import { Component, Mixins, Prop, Vue } from 'vue-property-decorator'

  // Mixins等同于vue的mixins,用于组件混入
  @Component
  export default class InComponent extends Mixins(Vue) {
    // 声明一个属性，等同于vue里面的props,如果组件里面有多个属性，直接往下面写就行了
    @Prop({
      required: false,
      default: () => '没有配置值'
    })
    value
  }
</script>

<style scoped>

</style>
