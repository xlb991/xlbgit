<template>
  <div>
    <h3>相册子</h3>
    <!-- 顶部导航 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a @click="getGoodsList(item.type)" :class="['mui-control-item', item.name === '全部' ? 'mui-active' : '']"  v-for="item in category" :key="item.name" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            {{item.name}}
          </a>
        </div>
      </div>
    </div>
    <!-- 图片懒加载 -->
   <ul class="imgStyle">
      <router-link :to="'/photo/photoInfo/'+itemGoryf.name" tag="li" v-for="itemGoryf in categoryInfo" :key="itemGoryf.id">
        <img v-lazy="itemGoryf.image">
        <div class="textInfo">
          <span><h4>{{ itemGoryf.name }}</h4></span>
          <span><h5>{{ itemGoryf.description }}</h5></span>
          <span>{{ itemGoryf.info }}</span>
          <hr />
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  // 导入mui的js文件
  import mui from '../../lib/mui/js/mui.js'
  // 导入本地数据
  import axios from 'axios'
  // 导入温馨提示框本
  import { Toast } from 'mint-ui'

  export default {
    data(){
      return{
        category: [],
        categoryInfo: []

      }
    },
    created(){
      this.getAllGoods()
    },
    mounted(){
      // mui('.mui-scroll-wrapper').scroll({
      // 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      // });
    },
    methods: {
      // 获取商品的信息
      getAllGoods(){
        axios.get('/api/goods').then(res => {
          var dataMy = res.data.data
          // console.log(dataMy)
          if(res.data.errno === 0){
            dataMy.unshift({'name': '全部','type': 0, 'foods': '[]'})
            this.category = dataMy
            // 遍历数组
            for(var i=1; i<dataMy.length; i++){
              this.categoryInfo =  this.categoryInfo.concat(dataMy[i].foods)
              // console.log("categoryInfo:::____---:"+dataMy[i])
            }


          }else{
            Toast('列表信息加载失败')
          }
        })
      },
      getGoodsList(typeId){
        axios.get('/api/goods').then( res => {
           var dataObj = res.data.data
           // 判断特殊情况0时
           if(typeId == 0){
             // 先清空categoryInfo
             this.categoryInfo = []
             // 加载全部商品
             this.getAllGoods()
           }
           // 遍历对象
           for(var i=0; i<dataObj.length; i++){

             if(dataObj[i].type == typeId){
               // 覆盖categoryInfo里的数据
               this.categoryInfo = dataObj[i].foods
             }
           }
        })


      }
    }


  }
</script>

<style lang="scss" scoped="scoped">
  // * {
  //   touch-action: pan-x;
  // }

  .imgStyle {
    text-align: center;
    margin-bottom: -15px!important;
    li {
      position: relative;
      margin-bottom: 15px;
      box-shadow: 0 0 5px black;
      overflow: hidden;
    }
    // 懒加载
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    margin: 0;
    padding: 0;
    img {
        width: 100%;
    }
    .textInfo {
      padding-top: 8px;
      position: absolute;
      bottom: 0;
      width: 100%;
      max-height: 100px;
      color: #FFFFFF;

      background: rgba(0, 0, 0, .4);
      span {
        display: block;
        padding: 4px 10px;
        h5, .mui-h5{
          color: #FFFFFF
        }
      }
      hr {
        margin-top: 44px;
        color: pink;
      }
    }

  }
</style>
