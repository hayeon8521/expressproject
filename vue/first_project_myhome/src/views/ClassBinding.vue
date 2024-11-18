<!-- 뷰를 구성하는 3개 태그 -->
<template>
    <div>
        <img v-bind:style="styleData" v-bind:src="imgUrl">


        <!-- isActive, hasError 그냥 변수이름임 ab cd 해도됨 의미없음 -->
        <div class="container" v-bind:class="{ 'active': isActive, 'text-red': hasError }">
            클래스 이름 active , text-red
            <br> true, false 를 이용해서 클래스 온오프 가능
        </div>


        <div class="container" v-bind:class="myClass">myClass이건 변수고 변수안에 있는 값이 클래스명임</div>

    </div>
</template>

<script>
export default {
    data() { //데이터 바인딩에 사용하는 데이터들 (RUUD)
        return {
            styleData : {
                backgroundColor : 'skyblue',
                width : '200px'
            },
            imgUrl : 'https://kr.vuejs.org/images/logo.png',

            isActive : false,
            //hasError : !this.isActive,  //이렇게하면 isActive가 false 의 낫 이니까 true로 클래스 활성화
            
            myClass : 'active'
        }
    },
    computed: {
        //특정값에 대해 실시간으로 반영하려면 여기에 작업해야함
        hasError(){
            return !this.isActive;
        }
    },
    methods: {},
    watch: {},
    components: {},
    props: [],
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