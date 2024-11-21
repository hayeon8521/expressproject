<!-- layouts/HeaderComponent.vue -->
<template>
   <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/userList" class="nav-link active" aria-current="page">목록보기</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/userAdd" class="nav-link">회원등록</router-link>
      </li>
    </ul>
</template>