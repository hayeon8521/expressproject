const { userInfo } = require("../../user-server/database/sqls/user");

//맵퍼 모듈 연결
const mysql = require('../database/mapper.js');

//전체조회 userList
const findAll = async ()=>{
    let list = await mysql.query('userList');
    return list;
};

//단건조회 userInfo
const findByNo = async (userNo)=>{
    let list = await mysql.query('userInfo', userNo);
    let info = list[0];
    return info;
};

//등록 userInsert
const createNewUser = async (userInfo)=>{
    let result = await mysql.query('userInsert', userInfo);
    if(result.insertId > 0){
        return { user_no : result.insertId };
    }else{
        return {};
    }
};

//수정 userUpate
const updateUserInfo = async (userNo, userInfo)=>{
    let data = [userInfo, userNo];
    let result = await mysql.query('userUpate', data);
    let returnData = {};
    if(result.changedRows == 1){
        returnData.target = { 'user_no' : userNo };
        returnData.result = true;
    }else{
        returnData.result = false;
    }
    return returnData;
};

//삭제 userDelete
const delUserInfo = async (userNo)=>{
    let result = await mysql.query('userDelete', userNo);
    if(result.affectedRows == 1 && result.changedRows == 0){
        return { "result" : "success", "user_no" : userNo };
    }else{
        return { "result" : "fail" };
    }
};

module.exports = {
    findAll,
    findByNo,
    createNewUser,
    updateUserInfo,
    delUserInfo,
};