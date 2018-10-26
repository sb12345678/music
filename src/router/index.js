import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/a'
import B from '@/components/b'
import tuijian from '@/components/tuijian'
import delv1 from '@/components/delv'
import register from '@/components/register'
import header from '@/components/header'
import xiangqing from '@/components/xiangqing'
import singer from '@/components/singer'
Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/delv1',
      component: delv1
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/header',
      component: header,
      children:[
        {
          path: '',
          redirect: 'tuijian'
        },
        {
          path:'tuijian',
          component:tuijian,
          children:[
            {
              path:'xiangqing',
              component:xiangqing
            }
          ]
        },
        {
          path:'/singer',
          component:singer
        },
        {
          path:'/a',
          component:A
        },
        {
          path:'/b',
          component:B
        },
        {
          path:'/tuijian',
          component:tuijian
        }
      ]
    },
    {
    	path: '/',
    	redirect: {
    		path: '/delv1'
    	}
    }
  ]
})
