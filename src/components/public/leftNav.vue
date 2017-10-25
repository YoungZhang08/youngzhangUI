<template>
  <div class="navigation">
    <div class="layout">布局</div>
    <div class="nav">导航栏</div>
    <div class="goTop">返回顶部</div>
    <div class="selec">select选择框</div>
    <div class="popUp">弹窗</div>
    <div class="slide">滑块</div>
  </div>
</template>

<script>
  // import iHeader from './iHeader.vue';
 
  export default{
    name: 'leftNav',
    data(){
      return {
      }
    },
    methods:{

    }
  }

</script>

<style lang="less">
  .navigation{
    width: 100%;
    height: 100%;
    div{
      width: 100%;
      height: 40px;
      font-size: 16px;
      line-height: 40px;
    }
  }
</style>
