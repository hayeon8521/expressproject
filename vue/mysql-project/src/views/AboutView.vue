<template>
  <div class="about">
    <!--템블릿 태그 태그를 그룹지을때 사용하는거고 화면에 표시되지않음-->
    <!-- for and if 는 우선순위때 태그 하나에 같이 쓰면 안됨!! -->
    <template :key="info.id" v-for="(info, idx) in list">
      <p v-if="idx % 2 == 0">{{ info }}</p>
    </template>
  </div>
</template>

<script>
//모듈이기때문에 임포트가 필요!
import axios from 'axios';

export default{
  data(){
    return{
      list : []
    }
  },
  //axios 사용
  created(){
    // http://localhost:3000/customers => /api 가 됨 //이제 프록시 서버한테 위임하는것
    // 배포할떄 합쳐지면 상대경로 처리하는 방법으로 해야한다
    // 이제부터 무조건 /api 를 거치는건 프록시 서버를 거친다
    axios.get('/api/customers') //전체 조회하려고 get
      .then(result=>{
        console.log(result);  //그냥 콘솔에 한번 찍어본거
        //이제 진짜로 연결해봄
        this.list = result.data;
      })
      .catch(err => console.log(err));
  },
}
</script>
