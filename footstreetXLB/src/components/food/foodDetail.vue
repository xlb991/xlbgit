<template>
  <div class="photoInfoBox">
    <!-- 头部 -->
    <h3>{{ detailInfo.name }}</h3>
    <br />
    <!-- 头部标题 -->
    <div class="nBoxTitle">
      <span>价格：￥{{ detailInfo.price}}</span>
      <span>已购买份数：{{ detailInfo.sellCount}}</span>
    </div>
    <hr />
    <div class="fontIndex">
      <p>品类：{{ detailInfo.description}}</p>

    </div>

    <!-- 图片区域 -->
    <div class="nBoxTop">
      <vue-preview  :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <hr />
    <hr />
    <!-- 内容区 -->
    <div class="nBoxContent">
      <p>描述：{{ detailInfo.name }}</p>
      <p>{{ detailInfo.ratings[0].text }}</p>
    </div>
  </div>
</template>

<script>
  // 导入评论组件
  import commentCommon from '../comment/commentCommon.vue'
  //导入本地数据
  import axios from 'axios'
  // 导入提示文本插件
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return{
        name: this.$route.params,
        detailInfo: [],
        slide1: [
                 {
                    src: 'http://img4.imgtn.bdimg.com/it/u=3920046094,13988262&fm=15&gp=0.jpg',
                    msrc: 'http://img4.imgtn.bdimg.com/it/u=3920046094,13988262&fm=15&gp=0.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                  }
                ]
      }
    },
    created(){
      this.getDetailGoodsInfo()
    },
    methods: {
      // 获取商品详细信息
      getDetailGoodsInfo(){
        axios.get('/api/goods').then(res => {
          // console.log(res.data.data)
           // console.log(this.name.name)
          if(res.data.errno === 0){
            res.data.data.forEach(item => {
              // console.log(item.foods)
              item.foods.forEach(foodItem => {
                // 判断是否是当前的菜系
                if(foodItem.name == this.name.name){
                  this.detailInfo = foodItem
                  // console.log("foodItem"+foodItem)
                }
              })
            })
          }else{
            Toast('数据加载失败，检查网络')
          }
        })
      },
      handleClose () {
        console.log('close event')
      }

    }

  }
</script>

<style lang="scss" scoped="scoped">
  .photoInfoBox {
    h3 {
      text-align: center;
      margin-top: 30px;
    }
    .nBoxTitle {
      display: flex;
      justify-content: space-around;
    }
    .nBoxTop {
      text-align: center;
      box-shadow: 2px 2px 6px blue;
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
