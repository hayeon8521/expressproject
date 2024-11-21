<!-- views/UserAdd.vue -->
<template>
   <div class="container">
      <table class="table">
         <tr>
            <th class="text-right">ID</th>
            <td class="text-center"><input type="text" v-model="userInfo.user_id"></td>
         </tr>
         <tr>
            <th class="text-right">비밀번호</th>
            <td class="text-center"><input type="password" v-model="userInfo.user_pwd"></td>
         </tr>
         <tr>
            <th class="text-right">이름</th>
            <td class="text-center"><input type="text" v-model="userInfo.user_name"></td>
         </tr>
         <tr>
            <th class="text-right">성별</th>
            <td class="text-center">
               <input type="radio" value="M" v-model="userInfo.user_gender"> 남자
               <input type="radio" value="F" v-model="userInfo.user_gender"> 여자
            </td>
         </tr>
         <tr>
            <th class="text-right">나이</th>
            <td class="text-center"><input type="text" v-model="userInfo.user_age"></td>
         </tr>
         <tr>
            <th class="text-right">가입일</th>
            <td class="text-center"><input type="date" v-model="userInfo.join_date"></td>
         </tr>
      </table>
      <div>
         <button class="btn btn-info" @click="addUserInfo()">등록</button>
         <router-link to="/userList" class="btn btn-light">목록</router-link>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default{
   data(){
      return{
         userInfo : {
            user_id: "",
            user_pwd: "",
            user_name: null,
            user_gender: null,
            user_age: 0,
            join_date: null,
         },
         userNo : 0,
      };
   },
   computed : {
   },
   created(){
   },
   methods : {
      async addUserInfo(){
         //모든 값을 입력했을때 라는 전제조건으로 진행
         let result = await axios.post(`/api/boards`, this.userInfo)
                                 .catch(err=>console.log(err));
         if(result.data.no > 0){
            alert('등록되었습니다.');
            this.$router.push({ name : 'userInfo', query : { no : result.data.no }});
         }else{
            alert('등록되지 않았습니다.');
         }
      },
   },
}
</script>

<style></style>