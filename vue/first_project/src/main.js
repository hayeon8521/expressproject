import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App) // root vue 생성 총괄 객체
.use(router)   // root 객체가 가지고 있는 여러가지 보조기능 추가하는 메소드(대표적으로 router)
.mount('#app') // ★가장중요 dom과 연결되는 코드 [얘가 없으면 화면이 뜨지 않음]
