<template>
  <div class="shopingCarBox">
    <div class="mui-card" v-for="(food,i) in foodsList">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 左边按钮-->
          <div class="left-btn">
            <mt-switch v-model="$store.getters.getGoodSelected[food.id]" @change="updateGoodSelect(food.id,$store.getters.getGoodSelected[food.id])"></mt-switch>
          </div>
          <!-- 中间图片 -->
          <div class="middle-img">
            <img :src="food.image" />
          </div>
          <!-- 右边内容 -->
          <div class="right-content">
            <!-- 内容顶部 -->
            <h3>{{ food.name }}</h3>
            <!-- 内容底部 -->
            <div class="content-bottom">
              <span>￥{{ food.price }}</span>
              <numberdiy :number="$store.getters.getCountByid[food.id]" :itemid="food.id"></numberdiy>
              <a href="#" @click.prevent="delfood(food.id,i)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!--  左边部分 -->
          <div class="content-left">
            <p>总计（含运费）</p>
            <p>已勾选商品：<span>{{ $store.getters.getGoodCountAndAmount.count  }}</span>件，总价：<span>￥{{ $store.getters.getGoodCountAndAmount.amount  }}</span>元</p>
          </div>
          <!--  右边部分 -->
          <div class="content-right">
            <mt-button type="danger">结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // 数字输入框
  import numberDiy from '../commonComponents/numberInput2.vue'
  // 本地数据
  import axios from 'axios'
  // 导入文本提示框
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return {
        foodsList: [],
        countNumber: 0

      }
    },
    created(){
      this.goodsInfo()
    },
    methods: {
      // 获取goodsInfo
      goodsInfo(){
        axios.get('/api/goods').then(res => {
          if(res.data.errno === 0){
            res.data.data.forEach(item => {
              item.foods.forEach(foodItem => {
                // 指定id
                this.$store.state.car.forEach(carItem => {
                   if( foodItem.id == carItem.id  ){
                     this.countNumber = carItem.count
                     this.foodsList.push(foodItem)
                   }
                })
              })
            })
          }else{
            Toast('你的网络开小差')
          }
        })
      },
      delfood(id,i){
        // 删除页面上显示的
        this.foodsList.splice(i,1)
        // 调用删除的方法，传id
        this.$store.commit("delFoodById",id)
      },
      updateGoodSelect(id,value){
        this.$store.commit("updateFoodSelected",{id:id ,selected: value})
      }

    },
    components : {
      "numberdiy": numberDiy
    }

  }
</script>

<style lang="scss" scoped="scoped">
  .shopingCarBox {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .content-left {
        span {
          color: red;
        }
        }
      .middle-img {
        img {
          width: 50px;
          height: 50px;
        }
      }

      .right-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
          font-size: 13px;
        }
        .content-bottom {
          span {
            color: red;
          }
          .mui-numbox {
            height: 20px;
          }
        }
       }

    }
  }
</style>
