<template>
  <div>
    <span v-for="i in 100" :key="i">这是模块2的内容<br></span>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Module2 extends Vue {
    mounted () {
      console.dir(this)
    }
  }
</script>
