<!-- views/CustomerList.vue -->
<template>
   <div class="container">
      <table class="table">
         <caption>Total : {{ count }}</caption>
         <thead>
            <tr>
               <th>No</th>
               <th>아이디</th>
               <th>이름</th>
               <th>연락처</th>
            </tr>
         </thead>
         <tbody>
            <template v-if="count > 0">
               <!--v-on:click="" 해당 아이디값을 이용해 단건 조회 하는거-->
               <!-- 어떻게 페이지를 이동하냐?? 라우터 기능을 이용해 변경시켜야함 -->
               <tr v-for="(info, idx) in customerList" 
                     v-bind:key="info.id" 
                     v-on:click="goToCustomerInfo(info.id)">
                  <td>{{ idx+1 }}</td>
                  <td>{{ info.id }}</td>
                  <td>{{ info.name }}</td>
                  <td>{{ info.phone }}</td>
               </tr>
            </template>
            <tr v-else>
               <td colspan="4">
                  현재 데이터가 존재하지 않습니다.
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
import axios from 'axios'; //=>AJAX 진행하는 비동기 라이브러리
//그래서 가장빨리 실행해줘야함 <- 그래서 created() 훅을 이용해서 랜더링하는동안
//처리다해서 같이 뿌려줄수있도록 하기위해서

export default {
   data(){
      return{
         customerList : [],
      };
   },
   computed : {
      count(){
         //조회 했을때 데이터 갯수
         return this.customerList.length;
      }
   },
   created(){
      //컴포넌트가 초기화할 데이터 호출
      //전체조회
      this.getCustomerList();
   },
   methods : {
      async getCustomerList(){
         // then(result 안에는 서버의 응담 + 네트워크 정보 등 온갖 정보가 다 담겨있음
         // result.data 실제 서버가 응답한 정보만 가져옴
         // 원래 주소는 이거 이고 생략되는거임 http://localhost:8081/api/customers
         let result = await axios.get('/api/customers')
                           .catch(err => console.log(err));
         //가져온 정보를 여기서 가공해서 리스트에 넣어줌
         this.customerList = result.data;
      },
      goToCustomerInfo(id){
         //$ 가있는 변수는 숨겨진 필드 라고 생각하면됨
         // 원래는 몰라야할 속성들
         //push 내가선택한 정보를 라우터에 밀어넣는거
         //1번째 방법 도메인에 ?customerId=값 을 박아 버리는거 [ 질의 문자열 쿼리 방식 ]
         //파람즈는 익스프레스에서 많이 써봤으니까 쿼리방식으로 넘길꺼임
         this.$router.push({ name : 'customerInfo', query : { customerId : id } });
         //2번째 방법 [ 패스 베리어블 방식 ]
         //파람즈 주의 ( 강제성을 띔 )
         // 1) router의 path 속성 : '/target/:uId' <= 정의 해줘야함
         // 2) params : { uId : value } => /target/value
         //this.$router.push({ name : 'customerInfo', params : { customerId : id } });
         //console.log(id);
      },
   },
};
</script>

<style></style>