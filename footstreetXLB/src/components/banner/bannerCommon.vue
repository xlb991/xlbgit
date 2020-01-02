<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750">
            <p class="mui-slider-title">来份包，饱饱的</p>
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114">
            <p class="mui-slider-title">今日你饮作没</p>
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750">
            <p class="mui-slider-title">静心养心</p>
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750">
            <p class="mui-slider-title">透心凉，来份瓜</p>
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750">
            <p class="mui-slider-title">来份包，饱饱的</p>
          </a>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114">
            <p class="mui-slider-title">今日你饮作没</p>
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator mui-text-right">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入mui.js
  import mui from '../../lib/mui/js/mui.js'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      // 轮播图初始化
      var slider = mui("#slider");
      slider.slider({
        interval: 5000
      });
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .mui-content {
    z-index: -999999999;
    img {
      width: 100%;

    }
  }
</style>
