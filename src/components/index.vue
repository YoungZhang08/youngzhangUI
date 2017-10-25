<template>
  <div class="index">
    <iHeader class="iheader"></iHeader>  
    <leftNav class="leftNav"></leftNav>
    <div class="contentWrap"> 
      <router-view></router-view>
    </div>  
  </div>
</template>

<script>

import iHeader from './public/iHeader.vue';
import leftNav from './public/leftNav.vue';
// import content from '../components/content.vue';

export default {
  name: 'index',
  components: {
    iHeader: iHeader,
    leftNav: leftNav,
  }
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
      /* .uiImg{
        float: left;
        width: 10%;
        height: 120px;
        img{
          width: 100%;
          height: 120px;
        }
      }
      .welcome{
        float: left;
        width: 400px;
        height: 30px; 
        margin-top: 40px;
        h1{
          color: #A1ACF1;
        }
      } */
    }
    .leftNav{
      position: absolute;
      left: 0;
      top:120px;
      width: 10%;
      height: 950px;
      color: #A1ACF1;
      background-color: #fff;
      /* div{
        width: 100%;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
      } */
    }
    .contentWrap{
      position: absolute;
      /* overflow: hidden; */
      left: 10%;
      top:120px;
      width:90%;
      height:950px;
      background-color: #A1ACF1;
    }
  }
</style>
