<!-- views/CustomerAdd.vue -->
<template>
   <div class="container">
      <div class="row">
         <!--이름, 이메일, 연락처, 주서-->
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
         <button type="button" class="btn btn-info" v-on:click="addCustomer" :disabled="!(nameOk&&phoneOk)">등록</button>
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
            name: null,
            email: null,
            phone: null,
            address: null,
         }
      }
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
   methods: {
      //axios는 항상 json 그래서 값을 data()에서 json으로 받아서 보내야함
      async addCustomer(){
         /*
         if(!this.info.name || !this.info.email || !this.info.phone || !this.info.address){
            alert('값을 모두 입력해주세요');
            return;
         }
         */
         let result = await axios.post('/api/customers', this.info)
                                 .catch(err=>console.log(err));
         console.log(result.data);
         let sqlRes = result.data;
         let customerId = sqlRes.insertId; //mysql의 auto_increment 사용시 insertId을 반환
         if(customerId > 0){
            alert('정상적으로 등록 되었습니다.');
            this.$router.push({ name : 'customerInfo', query : { customerId : customerId } });
         }else{
            alert('정상적으로 등록되지 않았습니다.');
            this.$router.push({ name : 'customerList' });
         }
         /*
         //패치는 이런식으로 보내야하는데 이걸 위에 2줄로 끝내는게 axios
         let result = await fetch('/api/customers', {
                                 method : 'post',
                                 headers : {
                                    'content-type' : 'application/json',
                                 },
                                 body : JSON.stringify(this.info)
                              })
                              .then(res => res.json())
                              .catch(err=>console.log(err));
         */
      },
   },
};
</script>

<style>
   .waring{
      display: none;
   }
</style>