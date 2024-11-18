<!-- 뷰를 구성하는 3개 태그 -->
<template>
    <div>
        <!--인라인방식 : onclick 이벤트 addData 클릭이벤트 핸들러 addData() 이렇게는 안됨!!!! -->
        <button v-on:click="addData">+</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <!--반복문 원래는 idx를 키로 사용하면 안됨!! -->
                <tr v-for="(prod, idx) in goods" v-bind:key="idx">
                    <td>{{ prod.product_name }}</td>
                    <td>{{ prod.price }}</td>
                    <td>{{ prod.category }}</td>
                    <td>{{ prod.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
let data = [
    {
        product_name: "기계식키보드",
        price: 25000,
        category: "노트북/태블릿",
        delivery_price: 5000,
    },
    {
        product_name: "무선마우스",
        price: 12000,
        category: "노트북/태블릿",
        delivery_price: 5000,
    },
    {
        product_name: "아이패드",
        price: 725000,
        category: "노트북/태블릿",
        delivery_price: 5000,
    },
];


export default {
    data() { //데이터 바인딩에 사용하는 데이터들 (RUUD)
        return {
            goods : data
        }
    },
    computed: {},
    methods: {
        addData(event){
            console.log(event);

            let obj = {
                product_name : '무선충전기',
                price : 250000,
                category : '노트북/태블릿',
                delivery_price : 3000,
            }

            //배열길이구함
            let index = this.goods.length;
            //배열마지막에 객체 넣음 //배열은 0 부터시작이여서 길이 구하면 그건 +1 이라서 이렇게하는거
            this.goods[index] = obj;
        }
    },
    watch: {},
    components: {},
    props: [],
}
</script>

<style></style>