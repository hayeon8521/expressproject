<template>
    <div>
        <!-- @ => v-on: 과 같은거임 -->
        <!--self는 자신의 하위에서 발생하는 이벤트는 대응하지 않겠다-->
        <form v-on:click.self="msg('form')">
            Form
            <!-- once는 단한번만 이벤트가 발생하게 버블링이든 셀프든 1번만 하고 안나옴-->
            <div @click.once="msg('div')">
                Div
                <!--stop는 버블링을 무력화하는 것-->
                <p @click.stop="msg('p')">
                    p
                    <!-- prevent는 a태그 기본 이밴트(href) 무력화-->
                    <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
                </p>
            </div>
        </form>


        <hr>
        <!--v-on:click = @click 같은 의미-->
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <!--input에 타입속성을 안적으면 기본타입 text로 설정되는데 이렇게하면 숫자로 입력받음-->
        <input v-model.number="num"> <!-- 이거 안되면 Number(), parseInt() 2개 사용하기-->
        <button type="button" @click="setCount(num, $event)">Add {{ num }}</button>
        <!--$event 뷰가 제공하는 일종의 전역변수(이미등록되어있는 숨겨진변수)-->
        <p>The Counter is : {{ counter }}</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0,
            num: 7
        }
    },
    computed: {},
    methods: {
        //버블링과 캡처링
        msg(tag) {
            alert(`${tag}, 선택`);
        },

        //클릭이벤트로 처리 2가지 방법
        increaseCounter(event) {
            console.log('increase', event);
            this.counter++;
        },
        setCount(value, event) {
            console.log('setCount', event);
            this.counter += value;
        }
    },
    watch: {},
    components: {},
    props: [],
}
</script>

<style scoped>
form,
form * {
    margin: 10px;
    border: 1px solid skyblue;
}
</style>