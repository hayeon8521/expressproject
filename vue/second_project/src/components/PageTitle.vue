<!-- components/PageTitle.vue -->
<template>
    <h2>{{ title }}</h2>
</template>

<script>
export default {
    //부모가 넘겨주는값을 정의 (배열 또는 객체로 받을수 있음 대게 배열로 받음)
    //정의는 할 수 있으나 재정의 불가능
    props: ['title'],
    created() {
        console.log('PageTitle.vue Created');
    },
    mounted() {
        console.log('PageTitle.vue Mounted');
    }
};
</script>