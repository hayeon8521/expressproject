//sql 접속 모듈 호출
const mysql = require('mysql');
// 쿼리 모듈 호출
const sqlList = require('./sqls/user.js');

//DB연결정보 입력(환경변수로)
const connectionPool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT,
    debug : true
});
//debug : true 디버그 모드르를 이용 정확한 쿼리문 을 확인가능

//쿼리를 처리하고 결과를 반환하는 모듈 작성
const query = (alias, values)=>{
    return new Promise((resolve, reject)=>{
        let excuteSql = sqlList[alias];
        connectionPool.query(excuteSql, values, (err, results, fields)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        });
    });
};
 
 //외부에서 사용가능하도록 모듈화 진행
module.exports = {
query,
};