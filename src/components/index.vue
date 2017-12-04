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
import layout from './layout/layout.vue';
import navGuard from './navGuard/navGuard.vue';
import popUp from './popUp/popUp.vue';
import selFrame from './selFrame/selFrame.vue';
import slide from './slide/slide.vue';
import goTop from './goTop/goTop.vue';

export default {
  name: 'index',
  components: {
    iHeader: iHeader,
    leftNav: leftNav,
    layout: layout,
    navGuard: navGuard,
    popUp: popUp,
    selFrame: selFrame,
    slide: slide,
    goTop: goTop
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
    }
    .leftNav{
      position: absolute;
      left: 0;
      top:120px;
      width: 10%;
      height: 950px;
      color: #A1ACF1;
      background-color: #fff;
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
