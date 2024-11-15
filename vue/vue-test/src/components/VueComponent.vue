<!--VueComponent.vue-->
<!--사용자가 입력한 값을 즉각적으로 확인할수있는형태의 컴포넌트를 만들려고함-->
<!-- 이렇게 3파트로 나눠서 작업을 한다 -->
<template>
   <!-- 주의! 하나의 태그만 등록 무조건 템플릿이 가지는 최상위 태그는 딱 1개여야한다-->
   <div>
      <label><input type="text" v-model="msg"></label>
      <p>{{ msg }}</p>
   </div>
</template>

<!-- 모듈.export 와 같은 개념 -->
<script>
   export default {  //내보내기
      name : 'VueComponent',
      data(){  // data : function(){} <= 이거임 익명함수임
         return {
            msg : '2024-11-15'
         }
      }
   }
</script>

<style>
   p {
      background-color: aqua;
   }
</style>