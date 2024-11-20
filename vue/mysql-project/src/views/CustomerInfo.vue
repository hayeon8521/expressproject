<!-- views/CustomerInfo.vue -->
<template>
   <div class="container">
      <!-- row 부트스트랩 클래스 하나의행으로 취급하겠다-->
      <!-- row는 col 컬럼을 12칸 가진다-->
      <div class="row">
         <div class="col-12">
            <div class="row">
               <!-- col-6 12칸을 6칸씩 반반씩 배분-->
               <div class="col-3">
                  아이디
               </div>
               <div class="col-9">
                  {{ customer.id }}
               </div>
            </div>
            <div class="row">
               <div class="col-3">
                  이름
               </div>
               <div class="col-9">
                  {{ customer.name }}
               </div>
            </div>
            <div class="row">
               <div class="col-3">
                  이메일
               </div>
               <div class="col-9">
                  {{ customer.email }}
               </div>
            </div>
            <div class="row">
               <div class="col-3">
                  연락처
               </div>
               <div class="col-9">
                  {{ customer.phone }}
               </div>
            </div>
            <div class="row">
               <div class="col-3">
                  주소
               </div>
               <div class="col-9">
                  {{ customer.address }}
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-4">
            <button type="button" @click="goToUpdateForm()">수정</button>
         </div>
         <div class="col-4">
            <button type="button" v-on:click="gotoCustomerList()">목록</button>
         </div>
         <div class="col-4">
            <button type="button" @click="delInfo()">삭제</button>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   data(){
      return{
         customer : {},
      };
   },
   methods : {
      async getCustomerInfo(id){
         //axios.get(`/api/customers/${id}`) 이게 404 뜨면
         // node > mysql-server > app.js 로 가봐야함
         let result = await axios.get(`/api/customers/${id}`)
                           .catch(err => console.log(err));

         //가져온 정보를 여기서 가공해서 리스트에 넣어줌
         this.customer = result.data;
      },
      //삭제는 따로 페이지가 필요없어서 목록페이지 자체에서 바로 처리
      async delInfo(){
         let result = await axios.delete(`/api/customers/${this.customer.id}`)
                                 .catch(err => console.log(err));
         console.log(result.data);
         let sqlRes = result.data;
         //삭제 했을때 페이지 목록으로 이동
         if(sqlRes.affectedRows >= 1 && sqlRes.changedRows == 0){
            alert('정상적으로 삭제되었습니다.');
            //리다이렉트와 같은 역활을 함
            this.$router.push({ name : 'customerList' });
         }
      },
      //목록 돌아가기
      gotoCustomerList(){
         this.$router.push({ name : 'customerList' });
      },
      //수정하기 (파람즈로 해보기)
      goToUpdateForm(){
         this.$router.push({ name : 'customerUpdate', params : { customerId : this.customer.id } });
      },
   },
   created(){
      //route 라우트 임!! 라우터 아님!!
      let selected = this.$route.query.customerId;
      //console.log(selected);
      this.getCustomerInfo(selected);
   },
}
</script>