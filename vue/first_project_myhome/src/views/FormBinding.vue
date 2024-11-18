<!-- 뷰를 구성하는 3개 태그 -->
<template>
    <div>
        <input type="text" v-model="valueMode"> <!-- v-model => value에요 -->
        <p>{{ valueMode }}, {{ typeof valueMode }}</p>


        <input type="number" v-model.lazy="numberModel">    <!--lazy 엔터, 포커스 이동할때 값이 반영되게 하는것-->
        <p>{{ numberModel }}, {{ numberModel + 10000 }}</p> <!-- 데이터 수식은 number type로 받아야해요 -->


        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>


        <textarea v-model="textModel"></textarea>


        <hr>
        <!--true-value="여" false-value="부" 이거 없으면 chData변수 true, false를 가짐-->
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
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
    </div>
</template>

<script>
export default {
    data() { //데이터 바인딩에 사용하는 데이터들 (RUUD)
        return {
            valueMode: '변수에요',
            numberModel: '0',
            selectModel: 'winter',
            textModel: '백견불여일타',
            chData: '여',  //단일값 (ture, false) 체크박스 1개일경우 기본 디폴트 
            //true-value="여" false-value="부" 필요에 의해서 이런식으로 바꿔서 써도 됨
            city: [],  //여러개 선택할수있도록 배열에 담아야함 (선택된값의 밸류가 배열로)
            hobby: '기본값', //단일값 (선택값의 벨류)
        }
    },
    computed: {}, //데이터 바인딩에 사용하는 데이터들(R)[읽기 전용임]
    methods: {},  //컴포넌트 내부에서 사용하는 기능 및 함수
    watch: {}, //감시자
    components: {},  //하위 컴포넌트 목록
    props: [], //부모로부터 넘겨받은 데이터들
}
</script>

<style></style>