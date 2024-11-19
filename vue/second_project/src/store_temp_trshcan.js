// src/store.js
// store:  vuex 가 관리하는 저장소
import { createStore } from "vuex"; //저장소 생성 함수 불러오기

//저장소 생성 하기
const store = createStore({
    state(){
        //vuex에서 관리하는 모든 데이터를 정의
        return{
            cart : [
                {
                    product_id:1,
                    product_name:'아이폰 거치대',
                    category: 'A',
                },
            ],
            count: 0,
        }

    },
    getters: {
        //저장된 값을 확인하는거
        cartCount: (state)=>{
            return state.cart.length;
        },
    },
    mutations: {
        //실제 state에 등록된 값을 변경, 동기식으로 진행함 (이게 셋터 역활을함)
        //매게변수에 처음꺼는 무조건 state!!! 나머지 뒤쪽은 원하는대로
        increment(state){
            state.count++;
        },
        addProduct(state, info){
            state.cart.push(info);
        },
    },
    actions: {
        //동기식으로 진행하는 mutations을 기반으로해서 하나의 프로세스를 작업할수있고 여러개를 비동기식으로 진행할 수 있음 (이건 셋터역활을 분할해주는거)
        
        //context 저장소를 의미 (비동기로 처리되는걸 보기위해서 셋타임아웃 써본거임)
        addProduct(context, info){
            setTimeout(() => {
                context.commit('addProduct', info); //mutations에 등록된 함수 호출시 commit 를 이용함
            }, 1000);
        },
    },
});    

export default store;   //저장소 모듈화로 사용하기

//이렇게 저장소 생성하게되면 main.js에 use 항목에 store가 추가로 생김