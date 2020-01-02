<template>
  <div class="foodsBox">
    <!-- <h3>食物列表</h3> -->
    <div @click="routerTo(item.id)" class="foodsBox-item" v-for="item in foodsList" :key="item.id">
      <img :src="item.icon" />
      <h4 class="title">{{ item.name }}</h4>
      <div class="content">
        <div class="price">
          <span>￥{{ item.price }}</span>
          <span>￥{{ item.oldPrice }}</span>
        </div>
        <div class="introduce">
          <span>热卖中</span>
          <span>剩余：{{ item.rating }}件</span>
        </div>
      </div>
    </div>
    <!-- 加载更多按钮 -->
    <mt-button type="danger" size="large" @click="getMoreFoods">加载更多</mt-button>
  </div>
</template>

<script>
  // 使用本地数据
  import axios from 'axios'
  // 提示文本框
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return{
        foodsList: []

      }
    },
    created(){
      this.getAllFoodsList()
    },
    methods: {
      // 编程式导航
      routerTo(id){
        this.$router.push("/foodslist/foodInfo/"+id)
      },
      // 加载更多
      getMoreFoods(){
        // 暂时（造成视觉误差：本质--获取时1.页面值自增2.调用getAllFoodsList）
          axios.get('/api/goods').then(res => {
            if(res.data.errno === 0){
              // 获取数据中的所有foods数组
              res.data.data.forEach(item => {
                // 添加到本地
                this.foodsList = this.foodsList.concat(item.foods)
              })
            }else{
              Toast('获取数据失败，检查网络')
            }
          })
      },
      // 获取所有的食物列表信息
      getAllFoodsList(){
        axios.get('/api/goods').then(res => {
          if(res.data.errno === 0){
            // 获取数据中的所有foods数组
            res.data.data.forEach(item => {
              // 添加到本地
              // this.foodsList = this.foodsList.concat(item.foods)
              this.foodsList = item.foods
            })
          }else{
            Toast('获取数据失败，检查网络')
          }
        })
      }
    }


  }

</script>

<style lang="scss" scoped="scoped">
  .foodsBox {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;

    .foodsBox-item {
      width: 48%;
      border: 1px solid black;
      margin: 3px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2px;
      min-height: 192px;
      box-shadow: 0px 3px 1px rgba(255, 255, 90, .6);

      img {
        width: 100%;
      }
      .title {
        font-size: 14px;

      }
      .content {
        background: pink;
        .price {
          span {
            &:nth-child(1) {
              color: red;
              font-size: 16px;
              font-weight: 500;
            }
            &:nth-child(2) {
              color: gray;
              text-decoration: line-through;
              font-size: 12px;
            }
          }

        }
        .introduce {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 14px;
            color: gray;
          }

        }

      }
    }

  }
</style>
