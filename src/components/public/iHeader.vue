<template>
  <div class="header">
    <div class="uiImg">
      <img src="../../assets/images/UI.png" alt="" width="100px" height="100px">
    </div>
    <div class="welcome">
      <h1>Welcome to YoungZhang UI!</h1>
    </div>
  </div>
</template>

<script>

  export default{
    name: 'iHeader',
    data(){
      return {
      }
    },
    methods:{

    }
  }

</script>

<style lang="less">
  .header{
    width: 100%;
    height: 100%;
    .uiImg{
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
    }
  }
</style>
