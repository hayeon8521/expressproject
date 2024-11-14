// mapper.js
const mysql = require('mysql');  //mysql 모듈 등록
const sql = require('./sql.js'); //sql 작업한 쿼리 호출

//커넥션 풀 (동시다발적 커넥션을 대응해야한다)
const pool = mysql.createPool({
   host : `localhost`,
   port : `3306`,
   user : `dev01`,
   password : `1234`,
   database : `dev`,
   connectionLimit : 10
});

//선택한 쿼리문을 실행할 객체(함수형태 객체)
const query = (alias, values)=>{ //alias=>customerList(쿼리문)  //values=조건절
   //Promise 비동기작업 그런데 동기 작업으로 하려고 async await 로 app.js에서 요청
   return new Promise( (resolve, reject)=>{
      let excuteSql = sql[alias]; // seq.customerInfo 인거임 쿼리문 찾는거임
      console.log(excuteSql);
      console.log(values);
      //excuteSql은 실제 쿼리문 // values는 결과
      pool.query(excuteSql, values, (err, results)=>{ //<= mysql에 값을 던짐
         //실제로 실행한 결과를 반환 (콜백함수이용)
         if(err){
            console.log(err);
            reject({err}); //실패결과
         }else{
            resolve(results); //성공결과
         }
      });
   });
};

module.exports = {
   query
};