<template>
  <div>
    <!-- header component -->
    <DefaultHeader/>
    <!-- 헤더를 DefaultHeader.vue 로 뺏음 해더구성하려고
    <router-link to="/customerList">전체조회</router-link> | 
    <router-link to="/customerAdd">등록</router-link>
    -->
    <!-- content component -->
    <router-view/>
    <!--<CustomerInfo/>-->
    <!-- footer component -->
     <!-- 푸터도 이런식으로 작업하기 -->
  </div>
</template>

<script>
import DefaultHeader from './layouts/DefaultHeader.vue';
export default {
  components : {
    DefaultHeader,
  }
};



/*
import CustomerList from './views/CustomerList.vue';
import CustomerInfo from './views/CustomerInfo.vue';

export default {
  components : {
    CustomerList,
    CustomerInfo,
  }
}
*/
</script>

<style>

</style>