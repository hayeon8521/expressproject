//익스프레스 모듈 연결
const express = require('express');
//익스프레스 모듈이용 서버 생성
const server = express();

//파일 스트림 모듈사용 (파일 읽거나 쓰고나)
const fs = require('fs');
//파일을 읽어와서
const jsonFile = fs.readFileSync('../express-server/data.json');
//json형태로 변경
const jsonData = JSON.parse(jsonFile);

//미들웨어 body에 있는 내용을 json 형태로 만들어줌
//이거 있어서 등록기능 처리됨
server.use(express.json());

//함수만들어서 매개변수별로 페이지 처리하고싶음
const query = (crud, target, where = null)=>{
    let result = null;

    let emps = jsonData;    //위에 json 데이터
    //crud = 텍스트 벨류
    switch(crud){
        case 'SELECT' :{
            //조건절없으면 생 json 조건절 있으면 필터처리
            //json데이터에 객체하나하나의값 filter(value, index)인데
            //저렇게 value 만 사용가능 //리턴은 참 거짓으로 해주고
            //참인것만 출력하는거임
            //그럼 ID비교니까 where는 ID값 들어가면 될듯
            result = (where == null) ? emps : emps.filter(emp => {
                return findEmp(emp, where);
            });
            break;
        }
        case 'INSERT' :{
            emps.push(target);
            break;
        }
        case 'UPDATE' :{
            //query('UPDATE', req.body, {id:req.params.id})
            emps.forEach(emp => {
                if(findEmp(emp, where)){
                    for(let field in target){
                        emp[field] = target[field];
                    }
                }
            });
            break;
        }
        case 'DELETE' :{
            let selected = null;
            emps.forEach( (emp, idx)=>{
                if(findEmp(emp, where)){
                    selected = idx;
                }
            });

            emps.splice(selected, 1);
            break;
        } 
    }
    return result;
};

function findEmp(emp, where){
    let fieldNum = 0; //총 검색조건 갯수
    let selected = 0; // true인 검색 조건 갯수
    for(let field in where){
        fieldNum++;
        if(emp[field] == where[field]){
            selected++; //값이 같으면 1출력 (참)
        }
    }
    //where가 있어서 1차 승인
    //ID값이 같아서 2차 승인
    return (fieldNum == selected);
} 

//서버포트 연결 및 메인페이지 설정
server.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
});

//get형태로 / 페이지 호출하면 보여주는 화면
server.get('/', (req, res)=>{
    res.sendFile('index.html', {root : __dirname});
});

//emps 엔드포인트에서 데이터 보여주고싶음
server.get('/emps', (req, res)=>{
    res.send(jsonData);
});

//전체출력
server.get('/emps/:id', (req, res)=>{
    res.send( query('SELECT', null, null) );
});

//선택출력
server.get('/emps/:id', (req, res)=>{
    console.log({ id: req.params.id }); 
    res.send( query('SELECT', null, {id : req.params.id}) );
});

//나머지건은 boomerang - SOAP 크롬 확장앱으로 테스트

//등록
server.post('/emps', (req, res)=>{
    //주소창 쿼리아니고 바디에 있는 데이터 집어넣는거
    console.log(req.body);
    res.send( query('INSERT', req.body) );
});

//수정
server.put('/emps/:id', (req, res)=>{
    res.send( query('UPDATE', req.body, { id : req.params.id }) );
});

server.delete('/emps/:id', (req, res)=>{
    res.send( query('DELETE', null, { id : req.params.id }) );
});



//이미지 폴더 url 맵핑
server.use('/img', express.static('../express-server/images'));

//여기로 흐름이 넘어감
server.use(function(err, req, res, next){
    res.status(500).json({statusCode: res.statusCode,
                         errMessage : err.errMessage});
 });

 //오류가 발생하면
 server.get('/error', (req, res, next)=>{
    next(new Error('Process Fail! Check Data!'));
 });


//[라우터 등록]
//유저 라우터 만든거 사용
const userRouter = require('./router/user.js');
//유저 라우터 전체에 매핑할 주소
server.use('/user', userRouter);