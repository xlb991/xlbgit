<template>
  <div class="foodInfoBox">
    <!-- 动画小球 -->
    <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter">
        <div class="ball" v-show="isflag" ref="ball"></div>
    </transition>
    <div class="foodInfoBox-inner">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 轮播图 -->
            <div class="bannerStyle">
                <my-banner></my-banner>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">{{ foodList.name }}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- 价格 -->
            <div class="price">
              <span>现价:￥{{ foodList.price }}</span>&nbsp;&nbsp;
              <del>原价:￥{{ foodList.sellCount }}</del>
            </div>
            <!-- 数量 -->
            <div class="goodscount">
              购买数量：
              <number-input  @getNum="getCount" :haveCount="foodList.rating"></number-input>
              <span>库存：{{ foodList.rating }}</span>
            </div>
            <!-- 按钮 -->
            <div class="confireBtn">
              <mt-button type="primary">立即购买</mt-button>
              <mt-button type="danger" @click="toTheShoppingCar">加入购物车</mt-button>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header">优惠策略</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
           <p v-for="sellerItem in sellerLists" :key="sellerItem.type">{{ sellerItem.description }}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <div>
            <mt-button @click="toIntroduce(foodList.name)" size="large" type="primary" plain>图文介绍</mt-button>
          </div>
          <div>
            <mt-button @click="toComment" size="large" type="danger" plain>商品评论</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入轮播图组件
  import banner from '../banner/bannerCommon.vue'
  // 加载本地数据
  import axios from 'axios'
  // 文本提示框
  import { Toast } from 'mint-ui'
  // 购买数量
  import numberInput from '../commonComponents/numberInput.vue'
  // mui
  import mui from '../../lib/mui/js/mui.js'
  export default {
    data(){
      return{
        id: this.$route.params,
        foodList: [],
        sellerLists: [],
        isflag: false,
        number: 1
      }
    },
    created(){
      this.getGoodsInfo()
      this.getSllerInfo()
    },
    updated(){
      // 获取myball的dom元素
      // const myball = this.$refs.myball.getboundingclientrect()

    },
    methods: {
      // 编程式导航
      toIntroduce(name){
        this.$router.push("/foodInfo/foodDetail/"+name)
      },
      toComment(){
        this.$router.push("/foodInfo/comment")
      },
      // 获取商品信息
      getGoodsInfo(){
        axios.get('/api/goods').then(res => {
          if(res.data.errno === 0){
            // 遍历每一个对象获取foods
            res.data.data.forEach(item => {
              // 遍历每一项foods
              item.foods.forEach(foodItem => {
                // 获取指定id的goods
                if(foodItem.id == this.id.id){
                  // 存储于本组件中
                   this.foodList = foodItem
                }
              })

            })
          }else{
            Toast('兄弟开飞机呢，请打开网络')
          }
        })
      },
      getSllerInfo(){
          axios.get('/api/seller').then(res => {
            if(res.data.errno === 0){
              res.data.data.supports.forEach(item => {
                this.sellerLists = this.sellerLists.concat(item)
              })

            }else{
              Toast('兄弟开飞机呢，请打开网络')
            }
          })
      },
      toTheShoppingCar(){
        this.isflag = !this.isflag
        //编程式导航
        this.$router.push('/foodInfo/shoppingCar')
        // 创建foodListInfo对象
        var foodListInfo = {id:this.id.id, count:this.number, price:this.foodList.price, selected:true }
        //通过调用方法给vuex传值
        this.$store.commit("foodsInfo",foodListInfo)

      },
      beforeEnter(el){
        // 获取小球的的坐标
        const ballObj = this.$refs.ball.getBoundingClientRect()
        const ballx = ballObj.left
        const bally = ballObj.top
        el.style.transform= 'translate('+ballx+'px,'+bally+'px)'
      },
      enter(el,done){
        // 实现动画效果
        el.offsetHeight;
        // 获取小球的的坐标
        const ballObj = this.$refs.ball.getBoundingClientRect()
        // 获取购物车的坐标
        var shoppingCar = document.getElementById("shoppingCar");
        const carObj = shoppingCar.getBoundingClientRect();
        var xdistance = carObj.left - ballObj.left;
        var ydistance = carObj.top - ballObj.top;
        el.style.transform = 'translate('+xdistance+'px,'+ydistance+'px)';
        el.style.transition = 'all .2s';
        done()
      },
      afterEnter(el){
        this.isflag = !this.isflag
      },
      // 子传父
      getCount(num) {
        this.number = num

      }


    },
    components: {
      "myBanner": banner,
      "numberInput": numberInput
    }

  }

</script>

<style lang="scss" scoped="scoped">
  .foodInfoBox {
    // position: relative;
    background: #EEEEEE;
    // 动画小球
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 7px;
      background: #009926;
      position: absolute;
      top: 450px;
      left: 150px;
      z-index: 9999999;
    }

    .foodInfoBox-inner {
      .price {
        margin-bottom: 10px;
        span {
          font-size: 16px;
          color: red;
        }
      }
      .goodscount {
        margin-bottom: 10px;
      }
      .confireBtn {

      }
      .mui-card-header, .mui-card-footer{
        display: block;
      }
      .mui-card-footer {
        div {
          &:nth-child(1) {
            margin-bottom: 10px;
          }
        }
      }


    }
  }
</style>
