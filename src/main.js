// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


//引入和注册UI组件
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintUI);

//引入页面模块
import Hello from './components/pages/Hello.vue'
import DataTest from './components/pages/DataTest.vue'
import Home from './components/pages/Home.vue'
import Detail from './components/pages/Detail.vue'
import Sort from './components/pages/SortBlock.vue'
import Cart from './components/pages/CartBlock.vue'
import User from './components/pages/UserBlock.vue'
import Login from './components/pages/Login.vue'


//引入UI模块页面
import ui_num from './ui-components/ui-num.vue'
import ui_switch from './ui-components/ui-switch.vue'
import TestBlock from './components/pages/TestBlock'


//引入路由
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// store 只需要在根组件引入一次
import store from './vuex/store.js'

//注册router组件
Vue.use(VueRouter)
Vue.use(VueResource)

//路由集合
const routes = [
  {
    path: '/',
    name:'/',
    component: Home
  },
  {
    path: '/home',
    name:'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name:'detail',
    component: Detail
  },
  {
    path: '/sort',
    name:'sort',
    component: Sort
  },
  {
    path: '/cart',
    name:'cart',
    component: Cart
  },
  {
    path: '/user',
    name:'user',
    component: User
  },
  {
    path: '/test',
    component: TestBlock
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/home'
  }
];

//实例化路由对象
const router  = new VueRouter({
	base: '/shop/', //改变域名后的根路径
	mode: 'history',
	linkActiveClass: 'is-active',
	routes
});


//按钮默认数据
var btnArray = [{name:'首页',className:'icon-house',url:'/home',select:false},
  {name:'分类',className:'icon-sort',url:'/sort',select:false},
  {name:'购物车',className:'icon-car',url:'/cart',select:false},
  {name:'我的',className:'icon-user',url:'/user',select:false}];

const status=true
//初始化默认数据
store.commit('UPDATEFOOTERBUTTON',btnArray);
store.commit('UPDATETABSTATE',status);

//高亮按钮
const btnHighlight = function(to){
 var _btnArray = store.getters.getFooterButton;
	console.log(to);
  var pagemark="";
  switch(to.name){
    case '/': pagemark ='home';break;
    case 'home': pagemark ='home';break;
    case 'sort': pagemark ='sort';break;
    case 'cart': pagemark ='cart';break;
    case 'user': pagemark ='user';break;
  }
  if(pagemark){
        _btnArray.forEach(function(item,index){
          if(item.url.indexOf(pagemark)>-1){
            item.select = true;
            item.className = item.className.replace(/-c$/,'') + '-t';
          }else{
            item.select = false;
            item.className = item.className.replace(/-t$/,'');
          }
        })
      store.commit('UPDATEFOOTERBUTTON', _btnArray);
  }
}
//开启路由
//router.start(App,'#app')
router.beforeEach((to, from, next) => {
  btnHighlight(to);
  if(/(cart|user)/.test(to.path)){
      const user = store.getters.getUser;
      if (user && user.id >0) {
        console.log('用户ID：'+user.id);
        next()
      } else {
        //console.log('插入user对象');
        // store.commit('UPDATEUSER', {id:5421});
        // 判断是否登录，（可以通过接口，Vuex状态 token）
         next('/login')
      }
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
