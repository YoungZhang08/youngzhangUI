<template>
  <div class="index">
    <div class="iHeader">
      <img src="../assets/images/UI.png" alt="" width="100px" height="100px">
      <h1>Welcome to YoungZhang UI!</h1>
    </div>
    <div class="leftNav">
      <div class="layout">布局</div>
      <div class="nav">导航栏</div>
      <div class="goTop">返回顶部</div>
      <div class="selec">select选择框</div>
      <div class="popUp">弹窗</div>
      <div class="slide">滑块</div>
    </div>
    <div class="contentWrap"> 
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'index',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "less">
  .index{
    position: relative;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    .iHeader{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 120px;
      background-color: #fff;
      z-index: 999;
      img{
        width: 8%;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0;
      }
      h1{
        color: #A1ACF1;
        margin-top: 40px;
      }
    }
    .leftNav{
      position: absolute;
      left: 0;
      top:120px;
      width: 10%;
      height: 950px;
      color: #A1ACF1;
      background-color: #fff;
      div{
        width: 100%;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
      }
    }
    .contentWrap{
      position: absolute;
      left: 10%;
      top:120px;
      width:90%;
      height:950px;
      background-color: #A1ACF1;
    }
  }
</style>
