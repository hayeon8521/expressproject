//app.js
//보통 서버를 실행하는 파일을 app.js 로 칭함

//파일 시스템 모듈을 써야지만 data.json 가져올수있음
const fs = require('fs');

// 가장먼저해야하는것 서버생성
const express = require('express'); //익스프레스 기반의 모듈을 가져와서
const server = express();  //서버를 생성


//이미지폴더를 img url로 접근 하게 변경해줌
server.use('/img', express.static('./images'));

//에러처리하는 부분
//status(500) 네트워크 선택코드를 강제로 지정하는것
server.use(function(err, req, res, next){
   res.status(500).json({statusCode: res.statusCode,
                        errMessage : err.errMessage});
});
//에러 발생하는 위치
server.get('/error', (req, res, next)=>{
   next(new Error('Process Fail! Check Data!'));
});

//미들 웨어 등록
// 서버를 사용할때 익스프레스에서 미리 만들어서 제공해주는것
//이렇게하면 모든 라우팅에서 json 사용가능하다 이걸 써야지 json으로 삽입 수정 가능
server.use(express.json());   //익스프레스가 가지고있는 json 파싱을 등록하는것


//[라우터 등록]
//유저 라우터 만든거 사용
const userRouter = require('./router/user.js');
//유저 라우터 전체에 매핑할 주소
server.use('/user', userRouter);



//DB 설정
//readFileSync 파일을 다 읽어드리고 작엽하는 메소드 (예외적으로 동기식으로 진행)
const jsonFile = fs.readFileSync('data.json');
//json 데이터를 변환 하는것
const jsonData = JSON.parse(jsonFile);

const query = (crud, target, where = null)=>{
   let result = null;
 
   let emps = jsonData;
   switch(crud){
   // 조회
   case 'SELECT' :
     result = (where == null) ? emps :  emps.filter(emp => {
       return findEmp(emp, where);
     });
     break;  
 
   // 등록
   case 'INSERT' :
     emps.push(target);
     break;
   // 수정
   case 'UPDATE' :
     emps.forEach(emp => {
       if(findEmp(emp, where)){
         for(let field in target){
           emp[field] = target[field];
         }
       }
     });
     break;
   // 삭제
   case 'DELETE' :
     let selected = null;
     emps.forEach((emp, idx) => {
       if(findEmp(emp, where)){
         selected = idx;
       }
     });
 
     emps.splice(selected, 1);
     break;
   }
   return result;
 };
 
 function findEmp(emp, where){
   let fieldNum = 0; //총 검색조건 갯수
   let selected = 0; // true인 검색 조건 갯수
   
   for(let field in where){   //객체 순환하는 반복문
     fieldNum++;
     if(emp[field] == where[field]){
       selected++;
     }
   }
   return (fieldNum == selected);
 }









//서버 포트 생성 (일반적으로 3000포트 사용)
server.listen(3000, ()=>{
   //포트 생성할때 어떤 작업을할지 결정해서 처리해주면됨
   console.log('Server Start');
   console.log('http://localhost:3000');
});


//루트 경로에 작업하나 진행
//루트는 아무자 거의 들어올수있어서 겟 메소드로 진행함
server.get('/', (req, res)=>{
   //res.send('Server Connect!'); <== 이거 지우면 안됨 주석처리하는거임
   //res.send('Server Connect!');
   res.sendFile('index.html', {root : __dirname});
});

//data.json을 클라이언트 서버에서 조회 할수있는 것을 만들어보자
//익스프레스 기반으로 (저게 DB이고 연결됬다고 가정하고 연습)
//엔드포인트 구성 먼저 하기 (처리 메소드, URL) 주석으로
//이후에 실제코드 코딩하기 (먼가 서블릿에 컨트롤.java 느낌임)

//http://localhost:3000/emps 이렇게 호출하는거
//전체조회 : GET, emps
server.get('/emps', (req, res)=>{
   //res.send(jsonData);
   res.send(query('SELECT'));
});

/*
3개다 사용자의 데이터를 가지고 있는건 맞음
req.parms => pathvariable
3) pathvariable => 컨텍트타입 없음
req.params 속성
(쉽게 말하면 URL을 구성하는 한개의 항목으로 인지되기떄문에)
(컨텐트 타입과는 무관함)


req.body => JSON
2) application/json
=> JSON : {} or []
=> req.body 속성


req.query => QuerySring
1) application/x-www-form-urlencode
=> QuerySring(질의문자열) : key=vaule&key=value&...
익스프레스에서
=> req.query 로 가져오는것
https://velog.io/@onady/HTTP-Content-Type <=참조하기
*/

//http://localhost:3000/emps/10 이렇게 콜론ID는 원하는 값을 넣어야함
//단건조회 : GET, emps/:id => pathvariable(경로에붙는변수 방식)
server.get('/emps/:id', (req, res)=>{
   //res.send('Emp Info');
   //★req로 자꾸 받을려해서 오류났음 res로 해야함
   res.send(query('SELECT', null, { id: req.params.id }));
});

//등록 : POST, emps
server.post('/emps', (req, res)=>{
   console.log(req.body);
   //res.send('Emp Insert');
   res.send(query('INSERT', req.body));
});

//수정 : PUT, emps/:id
server.put('/emps/:id', (req, res)=>{
   //res.send('Emp Update');
   res.send(query('UPDATE', req.body, { id: req.params.id }));
});

//삭제 : DELETE, emps/:id
server.delete('/emps/:id', (req, res)=>{
   //res.send('Emp Delete');
   res.send(query('DELETE', null, { id : req.params.id }));
});