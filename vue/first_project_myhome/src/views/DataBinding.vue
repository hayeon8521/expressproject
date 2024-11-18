<!-- 뷰를 구성하는 3개 태그 -->
<template>
    <div>
        <h1>안녕하세요 자식 컴포넌트 입니다</h1>
    </div>
</template>

<script>
export default {
    data(){ //데이터 바인딩에 사용하는 데이터들 (RUUD)
        return {
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