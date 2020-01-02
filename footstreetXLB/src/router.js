// 导入路由
import VueRouter from 'vue-router'
// 导入自定义组件(底部四个导航)
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import shoppingCarContainer from './components/tabbar/shoppingCarContainer.vue'
// 导入自定义组件(新闻)
import newList from './components/new/newList.vue'
// 店家详情
import newsinfo from './components/new/newsinfo.vue'
// 相册
import photoList from './components/photo/photoList.vue'
// 相册详情
import photoInfo from './components/photo/photoInfo.vue'
// 食物列表
import foodList from './components/food/foodList.vue'
// 食物信息
import foodInfo from './components/food/foodInfo.vue'
// 食物详情
import foodDetail from './components/food/foodDetail.vue'
// 食物评论区
import foodComment from './components/food/foodComment.vue'
// 购物车
import shoppingCar from './components/car/shoppingCar.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/', redirect:'/home'},
	  {path: '/home', component: homeContainer },
	  {path: '/member', component: memberContainer },
	  {path: '/search', component: searchContainer },
	  {path: '/shoppingCar', component: shoppingCar },
    {path: '/home/newList', component: newList},
    {path: '/home/newsinfo', component: newsinfo},
    {path: '/home/photo', component: photoList},
    {path: '/photo/photoInfo/:name', component: photoInfo},
    {path: '/home/foodslist', component: foodList},
    {path: '/foodslist/foodInfo/:id', component:foodInfo},
    {path: '/foodInfo/foodDetail/:name', component:foodDetail},
    {path: '/foodInfo/comment', component:foodComment},
    {path: '/foodInfo/shoppingCar', component:shoppingCar}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router
