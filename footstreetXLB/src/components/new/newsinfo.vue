<template>
  <div class="newsBox">
    <!-- 头部 -->
    <h3>{{ sellserInfo.name }}</h3>
    <br />
    <!-- 头部标题 -->
    <div class="nBoxTitle">
      <span>{{ sellserInfo.infos[0] }}</span>
      <span>访问次数：{{ sellserInfo.sellCount }}</span>
    </div>
    <hr />
    <div class="fontIndex">
      <p>{{ sellserInfo.bulletin }}</p>
    </div>

    <!-- 图片区域 -->
    <div class="nBoxTop">
      <ul>
        <li v-for="imgList in img" >
          <img :src="imgList"  />
        </li>
      </ul>
    </div>
    <hr />
    <hr />
    <!-- 内容区 -->
    <div class="nBoxContent">
      <p>{{ sellserInfo.supports[0].description }}</p>
      <p>{{ sellserInfo.supports[1].description }}</p>
      <p>{{ sellserInfo.supports[2].description }}</p>
      <p>{{ sellserInfo.supports[3].description }}</p>
      <p>{{ sellserInfo.supports[4].description }}</p>
    </div>
    <!-- 评论区域 -->
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
  // 导入axios
  import axios from 'axios'
  // 导入评论组件
  import commentCommon from '../comment/commentCommon.vue'
  // 导入mnit-ui
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return{
        id: this.$route.query.id,
        img: [],
        sellserInfo: {}
      }
    },
    created(){
      this.getAllSellerInfo()
    },
    methods: {
      getAllSellerInfo(){
        axios.get('/api/seller').then(res => {
          if(res.data.errno === 0 ){
            console.log(res.data.errno)
            this.sellserInfo = res.data.data
            this.img = res.data.data.pics

          }else{
            Toast({
              message: '列表信息加载失败',
              position: 'middle',
              duration: 5000

            })

          }

        })
      }
    },
    components: {
      'comment': commentCommon
    }

  }
</script>

<style lang="scss" scoped="scoped">
  .newsBox {
    h3 {
      text-align: center;
      margin-top: 30px;
    }
    .nBoxTitle {
      display: flex;
      justify-content: space-around;
    }
    .nBoxTop {
      ul{
        padding: 0;
        margin: 0;
        li{
          padding: 0;
          margin: 0;
          float: left;
          list-style: none;
          img {
            width: 100%;
          }
        }

      }

    }
    .fontIndex {
      font-size: 12px;
      font-weight: 500;
      text-indent: 2em;
    }
    .nBoxContent {
      padding:5px 10px;

    }
  }
</style>
