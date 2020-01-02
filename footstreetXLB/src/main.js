// 导入vue
import Vue from 'vue'
// 导入app组件
import App from './App.vue'
// 导入Mnit-UI
// import { Header,Swipe,SwipeItem,Toast,Button,Lazyload } from 'mint-ui'
// 图片懒加载
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Toast.name,Toast)
// Vue.component(Button.name, Button)
// 全局导入mintui

// 导入MUI
import './lib/mui/css/mui.css'
// 导入MUI的扩展插件包
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
// 导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入axios(本地json)
import axios from 'axios'
import VueAxios from 'vue-axios' // 本地JSON
Vue.use(VueAxios, axios)
// 导入自定义好的路由
import router from './router.js'
// 导入vue-resourse
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 引入fastclick
// import FastClick from 'fastclick'
// 导入时间格式化包
import moment from 'moment'
// 缩略图组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
// vuex(共享数据的箱子)
import Vuex from 'vuex'
Vue.use(Vuex)

// 共享数据中的car为本地存储的数据(防止刷新后数据丢失)

var car = JSON.parse(localStorage.getItem("car") || '[]')
console.log(car)
// 共享数据箱子实例对象
var store = new Vuex.Store({
  state: {
    car: []
  },
  mutations: {
    foodsInfo(state,foodsList){
      // 购物车中无数据
      var isflag = false
      // 当购物车中有该商品时,只在数量上相加操作
      state.car.forEach(item => {
        if(item.id == foodsList.id){
          isflag = true
          item.count += parseInt(foodsList.count)
          return true
        }
      })
      // 当购物车中没有该商品时,添加购物车操作
      if(!isflag){
        state.car.push(foodsList)
      }
      // 数据放到本地存储
      localStorage.setItem("car",JSON.stringify(state.car))

    },
    updateFoodInfo(state,foodsInfo){
      // 根据id改变count值
      state.car.forEach(item => {
        if(item.id == foodsInfo.id){
          item.count = foodsInfo.count
        }
      })
      // 更新本地存储
      localStorage.setItem("car",JSON.stringify(foodsInfo))
    },
    delFoodById(state,id){
      state.car.some((item,i) => {
        // 根据id删除
        if(item.id = id){
          // 根据索引删除
          state.car.splice(i,1)
          console.log("store中删除")
          return true
        }
      })
      // 更新本地存储
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    updateFoodSelected(state,foodInfo){
      state.car.some(item => {
        // 根据id选中该项
        if(item.id == foodInfo.id){
           // 改变selected
           item.selected = foodInfo.selected
        }



      })

    }


  },
  getters: {
    getCount(state){
      var c=0;
      state.car.forEach(item => {
        c += parseInt(item.count)
      })
      return c
    },
    getCountByid(state){
      var obj = {}
      // 遍历car
      state.car.forEach(item => {
        obj[item.id] = item.count
      })
      console.log(obj)
      return obj
    },
    getGoodSelected(state){
      var objState = {}
      state.car.forEach(item => {
        objState[item.id] = item.selected
      })
      return objState
    },
    getGoodCountAndAmount(state){
      // 需返回的对象
      var obj = {count:0,amount:0}
      // 判断状态
      state.car.forEach(item => {
        if(item.selected){
          obj.count += parseInt(item.count)
          obj.amount += parseInt(item.price * item.count)
        }
      })
      return obj

    }


  }
})


// 全局键盘快捷键
Vue.config.keyCodes = {
  enter: 13
}
// 时间过滤器
Vue.filter("timesrc",function(value,pattern="YYYY-MM-DD"){
  return moment(value).format(pattern);
})


// 创建vue对象
new Vue({
	el: "#app",
	render: function(createElement) {
		return createElement(App)
	},
	router,
  store
})
