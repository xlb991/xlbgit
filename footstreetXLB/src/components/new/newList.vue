<template>
  <div>
    <h3>新闻资讯</h3>
    <ul class="mui-table-view">
    <li v-for="item in list" :key="item.name" class="mui-table-view-cell mui-media" >
      <router-link :to="'/home/newsinfo?id='+item.id" >
        <img class="mui-media-object mui-pull-left" src="../../common/img/menu2.png">
        <div class="mui-media-body">
         {{item.name}}
          <p class='mui-ellipsis'>
            <span>{{item.time | timesrc('YYYY-MM-DD')}}</span>
            <span>点击次数：{{item.sellCount}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
  </div>
</template>

<script>
  // 导入MUI
  import '../../lib/mui/css/mui.css'
  // 导入MUI的扩展插件包
  import '../../lib/mui/css/icons-extra.css'
  import '../../lib/mui/fonts/mui-icons-extra.ttf'
  // 导入本地json
  import axios from 'axios'

  import { Toast } from 'mint-ui'

  export default {
    data(){
      return{
        list: []
      }
    },
    created(){
      this.getAllSeller()
    },
    methods: {
      getAllSeller(){
        axios.get('/api/seller').then((res) => {
          var data = res
          if(res.data.errno === 0){
              this.list = res.data
          }else{
             Toast({
               message: '列表信息加载失败',
               position: 'middle',
               duration: 5000

             })

          }
        })
      }
    }
    


  }
</script>

<style lang="scss" scoped="scoped">
  .mui-ellipsis {
      display:flex;
      justify-content: space-between;
  }
</style>
