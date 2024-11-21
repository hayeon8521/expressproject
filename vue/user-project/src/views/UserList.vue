<!-- views/UserList.vue -->
<template>
   <div class="container">
      <table class="table table-dark table-hover">
         <caption>Total : {{ count }}</caption>
         <thead>
            <tr>
               <th>No</th>
               <th>아이디</th>
               <th>이름</th>
               <th>성별</th>
               <th>가입일자</th><!-- yyyy-MM-dd -->
            </tr>
         </thead>
         <tbody>
            <tr v-for="info in userList" 
                     v-bind:key="info.user_no" 
                     v-on:click="goToDetailInfo(info.user_no)">
               <td>{{ info.user_no }}</td>
               <td>{{ info.user_id }}</td>
               <td>{{ info.user_name }}</td>
               <td>{{ userGender(info.user_gender) }}</td>
               <td>{{ dateFormat(info.join_date, 'yyyy-MM-dd') }}</td>
            </tr>
         </tbody>
      </table>

   </div>
</template>

<script>
import axios from 'axios';

export default {
   data(){
      return{
         userList : [],
      };
   },
   created(){  //객체가 생성완료 시점 => 초기화 데이터 호출
      this.getUserList();
   },
   methods :{
      async getUserList(){
         let result = await axios.get('/api/users')
                                 .catch(err => console.log(err));
         this.userList = result.data;
         console.log(result.data);
      },
      dateFormat(value, format){
         let date = value == null ? new Date() : new Date(value);
         let year = date.getFullYear(); // YYYY
         let month = ('0' + (date.getMonth() + 1)).slice(-2); // MM
         let day = ('0' + (date.getDate())).slice(-2);	// DD

         let result = format.replace('yyyy', year)
                           .replace('MM', month)
                           .replace('dd', day);
         return result;
      },
      goToDetailInfo(userNo){
         this.$router.push({ name : 'userInfo', query : { no : userNo } });
      },
      userGender(gendering){
         console.log(gendering);
         return gendering == "M" ? '남' : '여';
      },
   },
   computed : {
      count(){
         return this.userList.length;
      },
   },
}
</script>