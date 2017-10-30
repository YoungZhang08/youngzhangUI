<template>
  <div id="slide" class="slide" v-el:slides style="background-color:rgb(0,0,0);">
    <div id="slide_img" class="silde_img">
      <img v-bind:src="item.src" alt="">
    </div>
  </div>
</template>


<script>
  
  export default{
    name: 'slide',
    data(){
      return {
        // items: [{
        //   src:''
        // },{
        //   src:''
        // },{
        //   src:''
        // },{
        //   src:''
        // }],
        // currentIndex: 0,
        // timer: null,
        // hasStarted: false,
        // speed: 6000,
        // time: null,
        // $slide: [],
      }
    },
    // ready(){
    //   this.$slide = this.$els.slides.children;
    // },
    methods:{

    }
  }

</script>

<style lang = "less">

</style>
