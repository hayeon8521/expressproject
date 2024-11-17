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