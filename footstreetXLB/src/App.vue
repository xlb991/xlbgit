<template>
  <div class="app_content">
	  <!-- 头部 -->
	  <mt-header fixed title="男人街" >
      <span slot="left" @click="goBack" v-show="isflag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>


	  <!-- 中间内容区 -->
    <transition name="move" mode="out-in">
      <!-- <div class="app_content"> -->
        <router-view></router-view>
      <!-- </div> -->
    </transition>



	  <!-- 底部 -->
	  <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-itemdiy" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-itemdiy" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-itemdiy" to="/shoppingCar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart" id="shoppingCar"><span class="mui-badge" id="numberDIY">{{ $store.getters.getCount }}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-itemdiy" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
	  </nav>

  </div>
</template>

<script>

  export default {
    data(){
      return{
        isflag: true

      }
    },
    mounted(){
      this.isflag = this.$route.path == '/home' ? false : true
    },
    methods: {
      goBack(){
        this.$router.go(-1)

      }

    },
    watch: {
      "$route.path": function(nvalue){
        if(nvalue == '/home'){
          console.log("jr")
          this.isflag = false

        }else{
          this.isflag = true
        }
      }
    }

  }

</script>


<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
.app_content {
  .mint-header.is-fixed {
    z-index: 999;
  }

	padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
  .mint-header {
    text-align: center;
    width: 100%;
    background-color: #338FCC;
  }
  .mui-bar-tab .mui-tab-itemdiy.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-itemdiy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-itemdiy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-itemdiy .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

// 界面动画
.move-enter {
  transform: translateX(100%);
  opacity: 0;


}
.move-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  position: absolute;

}
.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
}
</style>
