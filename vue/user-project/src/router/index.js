import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/UserList.vue'
import UserInfo from '@/views/UserInfo.vue'
import UserAdd from '@/views/UserAdd.vue'
import UserUpdate from '@/views/UserUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : { name: 'userList' }
  },
  {
    path: '/userList',
    name: 'userList',
    component: UserList
  },
  {
    path: '/userInfo',        //<== 쿼리방식
    //path: '/userInfo/:id',  //<== 파람즈
    name: 'userInfo',
    component: UserInfo
  },
  {
    path: '/userAdd',
    name: 'userAdd',
    component: UserAdd
  },
  {
    path: '/userUpdate/:user_no',
    name: 'userUpdate',
    component: UserUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router