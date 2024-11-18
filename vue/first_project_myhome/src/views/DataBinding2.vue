<!-- 뷰를 구성하는 3개 태그 -->
<template>
    <div>
        <!--태그 사이 변수사용-->
        <h1>{{ title }}</h1>
        <!--태그 속성으로 변수사용-->
        <h2 v-text="title"/>
        <!-- html 태그로 변수 사용-->
        <p v-html="tagList"/>
    </div>
</template>

<script>
export default {
    data(){ //데이터 바인딩에 사용하는 데이터들 (RUUD)
        return {
            title : '변수이름이에요',
            tagList : '<Strong>변수에 태그 적으면 태그로 표출돼요</Strong>'
        }
    },
    computed : {}, //데이터 바인딩에 사용하는 데이터들(R)[읽기 전용임]
    methods : {},  //컴포넌트 내부에서 사용하는 기능 및 함수
    watch : {}, //감시자
    components : {},  //하위 컴포넌트 목록
    props : [], //부모로부터 넘겨받은 데이터들
}
</script>

<style></style>