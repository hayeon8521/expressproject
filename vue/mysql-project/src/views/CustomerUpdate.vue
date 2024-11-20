<!-- views/CustomerUpdate.vue -->
<template>
   <div class="container">
      <div class="row">
         <label>아이디</label>
         <input type="text" v-model="info.id" readonly>
      </div>
      <div class="row">
         <label>이름</label>
         <input type="text" v-model="info.name">
         <div class="form-text" :class="{ 'waring' : nameOk }">
            이름이 입력되지 않았습니다.
         </div>
         <div class="form-text" :class="{ 'waring' : !nameOk }">
            사용 가능한 이름입니다.
         </div>
      </div>
      <div class="row">
         <label>이메일</label>
         <input type="email" v-model="info.email">
      </div>
      <div class="row">
         <label>연락처</label>
         <input type="tel" v-model="info.phone">
         <div class="form-text" :class="{'waring' : phoneOk }">
            연락처가 입력되지 않았습니다.
         </div>
      </div>
      <div class="row">
         <label>주소</label>
         <input type="text" v-model="info.address">
      </div>
      <div class="row">
         <button type="button" class="btn btn-info" v-on:click="updateCustomer" :disabled="!(nameOk&&phoneOk)">수정</button>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   data(){
      return{
         //v-model 들은(양방향임) 다 여기로 모인다
         info : {
            id : null,
            name: null,
            email: null,
            phone: null,
            address: null,
         },
      };
   },
   created(){
      //1)사용자가 선택한 대상의 원래 데이터 조회
      //=>단건조회와 비슷하며
      let selected = this.$route.params.customerId;
      this.getCustomerInfo(selected);
   },
   methods: {
      //파람으로 값을 받은것으로 조회
      async getCustomerInfo(id){
         let result = await axios.get(`/api/customers/${id}`)
                           .catch(err => console.log(err));
         this.info = result.data;
      },
      //2) 사용자가 버튼을 클릭했을 때 서버에 전송
      //=>등록과 비슷하다
      async updateCustomer(){
         let id = this.info.id;
         //필요한 데이터만 가공해서 보내야함 id 같이 보내면 큰일남
         let updateDta = {
            name: this.info.name,
            email: this.info.email,
            phone: this.info.phone,
            address: this.info.address
         };
         //배열 처리 안하고 이렇게 보내도 된다!!그럼 알아서 내부적으로 처리된다!
         let result = await axios.put(`/api/customers/${id}`, updateDta)
                                 .catch(err => console.log(err));
         let sqlRes = result.data;
         if(sqlRes.changedRows > 0 ){
            alert('수정되었습니다.');
            this.$router.push({ name : 'customerInfo', query : { customerId : this.info.id } });
         }else{
            alert('수정되지 않았습니다.');
         }
         //this.$router.push({ name : 'customerList' });
      },
   },
   computed : {
      //뷰를 배웠으니까 뷰로 쓰는게 맞다
      nameOk(){
         return this.info.name != null && this.info.name != '';
      }, 
      phoneOk(){
         return this.info.phone != null && this.info.phone != '';
      },
   },
};
</script>

<style>
   .waring{
      display: none;
   }
</style>