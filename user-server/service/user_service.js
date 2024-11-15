// service/user_service.js
// 기능이라서 함수가 등록이 되어야한다
// 함수 선언이 아니라 표현식(변수에 함수를 등록하는) 형태로 진행한다

const mysql = require('../database/mapper.js');

//전체조회
const findAll = async ()=>{
   let list =( await mysql.query('userList') );
   return list;
};

//단건조회
const findByNo = async (userNo)=>{
   let list =( await mysql.query('userInfo', userNo) );
   let info = list[0];
   return info;
};

//등록
const createNewUser = async (userInfo)=>{
   let result =( await mysql.query('userInsert', userInfo) );
   if(result.insertId > 0){
      return { user_no : result.insertId };
   }else{
      return {};
   }
   //return result;
};

//수정
const updateUserInfo = async (userNo ,userInfo)=>{
   let data = [userInfo, userNo];
   let result =( await mysql.query('userUpate', data) );
   let returnData = {};
   if(result.changedRows == 1){
      returnData.target = { 'user_no' : userNo };
      returnData.result = true;
   }else{
      returnData.result = false;
   }
   return returnData;
};

//삭제
const delUserInfo = async (userNo)=>{
   let result =( await mysql.query('userDelete', userNo) );
   //let info = result[0];
   //결과값 안보여주고 싶어서
   if(result.affectedRows == 1 && result.changedRows == 0){
      return { "result" : "success", "user_no" : userNo };
   }else{
      return { "result" : "fail" };
   }
   //return result;
};

module.exports = {
   findAll,
   findByNo,
   createNewUser,
   updateUserInfo,
   delUserInfo,
};