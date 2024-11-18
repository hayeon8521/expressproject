import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//2) 페이지 단위로 호출
import DataBinding from '@/views/DataBinding.vue';
import ListBinding from '@/views/ListBinding.vue';
import IfBinding from '@/views/IfBinding.vue';
import OnEvent from '@/views/OnEvent.vue';
//@ <== src 절대 경로 표현 .. <== 상대경로 표현
//3가지 정보 입력하면됨 ( 경로, 이름, 컴포넌트번수)
//경로로도 불러올수있고 이름으로 불러올수도 있음 (경로가 긴경우 이름으로 불러오면 좋아서)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/dataBinding',
    name : 'dataBind',
    component : DataBinding
  },
  {
    path : '/listBinding',
    name : 'listBind',
    component : ListBinding
  },
  {
    path : '/ifBinding',
    name : 'ifBind',
    component : IfBinding
  },
  {
    path : '/onEvent',
    name : 'onEvent',
    component : OnEvent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//module.exprots = router 과 같은 의미 (이건 node꺼)
//사용하는곳에서 reuqire('') 이렇게 쓰는거고
export default router
