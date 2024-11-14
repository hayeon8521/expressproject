// middleApp.js

const express = require('express'); //익스프레스 프레임워크
const cors = require('cors'); //특정 ID 허용 모듈
const session = require('express-session'); //세션 모듈 불러오기
const app = express();  //익스프레스 프레임워크로 서버 생성

// 모든 요청에 응답
//app.use(cors());

//지정한 요청에 대해서만 응담
const corsOption = {
   origin : 'http://192.168.0.34:5500',
   optionsSuccessStatus : 200 //강제 오류 발생시키는거
};
app.use(cors(corsOption));

//라우터등록
//이번에 json 말고 쿼리 스트링으로 보랠려고함
//application/x-www-form-urlencoded (통신의 기본 타입)[get방식]
//참고로 json은 get방식으로 못넘김
app.use(express.urlencoded({extended : false}));

//엔드포인트 설정
app.post('/info', (req, res)=>{
   res.send(`keyword : ${req.body.search}`);
});

app.listen(3000, ()=>{
   console.log('http://localhost:3000');
});

//세션 기본 설정
let sessionSetting = session({
   secret : 'secret key',  //암호화 키 (seedkey)
   resave : false,   //세션의 저장여부
   saveUninitialized : true,  //로그인 전에도 세션을 생성할건지 true면 자동로그인 되어있따
   cookie : {
      httpOnly : true,  //자바스크립트 기반으로 해당 쿠키 접근을 막는다
      secure : false,   //보안 관련 부분
      maxAge : 60000    //쿠키의 유효기간
   }
});

//세션 미들웨어 등록
app.use(sessionSetting);

//세션 사용의 가장 기본적인 기능 (로그인/로그아웃)
app.post('/login', (req, res)=>{
   const { id, pwd } = req.body; //바디에있는 폼 정보를 받아옴
   req.session.user = id;
   req.session.pwd = pwd;
   req.session.save(function(err){
      if(err) throw err;
      res.redirect('/');
   });
});

//로그인(폼값을 던져줌)
app.get('/', (req, res)=>{
   res.send(req.session);
});

//로그아웃
app.get('/logout', (req, res)=>{
   req.session.destroy();
   res.redirect('/');
});