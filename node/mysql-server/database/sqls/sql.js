//sql.js 파일을 모아 놓는곳
//쿼리문은 백팁 권장!!
//여긴 쿼리문만 작성할꺼임

//전체조회
const customerList = 
`select id
         , name
         , email
         , phone
         , address
 from customers
 order by id`;

//단건조회
const customerInfo = 
`select id
         , name
         , email
         , phone
         , address
 from customers
 where id = ?`;

//등록
const customerInsert =
`insert into customers
 set ?`; //<=객체타입 { 'name' = 'Hong', 'phone' = '010-1234-1344' }

//수정
const customerUpdate =
`update customers
 set ?
 where id = ?`;
//set ?는 객체 // id ?는 단위값
//결국 2개를 같이 받으려면 배열
/*
   [ 
      { 'name' = 'Hong', 'phone' = '010-1234-1344' },
      1
   ]
*/

//왜 이런식으로 작성하냐고 ??? case로 데이터있는것만 처리하는걸못해서
// 만약 set id = ? 이런식으로하면 모든 경우의 수 쿼리를 짜야함

/*
[? 처리의 판단 기준]

1) ? 의 갯수
   1-1) 1개 : 단일 값
   1-2) 2개 이상 : 배열

2) ? 앞에 컬럼의 유무
   2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자,숫자,날짜 등)
   2-2) 컬럼이 없는 경우 객체
*/


//삭제
const customerDelete =
`delete from customers
 where id = ?`;

//여기에 선언되어져 있는 모듈만
//외부에서 접근가능하다
module.exports = {
   customerList,
   customerInfo,
   customerInsert,
   customerUpdate,
   customerDelete
};