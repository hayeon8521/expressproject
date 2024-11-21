<!-- views/UserUpdate.vue -->
<template>
   <div class="container">
      <table class="table">
         <tr>
            <th class="text-right">No</th>
            <td class="text-center"><input type="text" v-model="userInfo.user_no" readonly></td>
         </tr>
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
         <button class="btn btn-info" @click="updateUserInfo(userInfo.user_no)">수정완료</button>
         <router-link to="/userList" class="btn btn-light">목록</router-link>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

export default{
   data(){
      return{
         userInfo : {},
         userNo : 0,
      };
   },
   computed : {
   },
   created(){
      let selected = this.$route.params.user_no;
      this.getuserInfo(selected);
   },
   methods : {
      async getuserInfo(userNo){
         let result = await axios.get(`/api/users/${userNo}`)
                                 .catch(err=>console.log(err));
         this.userInfo = result.data;
         this.userInfo.join_date = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd');
      },
      async updateUserInfo(userNo){
         let obj = {
            user_id: this.userInfo.user_id,
            user_pwd: this.userInfo.user_pwd,
            user_name: this.userInfo.user_name,
            user_gender: this.userInfo.user_gender,
            user_age: this.userInfo.user_age,
            join_date: this.dateFormat(this.userInfo.join_date,'yyyy-MM-dd'),
         };
         let result = await axios.put(`/api/users/${userNo}`, obj)
                                 .catch(err=>console.log(err));
         //console.log(result.data);
         let sqlRes = result.data;
         if(sqlRes.result){
            alert('수정되었습니다.');
            this.$router.push({ name : 'userInfo', query : { no : this.userInfo.user_no } });
         }else{
            alert('수정되지 않았습니다.');
         }

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
   },
}
</script>

<style></style>