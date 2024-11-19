<!-- views/TextModal.vue -->
<template>
    <Layout>
        <!--하나정돈 이름 없어도 되나자 default 적으면됨 2개는 안됨-->
        <template v-slot:header>
            <h1>팝업 제목</h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </Layout>
</template>

<script>
import Layout from './ModalLayout.vue';

export default {
    components:{
        Layout,
    },
};
</script>

<style></style>