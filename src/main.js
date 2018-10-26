// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/font_884916_tdkiemvtlw/iconfont.css'
import Scroll from './base/scroll'
import Lazyload from 'vue-lazyload'
import $ from 'jquery'
// Vue.use(vuelazyload,{
//   preload:1.3,
//   loading:require('./asstes/img/aa.gif'),
//   attempt:1
// })
Vue.use(Lazyload,{
  preload:1.3,   //预加载的高度比例;
  loading:'http://img.zcool.cn/community/01745a56170dc46ac7255b1428e6a9.gif',
  attempt:1     //预加载图片的数量;
})
Vue.component(Scroll.name,Scroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
