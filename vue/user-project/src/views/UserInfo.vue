<!-- views/UserInfo.vue -->
<template>
   <div class="container">
      <table class="table">
         <tr>
            <th class="text-right">NO</th>
            <td class="text-center">{{ userInfo.user_no }}</td>
         </tr>
         <tr>
            <th class="text-right">ID</th>
            <td class="text-center">{{ userInfo.user_id }}</td>
         </tr>
         <tr>
            <th class="text-right">비밀번호</th>
            <td class="text-center">{{ userInfo.user_pwd }}</td>
         </tr>
         <tr>
            <th class="text-right">이름</th>
            <td class="text-center">{{ userInfo.user_name }}</td>
         </tr>
         <tr>
            <th class="text-right">성별</th>
            <td class="text-center">{{ userInfo.user_gender == null ? null : userGender }}</td>
         </tr>
         <tr>
            <th class="text-right">나이</th>
            <td class="text-center">{{ userInfo.user_age }}</td>
         </tr>
         <tr>
            <th class="text-right">가입일</th>
            <td class="text-center">{{ dateFormat(userInfo.join_date, 'yyyy-MM-dd') }}</td>
         </tr>
      </table>
      <div>
         <button class="btn btn-info" @click="goToUpdateForm(userInfo.user_no)">수정</button>
         <router-link to="/userList" class="btn btn-light">목록</router-link>
         <button class="btn btn-warning" @click="delUserInfo()">삭제</button>
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
      userGender(){
         return this.userInfo.user_gender == "M" ? '남' : '여';
      },
   },
   created(){
      let selected = this.$route.query.no;
      this.getuserInfo(selected);
   },
   methods : {
      async getuserInfo(userNo){
         let result = await axios.get(`/api/users/${userNo}`)
                                 .catch(err=>console.log(err));
         this.userInfo = result.data;
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
      async delUserInfo(){
         let result = await axios.delete(`/api/users/${this.userInfo.user_no}`)
                                 .catch(err=>(console.log(err)));
         
         let delRes = result.data;
         //data{result: 'success', user_no: '15'}
         if(delRes.result == 'success'){
            alert('정상적으로 삭제되었습니다.');
            this.$router.push({ name : 'userList' });
         }else{
            alert('삭제되지 않았습니다.');
         }
      },
      goToUpdateForm(userNo){
         this.$router.push({ name : 'userUpdate', params : { user_no : userNo } });
      }
   },
   
}
</script>

<style></style>