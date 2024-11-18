<template>
    <div>
        <!--DOM을 조건에 따라 계속 새로그림-->
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
    },
    computed: {},
    methods: {},
    watch: {},
    components: {},
    props: [],
 }
 </script>

 <style></style>