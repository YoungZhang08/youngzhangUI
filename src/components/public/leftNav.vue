<template>
  <div class="navigation">
    <div class="navDiv">
      <router-link to="layout">布局</router-link>
    </div>
    <div class="navDiv">
      <router-link to="navGuard">导航栏</router-link>
    </div>
    <div class="navDiv">
      <router-link to="goTop">返回顶部</router-link>
    </div>
    <div class="navDiv">
      <router-link to="selFrame">select选择框</router-link>
    </div>
    <div class="navDiv">
      <router-link to="popUp">弹窗</router-link>
    </div>
    <div class="navDiv">
      <router-link to="slide">轮播图</router-link>
    </div>
  </div>
</template>

<script>
 
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
      color: #A1ACF1;
      background-color: white;
    }
    div:hover{
      background-color: #A1ACF1;
    }
    div:hover a{
      color: white;
    }
    a{
      color: #A1ACF1;
      text-decoration-line: none;
    }
  }
</style>
