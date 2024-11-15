//db 접속 모듈 불러오기
const mysql = require('mysql');
//sql 쿼리문 집합 모듈 가져오기
const sqlList = require('./sqls/user.js');

//sql 접속 정보 셋팅
const connectionPool = mysql.createPool({
   host : process.env.MYSQL_HOST,
   port : process.env.MYSQL_PORT,
   user : process.env.MYSQL_USER,
   password : process.env.MYSQL_PWD,
   database : process.env.MYSQL_DB,
   connectionLimit : process.env.MYSQL_LIMIT,
   debug : true
});
//debug : true 디버그 모드를 제공해줌


/*
자바스크립트에서 객체를 사용하는방법
let obj = { "id" : "hong", "age" : 1234, "first name" : "haha" };
obj["first name"]; <=이게 정식 방법!! (띄워쓰기 있으면 쌍따 필요)
obj[id]; <= 띄워쓰기 없으면 쌍따 안해도됨
obj.id;

그럼 아래 2개는 같을까?? NO
obj[alias];
obj.alias; => obj["alias"]; 가 되어버림
alias가 변경가능성이 있으면!!!!!!!!!
무조건 [] 로 해서 가져와야함
. 으로 가져오면 해당 필드 값으로 고정 되어버림
*/

//쿼리 모듈 들어오면 처리 하는것
const query = (alias, values)=>{
   return new Promise((resolve, reject)=>{
      let excuteSql = sqlList[alias];  // <= 변동되는 값으로 호출하고싶다
      connectionPool.query(excuteSql, values, (err, results, fields)=>{
         //console.log(fields); //너무 많은 정보에 쓸데없는거
         if(err){
            console.log(err);
            reject({err});
         }else{
            resolve(results);
         }
      });
   });
};

module.exports = {
   query,
};