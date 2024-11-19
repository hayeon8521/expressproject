<!-- components/CommonComponent.vue -->
<template>
    <div>
        <!--component가 가지는 HTML-->
    </div>
</template>

<script>
//자바스크립트 영역
//component를 관리하는 vue 객체 정의
export default{
    data(){ // data(CURD)
        let today = new Data();
        return{
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
        };
    },
    computed:{  //기존 데이터를 기반으로 연산한 결과 (리드온니)
        AfterYear(){
            return this.year+1;
        }
    },
    mothods:{   //뷰가 사용하는 모든 종류의 함수 (탬플릿에서 호출 불가)

    },
    watch:{ //리턴으로 값이 종료되면 안됨, 데이터 변경에 따른 추가 작업
        month(){
            if(this.month < 10){
                this.month = '0' + this.month;
            }
        }
    }
};
</script>

<style></style>