<template>
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/abc">텍스트바인딩</router-link> |
    <router-link to="/form">폼태그바인딩</router-link> |
    <router-link to="/classing">클래스바인딩</router-link> |
    <router-link to="/foring">반복문바인딩</router-link> |
    <router-link to="/ifing">반복문바인딩</router-link> |
    <router-link to="/eventing">이벤트바인딩</router-link> |
  </nav>
  <router-view/>
  <!--<DataBinding/>-->
</template>

<script>
  //import DataBinding from './views/DataBinding.vue';
  export default {
    components : {
      //DataBinding
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
