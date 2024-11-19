<template>
  <nav>
    <a href="www.naver.com">네이버</a>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |  <!--경로호출로 바인딩-->
    <router-link v-bind:to="{ name : 'listBind'}">ListBinding</router-link> | <!--네임호출로 바인딩-->
    <router-link :to="{ path : '/IfBinding'}">IfBinding</router-link> | <!--경로호출로 바인딩 v-bind 생략가능-->
    <router-link to="/onEvent">OnEvent</router-link> | <!--경로호출로 바인딩-->
    <router-link to="/comWatch">computedWatch</router-link> <!--경로호출로 바인딩-->
  </nav>
  <h1> h1태그가 모든페이지에 출력됨 하이퍼 링크와 무관하게 동작</h1>
  <router-view/>  <!--이게 화면 전체를 덮어쓰는거-->
  <hr>
  <hr>
  <DataBinding/>  <!--<==카멜표기법으로 하면 작동 안되야하는데 // 컴포넌트 올려놓고 // 이건 하나의 태그로 인식 -->
  <!--<data-binding/>--> <!-- <== 원래는 이렇게 케밥표기법으로 작성해야함 -->
  <ListBinding/>
</template>

<script>
// 1) 자식 컴포넌트로 등록 => 특정 페이지의 조각을 구성
import DataBinding from './views/DataBinding.vue';
import ListBinding from './views/ListBinding.vue';
export default {
  components : {  //객체 타입 DataBinding : DataBinding 이의미임 DataBinding 객체로 DataBinding 컴포넌트를 등록하겠다
    DataBinding,
    ListBinding,
    //"data-binding" : Databinding
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
