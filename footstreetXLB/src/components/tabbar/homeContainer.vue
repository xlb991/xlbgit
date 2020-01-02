<template>
	<div>
    <!-- 轮播图 -->
    <bannermy></bannermy>

    <!-- 六宫格 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photo">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">Email</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/foodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">Chat</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-gear"></span>
                <div class="mui-media-body">Setting</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-info"></span>
                <div class="mui-media-body">about</div></a></li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-more"></span>
                <div class="mui-media-body">more</div></a></li>
    </ul>

	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
  // 导入MUI
  import '../../lib/mui/css/mui.css'
  // 导入MUI的扩展插件包
  import '../../lib/mui/css/icons-extra.css'
  import '../../lib/mui/fonts/mui-icons-extra.ttf'
  // 导入轮播图组件
  import banner from '../banner/bannerCommon.vue'


	export default {
		data(){
			return {
				list: []

			}
		},
		components: {
      'bannermy': banner
    }

  }
</script>

<style lang="scss" scoped="scoped">
  * {
    margin: 0;
    padding: 0;
  }
	.mint-swipe {
    .mint-swipe-items-wrap {
      height: 200px;
    }

		height: 200px;
		.mint-swipe-item {
			img {
				width: 100%;
				height: 100%;
			}

		}

	}
  .mui-grid-view.mui-grid-9 {
    background-color: whitesmoke;
    .mui-table-view-cell {
      border: 0;
    }
  }
</style>
