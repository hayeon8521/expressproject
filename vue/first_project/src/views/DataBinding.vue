<!-- DataBinding.Vue -->
<template>
   <div>
      <!-- tag의 속성에 대해서 바인딩 -->
      <!--텍스트 속성에 바인딩 {{ 이공간은 자바스크립트 영역이 됨 }} -->
      <!-- v-text(접두어)를 이용해서 바인딩도 가능 -->
      <!-- 변수 2개 쓰는중 title, tagLIst -->
      <h1>{{ title + ' !!!! ' }}</h1>
      <!-- directive : Vue의 명령 수행, 'v-' 접두어를 사용하는 경우 -->
      <h2 v-text="title" id="home"/>
      <p v-html="tagList"/>
      <!--v-bind:class클래스 속성 바인딩-->
      <p v-text="tagList" v-bind:class="textStyle"/>
      <!-- v-bind 디렉티브 : 단방향 (변수가 변경되었을때 태그의 값을 일방적으로 집어넣는것) -->
      <hr>
      <!-- v-model 디렉티브 : 양방향 // 속성을 특정 짓지 않음 -->
      <input type="text" v-model="valueMode">
      <p>{{ valueMode }}, {{ typeof valueMode }}</p>
      <input type="number" v-model.lazy="numberModel"> <!--인풋이 number 인경우에만 숫자 계산이됨!!-->
      <!--lazy 수식어 해당 디렉티브 옆에 보조적으로 사용하기떄문에 수식어라고함-->
      <!-- lazy 딜레이거는거 명시적으로 엔터치거나 포커스 이동할 경우에 값이 반영 되도록 하는것 -->
      <p>{{ numberModel }}, {{ numberModel + 10000 }}</p>
      <select v-model="selectModel">
         <option value="summer">여름</option>
         <option value="winter">겨울</option>
      </select>
      <p>{{ selectModel }}</p>
      <textarea v-model="textModel"></textarea>
      <hr>
      <!-- 양방향 예외적인 디렉티브 바인딩 name 속성 쓰지 않음 하나의 변수에 담음 -->
      <input type="checkbox" v-model="chData"
         true-value="여" false-value="부">
      <p>{{ chData }}</p>
      <div>
         <input type="checkbox" value="서울" v-model="city">서울
         <input type="checkbox" value="대구" v-model="city">대구
         <p>{{ city }}</p>
      </div>
      <div>
         <input type="radio" value="독서" v-model="hobby">독서
         <input type="radio" value="영화" v-model="hobby">영화
         <input type="radio" value="운동" v-model="hobby">운동
         <p>{{ hobby }}</p>
      </div>
      <hr>
      <img v-bind:style="styleData" v-bind:src="imgUrl">
      <!-- isActive, hasError ture and false 이고 이걸로 온오프 하는거임 -->
      <!-- 그냥 변수이름임 adb, def 로 해도됨 그냥 boolaen 값을 저장하는 변수이름을 이걸로한거임-->
      <div class="container"
            v-bind:class="{'active' : isActive, 'text-red' : hasError}">
            Class Binding First</div>
      <div class="container"
            v-bind:class="myClass">Class binding Second</div>
   </div>
</template>

<script>
export default {
   data(){  //데이터 바인딩에 사용하는 데이터들 (RUUD)
      return {
         title : '이변수가 위에 바인딩됨 h1, h2에 Hello, Vue.js',
         tagList : '<strong>Today is ... </strong>',
         textStyle : 'text-red',
         valueMode : 'Korea',
         numberModel : '0',
         selectModel : 'winter',
         textModel : '백견불여일타',
         chData : '',  //단일값 (ture, false) 체크박스 1개일경우 기본 디폴트 
         //true-value="여" false-value="부" 필요에 의해서 이런식으로 바꿔서 써도 됨
         city : [],  //여러개 선택할수있도록 배열에 담아야함 (선택된값의 밸류가 배열로)
         hobby : '', //단일값 (선택값의 벨류)
         styleData : {
            backgroundColor : 'skyblue',  //스타일 속성은객체로 값을 줘야한다
            //'background-color' : 'skyblue',   <==이게 정석
            width : '200px'
         },
         //styleData : 'background-color : skyblue; width:200px;', //<==이렇게도 사용가능한데 이건 뷰쓰는 이유가없어짐
         imgUrl : 'https://kr.vuejs.org/images/logo.png',
         isActive : false,
         //hasError : !this.isActive, //hasError은 고유의값이 아님 isActive 의 반대값을 가지게 했음(이건 초기값 설정)
         myClass : 'active'
      }
   },
   computed : {   //이미 존재하는 데이터 기반으로 계산한 결과값(Read Only)
      //계속 반대값을 사용하려면 computed에 선언해야함
      hasError : function(){
         return !this.isActive;
      }
   }, //데이터 바인딩에 사용하는 데이터들(R)[읽기 전용임]
   methods : {},  //컴포넌트 내부에서 사용하는 기능 및 함수
   watch : {}, //감시자
   components : {},  //하위 컴포넌트 목록
   props : [], //부모로부터 넘겨반ㄷ은 데이터들
}
</script>

<style>
   .text-red {
      color: red;
   }
   .text-blue {
      color: blue;
   }
   .container {
      width: 100%;
      height: 200px;
   }

   .active {
      background-color: aquamarine;
      font-weight: bold;
   }
</style>