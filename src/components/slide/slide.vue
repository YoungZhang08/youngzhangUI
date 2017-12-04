<template>
  
  <div class="slide" id="slide" v-el:sliders>
    <div id="slide_img" class="slide_img" v-for="item in items" track-by="$index" v-show="$index===this.currentIndex">
      <img v-bind:src="item.src" id="i_img" class="i_img" v-el:"i_img">
    </div>
  </div>
  
</template>

<script>
  
  export default{
    name: 'slide',
    data:function(){
      return {
        items: [{
          src: '../assets/images/bg1.png'
        }, {
          src: '../assets/images/bg2.png'
        }, {
          src: '../assets/images/bg3.png'
        }],
        currentIndex: 0,
        timer: null,
        hasStarted: false,
        speed: 6000,
        time: null,
        $slider: [],
      }
    },
    ready: function(){
      this.init();
      this.$slider = this.$els.sliders.children;
    },
    methods:{
      init: function() {
        this.start();
      },
      toggle: function(index) {
        var that = this;
        that.stop();
        clearTimeout(that.time);
        that.time = setTimeout(function() {
          var preIndex = that.currentIndex;
          that.currentIndex = index;
          if (preIndex !== that.currentIndex) {
            that.play(preIndex, that.currentIndex);
          } else {
            that.stop();
          }
        }, 500);
      },
      leave: function() {
        this.start();
      },
      pause: function() {
        this.stop();
      },
      start: function() {
        if (!this.hasStarted) {
          this.hasStarted = true;
          this.timer = setInterval(this.next, this.speed);
        }
      },
      pre: function() {
        var preIndex = this.currentIndex;
        this.currentIndex = (--this.currentIndex + this.isLength) % this.isLength;
        this.play(preIndex, this.currentIndex);
      },
      next: function() {
        var preIndex = this.currentIndex;
        this.currentIndex = (++this.currentIndex) % (this.isLength);
        this.play(preIndex, this.currentIndex);
      },
      play: function(preIndex, currentIndex) {
        this.fadeOut(preIndex);
        this.fadeIn(this.currentIndex);
      },
      stop: function() {
        clearInterval(this.timer);
        this.hasStarted = false;
      },
      fadeIn: function(index) {
        var element = this.$slider[index];
        element.style.opacity = 0;
        var last = +new Date();
        var tick = function() {
          element.style.opacity = +element.style.opacity + (new Date() - last) / 3000;
          last = +new Date();
          if (+element.style.opacity < 1) {
            setTimeout(tick, 16);
          }
        };
        tick();
      },
      fadeOut: function(index) {
        var element = this.$slider[index];
        element.style.opacity = 1;
        var last = +new Date();
        var tick = function() {
          element.style.opacity = +element.style.opacity - (new Date() - last) / 3000;
          last = +new Date();
          if (+element.style.opacity > .2) {
            setTimeout(tick, 16);
          }
        }
        tick();
      }
    },
    // computed:function(){
    //   isLength: function() {
    //     return this.items.length;
    //   }
    // }
  }

</script>

<style>
  .slide{
    width: 100%;
    height: 100%;
    background-color: pink;
  }
</style>
