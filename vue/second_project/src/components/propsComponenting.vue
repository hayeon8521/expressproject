<!--propsComponenting.vue-->
<template>
    <div>
        <RefComponent ref="child" />
        <hr>
        <label>부모 데이터 : <input type="number" v-model="num"></label>
        <button type="button" @click="childHandler">자식 제어</button>
    </div>
</template>

<script>
import RefComponent from './RefComponent.vue';

export default {
    methods:{
        childHandler(){
            //버튼 누지르면 자식 plusCount 이벤트 호출해서 처리한다
            //this.$refs.child.plusCount(); //이렇게도 할수있고

            //이렇게도 할수있다
            let RefComponent = this.$refs.child;
            RefComponent.$refs.btn.click();
        },
    },
    data(){
        return{
            num : 0,
        };
    },
    watch:{
        //num을 계속 감시하다 변경되면 이벤트 발생
        num(){
            console.log(this.$refs);
            //자식 content 변수를 엄마 num 변수값으로 바꾼다
            this.$refs.child.content = this.num; //<==child의 id가 될것임
        },
    },
    components: {
        RefComponent,
    },
};
</script>