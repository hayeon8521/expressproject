<!-- components/PropsComponent.vue -->
<template>
    <div>
        <!--부모에서 태그 속성으로 변수 만들고 자식은 스크립트에서 props로 받음-->
        <PageTitle title="Hello, Vue.js!!!" />
        <hr>
        <!--"header" 이건 변수임 문자로는 '"header"'으로 해야함-->
        <!--
        <PageContent v-bind:title="header"
                    v-bind:count="10"
                    :writer="['Adward']"
                    :regdate="20231205"
                    :content="{ first: 'Node.js', second: 'Vue.js' }"/>
        -->
        <PageContent v-bind="info" v-on:update-info="handler" />
        <hr>
        <RefComponent ref="child" />
        <hr>
        <label>부모 데이터 : <input type="number" v-model="num"></label>
        <button type="button" @click="childHandler">자식 제어</button>
    </div>
</template>

<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';

export default {
    methods:{
        handler(info){
            console.log(info);
            alert('자식 컴포넌트 요청');
        },
        childHandler(){
            //this.$refs.child.plusCount();
            let RefComponent = this.$refs.child;
            RefComponent.$refs.btn.click();
        },
    },
    data(){
        return{
            header : "게시글 조회",
            info:{
                title: '게시글 제목',
                count: 5,
                writer: 'Adward',
                regdate: '2024-11=19',
                content: '게시글 없음',
            },
            num : 0,
        };
    },
    watch:{
        num(){
            console.log(this.$refs);
            this.$refs.child.content = this.num; //<==child의 id가 될것임
        },
    },
    components: {
        PageTitle,
        PageContent,
        RefComponent,
    },
    created() {
        console.log('PropsComponent.vue Created');
    },
    mounted() {
        console.log('PropsComponent.vue Mounted');
    }
};
</script>