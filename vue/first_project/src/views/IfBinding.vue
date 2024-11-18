<!--views/IfBinding.vue-->
<template>
   <div>
      <!--이프는 태그가 생성되거나 삭제되거나-->
      <!--이프디렉티브는 조건에 맞는 태그만 생성한다-->
      <!--기존에 있던 p태그를 삭제하고 아예 새로운 p 태그를 만드는것 부하가 많이 감-->
      <!--로그인 정보같은경우 이게 맞다 왜냐면 정보에따라서 숨겨야하니까 none가 아니라-->
      <input type="number" v-model="grade">
      <p v-if="grade >= 90">성적 : A</p>
      <p v-else-if="grade >= 80">성적 : B</p>
      <p v-else-if="grade >= 70">성적 : C</p>
      <p v-else-if="grade >= 60">성적 : D</p>
      <p v-else>성적 : F</p>
      <hr>
      <!-- 태그가 display none 돼었다 사라졌다 하는거 -->
      <input type="checkbox" v-model="chData">선택
      <p v-show="chData">Hello, World!!</p>
   </div>
</template>

<script>
export default {
   data(){
      return{
         grade : 50,
         chData : false
      }
   }
}
</script>

<style></style>