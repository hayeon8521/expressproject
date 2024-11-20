import { createRouter, createWebHistory } from 'vue-router'
import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import CustomerUpdate from '@/views/CustomerUpdate.vue'

const routes = [
  {
    path: '/',
    redirect : { name: 'customerList' }
  },
  {
    //전체조회
    path: '/customerList',
    name: 'customerList',
    component: CustomerList
  },
  {
    //단건조회
    path: '/customerInfo',
    name: 'customerInfo',
    component: CustomerInfo
  },
  {
    //등록
    path: '/customerAdd',
    name: 'customerAdd',
    component: CustomerAdd
  },
  {
    //수정 //파람방식으로 해보기!!!
    path: '/customerUpdate/:customerId',
    name: 'customerUpdate',
    component: CustomerUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
